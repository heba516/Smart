"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Input,
  Button,
  FormDescription,
} from "../ui";
import { PasswordValidationChecklist } from "../CheckValidationList";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { useState } from "react";

interface IInput {
  name: "password" | "confirmPassword";
  label: string;
  placeholder: string;
  type: string;
}

const formSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number." })
      .regex(/[\W_]/, {
        message: "Password must contain at least one special character.",
      }),
    confirmPassword: z.string().min(8, { message: "Passwords do not match." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

const inputs: IInput[] = [
  {
    name: "password",
    label: "New Password",
    placeholder: "Enter your password",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Confirm password",
    placeholder: "Enter your password again",
    type: "password",
  },
];

const CreateNewPassword = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const [passwordVisible, setPasswordVisible] = useState(false);
  const password = form.watch("password");
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="w-full h-screen px-4 py-8 lg:px-5 lg:py-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full lg:w-[482px] mx-auto"
        >
          <div className="text-center space-y-2 my-10">
            <FormLabel className="text-primaryRed text-4xl font-bold">
              Create a new password
            </FormLabel>
            <FormDescription className="text-medGray text-base font-medium">
              new password must be different from current password
            </FormDescription>
          </div>

          {inputs.map((input, index) => (
            <FormField
              key={index}
              control={form.control}
              name={input.name}
              render={({ field }) => (
                <FormItem className="w-full my-5">
                  <FormLabel className="font-semibold text-base text-black">
                    {input.label}
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={
                          input.type === "password" && passwordVisible
                            ? "text"
                            : input.type
                        }
                        className={cn(
                          form.formState.errors[input.name] && "shadow-error"
                        )}
                        placeholder={input.placeholder}
                        {...field}
                      />
                      {
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500 focus:outline-none"
                        >
                          {passwordVisible ? (
                            <Icon
                              icon="fluent:eye-off-20-regular"
                              width="20"
                              height="20"
                            />
                          ) : (
                            <Icon
                              icon="fluent:eye-20-regular"
                              width="20"
                              height="20"
                            />
                          )}
                        </button>
                      }
                    </div>
                  </FormControl>
                  <FormMessage />
                  {input.name === "password" && (
                    <PasswordValidationChecklist password={password} />
                  )}
                </FormItem>
              )}
            />
          ))}

          <Button
            variant={"default"}
            className="w-full h-12 text-xl leading-4 font-semibold rounded-lg bg-primaryRed "
            type="submit"
          >
            Reset Password
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateNewPassword;
