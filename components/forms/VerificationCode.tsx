"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Button,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  verificationCode: z.string().min(1, {
    message: "Your code must be 6 characters.",
  }),
  password: z.number().min(8, {
    message: "Min of 4 chars",
  }),
});

const VerificationCode = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      verificationCode: "",
    },
  });

  const router = useRouter();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    router.push("/reset_password");
    console.log(data);
  }

  return (
    <div className="w-full h-screen px-4 py-8 lg:px-5 lg:py-10 space-y-28">
      <Link
        className="text-base font-medium flex items-center xl:mx-20"
        href={"/login"}
      >
        <Icon
          icon="solar:alt-arrow-left-outline"
          className="mr-[7px]"
          width="20"
          height="24"
        />
        Back to login
      </Link>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full lg:w-[482px] mx-auto space-y-4 text-center"
        >
          <FormField
            control={form.control}
            name="verificationCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primaryRed text-4xl font-bold">
                  Password recovery code
                </FormLabel>
                <FormDescription className="text-medGray text-base font-medium">
                  We sent a 6-digit password recovery code to your email. Enter
                  the code to proceed
                </FormDescription>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup className="mx-auto mt-9">
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="w-full h-12 bg-primaryRed hover:bg-secondaryRed text-xl font-semibold rounded-lg capitalize"
            type="submit"
          >
            Reset Password
          </Button>
          <p className="text-base font-medium">
            Don’t received code ?{" "}
            <span className="underline">resend code </span>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default VerificationCode;
