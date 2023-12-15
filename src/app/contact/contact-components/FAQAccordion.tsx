"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/reuseable/Header";

type Props = {};

type QuestionType =
  | "question-1"
  | "question-2"
  | "question-3"
  | "question-4"
  | null;

type Question = {
  value?: QuestionType;
  question?: string;
  answer?: string;
};

const FAQAccordion = (props: Props) => {
  const [active, setActive] = useState<QuestionType>(null);
  const questions: Question[] = [
    {
      value: "question-1",
      question: "Why choose your real estate team?",
      answer:
        "Our team is committed to client satisfaction, backed by a proven track record of successful transactions, personalized service, and in-depth knowledge of the local market. We go the extra mile to turn your real estate goals into reality.",
    },
    {
      value: "question-2",
      question: "What makes your real estate agents stand out?",
      answer:
        "Our experienced, highly skilled agents prioritize clear communication, transparency, and a client-first approach. We aim to provide exceptional service, ensuring you feel confident and informed throughout the entire home-buying process.",
    },
    {
      value: "question-3",
      question:
        "How quickly can I expect to complete the home-buying process with your team?",
      answer:
        "We understand the importance of a timely and efficient process. With our streamlined approach and proactive strategies, we aim to guide you through the home-buying journey swiftly, without compromising on attention to detail or quality service.",
    },
    {
      value: "question-4",
      question: "What role do your agents play in negotiations and closing?",
      answer:
        "Our skilled negotiators work tirelessly to secure the best deal for you. From crafting compelling offers to navigating intricate negotiations, we ensure your interests are well-represented. In the closing stage, our attention to detail ensures a smooth and stress-free transaction.",
    },
  ];

  function handleActive(current: QuestionType) {
    setActive((value) => {
      if (value === current) {
        setTimeout(() => {
          setActive(null);
        }, 150);
      }

      return current;
    });
  }

  return (
    <div className="flex-1">
      <Header
        title="FAQ"
        size="lg"
        description="Answering your questions is our priority, here are some of our most frequently asked questions"
      />
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-4"
      >
        {questions.map((question, index) => (
          <AccordionItem
            value={question.value as string}
            key={index}
            className="border-none"
          >
            <AccordionTrigger
              onClick={() => handleActive(question.value as QuestionType)}
              className={`font-semibold p-6 md:text-lg text-start  ${
                active === question.value
                  ? "rounded-t-xl bg-light-blue"
                  : "rounded-xl bg-gray-200 "
              }`}
            >
              {question.question}
            </AccordionTrigger>
            <AccordionContent
              className={` p-6 rounded-b-xl text-gray-500 md:text-lg ${
                active === question.value ? "bg-light-blue" : "bg-gray-200"
              }`}
            >
              {question.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
