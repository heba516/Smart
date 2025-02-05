import CheckEmailForPasswordReset from "@/app/forget_password/components/CheckEmailForPasswordReset";
import ForgetPasswordLayout from "@/components/ForgetPasswordLayout";

export default function page() {
  return (
    <div className="grid grid-cols-1 px-2 sm:px-16 lg:px-0 lg:grid-cols-2 gap-4 h-screen font-urban">
      <CheckEmailForPasswordReset />
      <ForgetPasswordLayout />
    </div>
  );
}
