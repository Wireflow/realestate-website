"use client";

import { Contact, Inquiry } from "@/types/types";
import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { FieldPath, RegisterOptions } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea as ShadTextarea } from "../ui/textarea";
import { twMerge } from "tailwind-merge";

interface FieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  control: any;
  name: FieldPath<Inquiry | Contact>;
  label?: string;
  size?: number;
  description?: string;
  labelStyle?: string;
  className?: string;
  rules?:
    | Omit<
        RegisterOptions<Inquiry | Contact>,
        "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
      >
    | undefined;
}

const Textarea = ({
  control,
  name,
  label,
  rules,
  description,
  labelStyle,
  className,
  ...props
}: FieldProps) => {
  return (
    <FormField
      control={control}
      rules={rules}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={labelStyle}>{label}</FormLabel>
          <FormControl>
            <ShadTextarea
              {...field}
              {...props}
              className={twMerge("", className)}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Textarea;
