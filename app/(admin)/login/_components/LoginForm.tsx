"use client";
import { zodResolver } from "@hookform/resolvers/zod";
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
} from "@/components/ui";
import { login } from "@/app/api/actions/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
// import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(1, { message: "Password must be at least 1 characters." }),
});

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
  // const [error, setError] = useState<string>("");

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      console.log(data);

      await login(data);

      router.push("/dashboard");
      // redirect("/dashboard");
    } catch (error) {
      console.log(error);
      // setError("Invalid Email Or Password");
      toast.error("Invalid Email Or Password");
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
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {inputs.map((input, index) => (
          <FormField
            key={index}
            control={form.control}
            name={input.name}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold text-base">
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
        {/*
        <FormItem className="flex lg:flex-row flex-col justify-between item-center space-y-0">
          <FormLabel className="text-base lg:text-center">
            keep me signed in
            <Icon
              icon="rivet-icons:question-mark-solid"
              className="text-gray-400 inline ml-1.5"
              width="16"
              height="16"
            />
          </FormLabel>
          <Link
            className="text-primaryRed underline hover:text-secondaryRed"
            href="/forget_password"
          >
            Forget password ?
          </Link>
        </FormItem> 

         {error && (
          <div className="my-2">
            <p className="text-center text-primaryRed">
              Invalid Email Or Password
            </p>
          </div>
        )} */}

        <Button
          disabled={loading}
          variant={"default"}
          className="w-full p-6 text-xl leading-4 font-semibold rounded-lg bg-primaryRed lg:mt-4"
          type="submit"
        >
          {loading ? "Logging in..." : "Log in"}
        </Button>
      </form>
    </Form>
  );
}
