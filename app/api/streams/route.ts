import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prismaClient } from "@/app/lib/db";
import * as play from "play-dl";
const YT_REGEX = new RegExp(
  "^https?://(www\\.)?youtube\\.com/watch\\?v=[\\w-]{11}(&t=\\d+s)?$"
);

const CreateStreamSchema = z.object({
  creatorId: z.string(),
  url: z.string().includes(""),
});

export async function POST(req: NextRequest) {
  try {
    const data = CreateStreamSchema.parse(await req.json());
    const isYt = YT_REGEX.test(data.url);

    if (!isYt) {
      return NextResponse.json(
        {
          message: "Not a valid youtube url",
        },
        { status: 411 }
      );
    }

    const extractedId = data.url.split("v=")[1].split("&")[0];

    try {
      const info = await play.video_basic_info(`https://www.youtube.com/watch?v=${extractedId}`);
      const res = info.video_details;
      const thumbnails = res.thumbnails ; 
      thumbnails.sort((a: {width: number}, b: {width: number}) => a.width < b.width ? -1 : 1);


      const stream = await prismaClient.stream.create({
        data: {
          userId: data.creatorId,
          url: data.url,
          extractedId,
          type: "Youtube",
          title: res.title ?? "The Stupid API DID NOT WORK!!",
          smallImg: thumbnails.length > 1  ? thumbnails[thumbnails.length - 2].url : thumbnails[thumbnails.length - 1].url ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXo8oXCvHl8xblof25yDlIC5SUw7_p2TW-Mw&s",
          bigImg: thumbnails[thumbnails.length - 1].url ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXo8oXCvHl8xblof25yDlIC5SUw7_p2TW-Mw&s",

        },
      });

      return NextResponse.json({
        message: "Stream added successfully",
        id: stream.id,
      });
    } catch (error) {
      console.error("Error details:", error);
      return NextResponse.json(
        {
          message: "Error when adding a stream",
          error: error instanceof Error ? error.message : "Unknown error",
        },
        { status: 411 }
      );
    }
  } catch (e) {
    return NextResponse.json(
      {
        message: "Error when adding a stream",
        error: e,
      },
      { status: 411 }
    );
  }
}

export async function GET(req: NextRequest) {
  const creatorId = req.nextUrl.searchParams.get("creatorId");
  const streams = await prismaClient.stream.findMany({
    where: {
      userId: creatorId ?? "",
    },
  });
  return NextResponse.json(streams);
}

