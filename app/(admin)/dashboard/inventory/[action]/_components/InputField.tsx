"use client";
import { Control, FieldPath, FieldValues } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  Input,
  Textarea,
} from "@/components/ui";
import Label from "../_components/Label";

interface TextInputFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder: string;
  optional: boolean;
  inputType: "Textarea" | "Input";
}

export function TextInputField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  optional = false,
  inputType,
}: TextInputFieldProps<T>) {
  return (
    <FormField
      key={name}
      control={control} // Pass the control prop
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <Label label={label} opt={optional} />
          <FormControl>
            {inputType === "Input" ? (
              <Input
                placeholder={placeholder}
                className="border-input"
                {...field} // Spread the field object to manage its value, onChange, etc.
              />
            ) : (
              <Textarea
                placeholder={placeholder}
                className="border-input"
                {...field} // Same for Textarea
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
