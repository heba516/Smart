import ForgetPasswordLayout from "@/components/ForgetPasswordLayout";
import VerificationCode from "@/components/forms/VerificationCode";

const page = () => {
  return (
    <div className="flex">
      <VerificationCode />
      <ForgetPasswordLayout />
    </div>
  );
};

export default page;
