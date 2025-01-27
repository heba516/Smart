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
} from "../ui";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
});

interface IInput {
  name: "email";
  label: string;
  placeholder: string;
}

const inputs: IInput[] = [
  {
    name: "email",
    label: "Email address",
    placeholder: "enter your email address",
  },
];

export default function EmailInputField() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const router = useRouter();

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push("/verification_code");
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="px-8 md:px-20 lg:px-7"
      >
        <div className="flex items-center justify-between gap-3 "></div>

        {inputs.map((input, index) => (
          <FormField
            key={index}
            control={form.control}
            name={input.name}
            render={({ field }) => (
              <FormItem className="w-full mb-8 mt-8">
                <FormLabel className="font-semibold text-base">
                  {input.label}
                </FormLabel>
                <FormControl>
                  <Input
                    className={clsx(
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

        <Button
          variant={"default"}
          className="w-full p-[10px] text-xl leading-4 font-semibold rounded-lg bg-primaryRed mt-4"
          type="submit"
        >
          Reset Password
        </Button>
      </form>
    </Form>
  );
}
