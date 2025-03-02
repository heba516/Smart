import ForgetPasswordLayout from "@/components/ForgetPasswordLayout";
import CreateNewPassword from "@/app/reset_password/_components/CreateNewPassword";

const page = () => {
  return (
    <div className="flex">
      <CreateNewPassword />
      <ForgetPasswordLayout />
    </div>
  );
};

export default page;
