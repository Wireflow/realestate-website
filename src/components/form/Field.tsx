"use client";

import { Contact, Inquiry } from "@/types/inquiry";
import { InputHTMLAttributes, ReactNode } from "react";
import { FieldPath, RegisterOptions } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { twMerge } from "tailwind-merge";

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
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

const Field = ({
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
            <Input
              {...field}
              {...props}
              className={twMerge("py-6 bg-white", className)}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Field;
