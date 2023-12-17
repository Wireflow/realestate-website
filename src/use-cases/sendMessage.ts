import request from "@/services/requestHandler";
import { Contact } from "@/types/contact";
import { Message } from "@prisma/client";

const sendMessage = async (message: Contact): Promise<Message> => {
  try {
    const sentMessage = await request<Message>({
      method: "post",
      url: "/api/inquiry",
      data: message,
    });

    return sentMessage;
  } catch (error) {
    console.log("Error sending message:", error);
    throw error;
  }
};

export default sendMessage;
