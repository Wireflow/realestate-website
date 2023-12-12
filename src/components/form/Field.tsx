"use client";

import { Inquiry } from "@/types/types";
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

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  control: any;
  name: FieldPath<Inquiry>;
  label?: string;
  size?: number;
  description?: string;
  labelStyle?: string;
  rules?:
    | Omit<
        RegisterOptions<Inquiry>,
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
            <Input {...field} {...props} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Field;