"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Icon } from "@iconify/react";
import { z } from "zod";
import { toast } from "react-hot-toast";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Input,
  Button,
  Checkbox,
} from "../ui";
import clsx from "clsx";
import { login } from "@/app/actions/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/[0-9]/, {
      message: "Password must contain at least one number.",
    })
    .regex(/[\W_]/, {
      message: "Password must contain at least one special character.",
    }),
  // confirmPassword: z.string(),
});
// .refine((data) => data.password !== data.confirmPassword, {
//   message: "Passwords do not match.",
//   path: ["confirmPassword"],
// });

interface IInput {
  name: "email" | "password";
  label: string;
  placeholder: string;
  type: string;
}

const inputs: IInput[] = [
  {
    name: "email",
    label: "Email address",
    placeholder: "enter your email address",
    type: "text",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "enter your password",
    type: "password",
  },
];

export default function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      const res = await login(data);
      console.log(res);
      router.push("/");
    } catch (error) {
      //throw error;
      console.log(error);
      // setError(true);
      toast.error("No account found with this email/username. Please sign up");
    } finally {
      setLoading(false);
    }
  }

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="flex items-center justify-between gap-3"></div>

        {inputs.map((input, index) => (
          <FormField
            key={index}
            control={form.control}
            name={input.name}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold text-base ">
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
                      className={clsx(
                        form.formState.errors[input.name] && "shadow-error"
                      )}
                      placeholder={input.placeholder}
                      {...field}
                    />
                    {input.type === "password" && (
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
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <div className="flex justify-between item-center">
          <FormItem className="space-x-1.5 ">
            <FormControl>
              <Checkbox />
            </FormControl>
            <FormLabel className="text-[16px] text-center">
              keep me signed in
              <Icon
                icon="rivet-icons:question-mark-solid"
                className="text-gray-400 inline ms-1.5"
                width="16"
                height="16"
              />
            </FormLabel>
          </FormItem>
          <Link
            className="text-primaryRed hover:text-secondaryRed underline"
            href="/forget_password"
          >
            Forget password ?
          </Link>
        </div>

        {/* {error && (
                    <div className="my-2">
                        <p className="text-center text-primaryRed">
                            Could’nt find Your account
                        </p>
                    </div>
                )} */}

        <Button
          disabled={loading}
          variant={"default"}
          className="w-full p-[10px] text-xl leading-4 font-semibold rounded-lg bg-primaryRed mt-4"
          type="submit"
        >
          Log in
        </Button>
      </form>
    </Form>
  );
}
