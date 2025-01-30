import { ITems } from "@/interfaces";

const Heading = ({ label, desc }: ITems) => {
  return (
    <header className="px-2 lg:pb-5 text-center">
      <h2 className="text-4xl md:text-5xl font-semibold text-primaryRed mb-2">
        {label}
      </h2>
      <p className="text-sm md:text-base font-medium text-medGray">{desc}</p>
    </header>
  );
};

export default Heading;
