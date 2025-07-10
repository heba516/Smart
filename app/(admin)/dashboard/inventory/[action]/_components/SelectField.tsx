"use client";
import { Control, FieldPath, FieldValues } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui";
import Label from "../_components/Label";

interface Option {
  label: string;
  value: string;
}

interface SelectFieldProps<T extends FieldValues> {
  control?: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder: string;
  options: Option[];
  optional: boolean;
  onChange?: (value: string) => void;
}

export function SelectField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  options,
  optional = false,
  onChange,
}: SelectFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <Label label={label} opt={optional} />
          <FormControl>
            <Select
              {...field}
              // onValueChange={field.onChange}
              onValueChange={(val) => {
                field.onChange(val);
                onChange?.(val);
              }}
              value={field.value || ""}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {options.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
