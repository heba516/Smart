import Image from "next/image";

function SpecialSystem() {
    return (
        <section className="px-6 grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-5 mt-14">
            <Image
                className="mt-8 ml-14"
                src="/images/specialSystem1.png"
                width={343}
                height={341}
                alt="smart security"
            />
            <Image
                className=""
                src="/images/specialSystem2.png"
                width={475}
                height={470}
                alt="smart basket"
            />
            <Image
                className="mt-8 ml-5"
                src="/images/specialSystem3.png"
                width={343}
                height={341}
                alt="smart shelf"
            />
        </section>
    );
}

export default SpecialSystem;
