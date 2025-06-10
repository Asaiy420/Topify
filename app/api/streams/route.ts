import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prismaClient } from "@/app/lib/db";

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

    const stream = await prismaClient.stream.create({
      data: {
        userId: data.creatorId,
        url: data.url,
        type: "Youtube",
        extractedId,
      },
    });

    return NextResponse.json({
      message: "Stream added successfully",
      id: stream.id,

    })
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

export async function GET(req: NextRequest){
  const creatorId = req.nextUrl.searchParams.get("creatorId");
  const streams = await prismaClient.stream.findMany({
    where: {
      userId: creatorId ?? "",
    }
  })
  return NextResponse.json(streams);
}
