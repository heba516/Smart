import ForgetPasswordLayout from "@/components/ForgetPasswordLayout";
import VerificationCode from "@/app/verification_code/_components/VerificationCode";

const page = () => {
  return (
    <div className="flex">
      <VerificationCode />
      <ForgetPasswordLayout />
    </div>
  );
};

export default page;
