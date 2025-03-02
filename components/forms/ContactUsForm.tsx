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
  Button,
} from "@/components/ui";
import { contactUs } from "@/app/api/actions/auth";
import toast from "react-hot-toast";

const formSchema = z.object({
  firstName: z.string().min(3, {
    message: "must be at least 3 characters.",
  }),
  lastName: z.string().min(3, {
    message: "must be at least 3 characters.",
  }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Must be a valid mobile number" })
    .max(14, { message: "Must be a valid mobile number" }),
  message: z.string().min(10, { message: "must be at least 10 characters." }),
});

interface IInput {
  name: "firstName" | "lastName" | "email" | "phone" | "message";
  label: string;
  placeholder: string;
  type: string;
}

const groupedInputs: IInput[] = [
  {
    name: "firstName",
    label: "First name",
    placeholder: "",
    type: "text",
  },
  {
    name: "lastName",
    label: "Last name",
    placeholder: "",
    type: "text",
  },
];
const inputs: IInput[] = [
  {
    name: "email",
    label: "Email",
    placeholder: "",
    type: "text",
  },
  {
    name: "phone",
    label: "Phone Number",
    placeholder: "",
    type: "tex",
  },
  {
    name: "message",
    label: "Message",
    placeholder: "",
    type: "text",
  },
];

const ContactUsForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const res = await contactUs(data);
      console.log(res);
      toast.success("Message sent");
      form.reset();
    } catch (error) {
      console.log(error);
      toast.error("An account with this email already exists. Please login");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center space-y-3 p-3 lg:py-5"
      >
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-3">
          {groupedInputs.map((input, index) => (
            <FormField
              key={index}
              control={form.control}
              name={input.name}
              render={({ field }) => (
                <FormItem className="flex flex-col items-start w-full">
                  <FormLabel className="font-semibold text-base text-black ps-2">
                    {input.label}
                  </FormLabel>
                  <FormControl>
                    <input
                      type={input.type}
                      className="border-[#8D8D8D] px-4 border-b w-full focus:outline-0 focus:border-secondaryRed"
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
              <FormItem className="flex flex-col items-start w-full">
                <FormLabel className="font-semibold text-base text-black ps-2">
                  {input.label}
                </FormLabel>
                <FormControl>
                  <input
                    type={input.type}
                    className="border-[#8D8D8D] px-2 border-b w-full focus:outline-0 focus:border-secondaryRed"
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
          className="bg-primaryRed rounded-lg w-[238px] h-[47px] font-semibold text-xl leading-4"
          type="submit"
        >
          Send it
        </Button>
      </form>
    </Form>
  );
};

export default ContactUsForm;
