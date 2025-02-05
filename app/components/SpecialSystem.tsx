import KnowMoreButton from "@/app/components/KnowMoreButton";

function SpecialSystem() {
  return (
    <section className="justify-center items-center gap-7 grid grid-cols-1 lg:grid-cols-3 mt-14 mb-20 px-7 sm:px-20 lg:px-20">
      <div className="group relative flex justify-center items-center order-3 lg:order-1 bg-[url('/images/specialSystem1.png')] bg-cover lg:mt-8 w-full h-[341px] md:h-[470px] lg:h-[341px]">
        <h2 className="bottom-1 absolute opacity-100 group-hover:opacity-0 w-full font-bold text-[38px] text-center text-white uppercase transition-opacity duration-700 ease-in-out">
          Smart Security
        </h2>
        <KnowMoreButton desc="A Smart Security System uses an ESP32 with a camera for real-time monitoring, leveraging AI to detect suspicious activity and alert store management to prevent theft." />
      </div>

      <div className="group relative flex justify-center items-center order-1 lg:order-2 bg-[url('/images/specialSystem2.png')] bg-cover w-full h-[470px]">
        <h2 className="bottom-1 absolute opacity-100 group-hover:opacity-0 w-full font-bold text-[38px] text-center text-white uppercase transition-opacity duration-700 ease-in-out">
          Smart Basket
        </h2>
        <KnowMoreButton desc="Adding weight sensors to a smart basket improves item tracking accuracy, ensures all items are accounted for, and reduces fraud risks." />
      </div>

      <div className="group relative flex justify-center items-center order-2 lg:order-3 bg-[url('/images/specialSystem3.png')] bg-cover lg:mt-8 w-full h-[341px] md:h-[470px] lg:h-[341px]">
        <h2 className="bottom-1 absolute opacity-100 group-hover:opacity-0 w-full font-bold text-[38px] text-center text-white uppercase transition-opacity duration-700 ease-in-out">
          Smart Shelf
        </h2>
        <KnowMoreButton desc="Smart Shelves with weight sensors track inventory in real time, updating stock levels and alerting staff for restocking when items are removed." />
      </div>
    </section>
  );
}

export default SpecialSystem;
