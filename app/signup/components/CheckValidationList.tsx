"use client";
import clsx from "clsx";
import { Icon } from "@iconify/react";

export const PasswordValidationChecklist = ({
  password,
}: {
  password: string;
}) => {
  const rules = [
    { label: "Minimum of 8 characters", isValid: password.length >= 8 },
    { label: "1 uppercase character", isValid: /[A-Z]/.test(password) },
    { label: "1 lowercase character", isValid: /[a-z]/.test(password) },
    { label: "1 number character", isValid: /[0-9]/.test(password) },
    { label: "1 special character", isValid: /[\W_]/.test(password) },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-10">
      {rules.map((rule, index) => (
        <div key={index} className="flex items-center space-x-2">
          <span>
            <Icon
              icon="solar:check-circle-bold"
              className={clsx(
                "inline-block w-6 h-6 rounded-full",
                rule.isValid ? "text-green-500" : "text-gray-300"
              )}
            />
          </span>
          <span>{rule.label}</span>
        </div>
      ))}
    </div>
  );
};
