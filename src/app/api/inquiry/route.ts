import { connectToDatabase } from "@/lib/connectdb";
import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma";
import { InquirySchema } from "@/types/inquiry";

export const POST = async (req: Request, res: Response) => {
  try {
    await connectToDatabase();
    const body = await req.json();
    const { name, phone, preference, location, budget } =
      InquirySchema.parse(body);

    const userInquiry = await prisma.inquiry.create({
      data: {
        name,
        phone,
        propertyType: preference,
        location,
        budget,
      },
    });

    return NextResponse.json({ inquiry: userInquiry }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
