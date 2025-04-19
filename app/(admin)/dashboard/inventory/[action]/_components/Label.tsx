import { FormLabel } from "@/components/ui";
import React from "react";

const Label = ({ label, opt }: { label: string; opt: boolean }) => {
  return (
    <FormLabel className="font-medium text-lg text-grayColor capitalize">
      {label}
      {opt ? " (optional)" : <span className="text-primaryRed">*</span>}
    </FormLabel>
  );
};

export default Label;
