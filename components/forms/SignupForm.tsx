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
  Checkbox,
} from "@/components/ui";
import { PasswordValidationChecklist } from "@/components/CheckValidationList";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { signup } from "@/app/actions/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const formSchema = z
  .object({
    firstName: z.string().min(2, {
      message: "must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
      message: "must be at least 2 characters.",
    }),
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

interface IInput {
  name: "firstName" | "lastName" | "email" | "password" | "confirmPassword";
  label: string;
  placeholder: string;
  type: string;
}

const groupedInputs: IInput[] = [
  {
    name: "firstName",
    label: "First name",
    placeholder: "Enter your first name",
    type: "text",
  },
  {
    name: "lastName",
    label: "Last name",
    placeholder: "Enter your last name",
    type: "text",
  },
];
const inputs: IInput[] = [
  {
    name: "email",
    label: "Email address",
    placeholder: "Enter your email address",
    type: "text",
  },
  {
    name: "password",
    label: "Password",
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

const SignupForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      const res = await signup(data);
      console.log(res);
      router.push("/login");
    } catch (error) {
      // throw error;
      console.log(error);
      toast.error("An account with this email already exists. Please log in");
    } finally {
      setLoading(false);
    }
  }

  const [passwordVisible, setPasswordVisible] = useState(false);
  const password = form.watch("password");
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          {groupedInputs.map((input, index) => (
            <FormField
              key={index}
              control={form.control}
              name={input.name}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-semibold text-base text-black">
                    {input.label}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type={input.type}
                      className={cn(
                        form.formState.errors[input.name] && "shadow-error"
                      )}
                      placeholder={input.placeholder}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>

        {inputs.map((input, index) => (
          <FormField
            key={index}
            control={form.control}
            name={input.name}
            render={({ field }) => (
              <FormItem className="w-full">
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
                {input.name === "password" && (
                  <PasswordValidationChecklist password={password} />
                )}
              </FormItem>
            )}
          />
        ))}

        <Button
          disabled={loading}
          variant={"default"}
          className="w-full  h-12 text-xl leading-4 font-semibold rounded-lg bg-primaryRed"
          type="submit"
        >
          Create account
        </Button>

        <div className="flex items-center space-x-3">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I want to receive emails about the product, feature updates, events,
            and marketing promotions.
          </label>
        </div>
      </form>
    </Form>
  );
};

export default SignupForm;
