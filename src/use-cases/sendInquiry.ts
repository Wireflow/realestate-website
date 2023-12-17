import request from "@/services/requestHandler";
import { Inquiry } from "@/types/inquiry";
import { Inquiry as dbInquiry } from "@prisma/client";

const sendInquiry = async (inquiry: Inquiry): Promise<dbInquiry> => {
  try {
    const sentInquiry = await request<dbInquiry>({
      method: "post",
      url: "/api/inquiry",
      data: inquiry,
    });

    return sentInquiry;
  } catch (error) {
    console.log("Error sending inquiry:", error);
    throw error;
  }
};

export default sendInquiry;
