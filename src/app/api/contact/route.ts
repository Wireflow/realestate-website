import { connectToDatabase } from "@/lib/connectdb";
import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma";
import { ContactSchema } from "@/types/contact";

export const POST = async (req: Request, res: Response) => {
  try {
    await connectToDatabase();
    const body = await req.json();
    const { name, email, message } = ContactSchema.parse(body);

    const userMessage = await prisma.message.create({
      data: {
        name,
        email,
        message,
      },
    });

    return NextResponse.json({ data: userMessage }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
