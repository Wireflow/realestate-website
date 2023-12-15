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
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select as ShadSelect,
} from "../ui/select";
import { twMerge } from "tailwind-merge";

type SelectProps = {
  control: any;
  name: FieldPath<Pick<Inquiry, "preference">>;
  label?: string;
  size?: number;
  options?: string[];
  description?: string;
  className?: string;
  labelStyle?: string;
  placeholder?: string;
  rules?:
    | Omit<
        RegisterOptions<Inquiry>,
        "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
      >
    | undefined;
};

const Select = ({
  control,
  name,
  label,
  rules,
  options,
  description,
  labelStyle,
  className,
  placeholder,
  ...props
}: SelectProps) => {
  return (
    <FormField
      control={control}
      rules={rules}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={labelStyle}>{label}</FormLabel>
          <FormControl>
            <ShadSelect onValueChange={field.onChange} {...field}>
              <SelectTrigger
                className={`py-6 ${
                  options?.includes(field.value as string)
                    ? ""
                    : "text-gray-500"
                }`}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options?.map((val, i: number) => (
                  <SelectItem
                    key={i}
                    value={val}
                    className={twMerge("capitalize py-3", className)}
                  >
                    {val}
                  </SelectItem>
                ))}
              </SelectContent>
            </ShadSelect>
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Select;
