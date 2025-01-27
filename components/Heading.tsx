interface IHeading {
  title: string;
  desc: string;
}
const Heading = ({ title, desc }: IHeading) => {
  return (
    <header>
      <h2 className="text-5xl font-semibold text-primaryRed mb-2">{title}</h2>
      <p className="text-base font-medium text-medGray">{desc}</p>
    </header>
  );
};

export default Heading;
