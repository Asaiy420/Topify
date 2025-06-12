import { prismaClient } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";

const UpvoteSchema = z.object({
    streamId: z.string(),
})

export async function POST(req: NextRequest){

    const session = await getServerSession();

    if (!session?.user?.email){
        return NextResponse.json({
            error: "You must be logged in to upvote streams",
        }, {status: 403})
    }

    const user = await prismaClient.user.findFirst({ 
        where: {
            email: session?.user?.email,
        }
    })


    if (!user){
        return NextResponse.json({
            error: "You must be logged in to upvote streams",
        }, {status: 403})
    }

    try {
        const data = UpvoteSchema.parse(await req.json())

        await prismaClient.upvote.create({
            data: {
                userId: user.id,
                streamId: data.streamId,
            }
        })

        return NextResponse.json({
            message: "Upvote successful",
        })

    } catch (e) {
        return NextResponse.json({
            error: "Error when upvoting a stream", e,
        }, {status: 403})
    }

} 