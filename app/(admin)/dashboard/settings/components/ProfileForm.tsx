"use client";
import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/ui";
import { getProfile, resetPassword } from "@/app/api/actions/auth";
import { IAdminInfo } from "@/interfaces";

// ✅ Main Profile Schema (no password)
const profileSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  phoneNumber: z.string().min(11, { message: "Enter Valid Phone Number" }),
});

// ✅ Password Schema
const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
      .regex(/[a-z]/, { message: "Must include a lowercase letter." })
      .regex(/[A-Z]/, { message: "Must include an uppercase letter." })
      .regex(/[0-9]/, { message: "Must include a number." })
      .regex(/[^A-Za-z0-9]/, {
        message: "Must include a special character.",
      }),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    path: ["passwordConfirmation"],
    message: "Passwords do not match.",
  });

const ProfileForm = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const [user, setUser] = useState<IAdminInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setPasswordVisible((prev) => !prev);

  const profileForm = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
  });

  const passwordForm = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      passwordConfirmation: "",
    },
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getProfile();
        const userData = res?.data.data.user;
        setUser(userData);
        profileForm.reset({
          firstName: userData.firstName,
          lastName: userData.lastName,
          phoneNumber: userData.phoneNumber,
        });
      } catch (err) {
        console.log("profile", err);
      }
    }
    fetchData();
  }, [profileForm]);

  const onProfileSubmit = (data: z.infer<typeof profileSchema>) => {
    console.log("Profile updated:", data);
    setEdit(false);
  };

  async function onPasswordSubmit(data: z.infer<typeof passwordSchema>) {
    console.log("Password updated:", data);
    try {
      const res = await resetPassword({ ...data, email: user.email });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    passwordForm.reset();
  }

  return (
    <>
      {/* Main Profile Form */}
      <Form {...profileForm}>
        <form onSubmit={profileForm.handleSubmit(onProfileSubmit)}>
          <header className="flex items-center w-full mb-10">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/images/avatar.avif" alt="@shadcn" />
            </Avatar>
            <div className="mx-3 space-y-1">
              <h3 className="text-lg font-semibold">
                {user.firstName} {user.lastName}
              </h3>
              <p>{user.email}</p>
            </div>
            <div className="ml-auto space-x-4">
              {edit ? (
                <>
                  <Button
                    type="button"
                    onClick={() => {
                      profileForm.reset({
                        firstName: user.firstName,
                        lastName: user.lastName,
                        phoneNumber: user.phoneNumber,
                      });
                      setEdit(false);
                    }}
                    size="lg"
                    className="bg-lightGray text-black text-lg font-semibold"
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    size="lg"
                    className="bg-primaryRed text-white text-lg font-semibold"
                  >
                    Save
                  </Button>
                </>
              ) : (
                <Button
                  type="button"
                  onClick={() => setEdit(true)}
                  size="lg"
                  className="bg-primaryRed text-white text-lg font-semibold"
                >
                  Edit
                </Button>
              )}
            </div>
          </header>

          {["firstName", "lastName", "phoneNumber"].map((name) => (
            <FormField
              key={name}
              control={profileForm.control}
              name={name as "firstName" | "lastName" | "phoneNumber"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">{name}</FormLabel>
                  <FormControl>
                    <Input disabled={!edit} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </form>
      </Form>

      {/* Password Form */}
      <Form {...passwordForm}>
        <form
          onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}
          className="mt-12 "
        >
          <h2 className="text-lg font-semibold">Change Password</h2>

          {["password", "passwordConfirmation"].map((name) => (
            <FormField
              key={name}
              control={passwordForm.control}
              name={name as "password" | "passwordConfirmation"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">{name}</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type={passwordVisible ? "text" : "password"}
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        <Icon
                          icon={
                            passwordVisible
                              ? "fluent:eye-off-20-regular"
                              : "fluent:eye-20-regular"
                          }
                          width="20"
                          height="20"
                        />
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button
            type="submit"
            size="lg"
            className="bg-primaryRed text-white text-lg font-semibold"
          >
            Update Password
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ProfileForm;
