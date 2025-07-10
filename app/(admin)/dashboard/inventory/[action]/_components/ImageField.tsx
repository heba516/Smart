"use client";
import React, { useEffect, useState } from "react";
import { Control, FieldPath, FieldValues, useWatch } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  Input,
  FormLabel,
} from "@/components/ui";
import Label from "../_components/Label";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

interface ImageFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
}

export function ImageField<T extends FieldValues>({
  control,
  name,
}: ImageFieldProps<T>) {
  const [imageURL, setImageURL] = useState<string | null>(null);

  const watchedValue = useWatch({ control, name });

  useEffect(() => {
    setImageURL(watchedValue || null);
  }, [watchedValue]);

  // useEffect(() => {
  //   setImageURL(src);
  // }, [src]);
  // console.log(imageURL);

  return (
    <FormField
      key={name}
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem className="w-full">
          <Label label="Upload Product Image" opt={false} />
          <FormControl>
            <FormLabel
              htmlFor="dropzone-file"
              className={cn(
                "flex flex-col items-center justify-center w-full h-64 border-2 border-[#989797] border-dashed rounded-lg cursor-pointer",
                error && "border-destructive bg-destructive/15",
                imageURL
                  ? "bg-contain bg-center bg-no-repeat"
                  : "bg-gray-50 hover:bg-gray-100"
              )}
              style={imageURL ? { backgroundImage: `url(${imageURL})` } : {}}
            >
              {!imageURL && (
                <div className="flex flex-col items-center justify-center pt-5 pb-6 space-y-4">
                  <Icon
                    className="text-[#989797]"
                    icon="entypo:upload"
                    width="61"
                    height="61"
                  />
                  <p className="font-medium text-lg text-black">
                    <span className="text-blue-600">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
              )}
              <Input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const tempUrl = URL.createObjectURL(file);
                    setImageURL(tempUrl);
                    field.onChange(tempUrl);
                  }
                }}
              />
            </FormLabel>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
