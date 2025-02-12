import Image from "next/image";

const Footer = () => {
    return (
        <section id="footer" className="bg-[#2A2A2A]">
            <div className="flex md:flex-row flex-col justify-around items-center gap-12 px-5 py-6 lg:ps-20 border-white border-b">
                <Image
                    className=""
                    src={"/images/logo.png"}
                    alt="smartmart"
                    width={48}
                    height={52}
                    loading="lazy"
                />
                <div className="flex lg:flex-row flex-col gap-20">
                    <div className="text-white">
                        <h5 className="mb-2 font-bold text-lg">Navigation</h5>
                        <ul className="space-y-5">
                            <li>Home</li>
                            <li>About</li>
                            <li>Shop</li>
                            <li>Contact Us</li>
                            <li>FQA</li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <h5 className="mb-2 font-bold text-lg">Legal</h5>
                        <ul className="space-y-5">
                            <li>Privacy Policy</li>
                            <li>Terms & Services</li>
                            <li>Terms of Use</li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <h5 className="mb-2 font-bold text-lg">Help</h5>
                        <ul className="space-y-5">
                            <li>Contact us</li>
                            <li>FQA</li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <h5 className="mb-2 font-bold text-lg">Talk to us</h5>
                        <ul className="space-y-5">
                            <li>Smart@gmail.com</li>
                            <li>+20 0124392824</li>
                        </ul>
                    </div>
                </div>
                <div className="space-y-4 bg-white p-4 rounded-md w-full md:w-[340px] md:h-[184px]">
                    <h3 className="font-semibold text-base">
                        Get the Latest Updates from Us
                    </h3>
                    <div className="md:w-full dir-ltr">
                        <input
                            type="text"
                            className="p-1 md:p-2 border-[#8D8D8D] focus:outline-0 w-1/2 text-sm md:text-base"
                            placeholder="Your email address"
                        />

                        <button className="bg-primaryRed p-3 border-none rounded-e-lg text-white">
                            Subscribe
                        </button>
                    </div>
                    <p className="pe-6 font-medium text-[13px] text-medGray">
                        * Will send you weekly updates for your better tool
                        management.
                    </p>
                </div>
            </div>
            <div className="p-[20px] font-semibold text-white text-sm text-center">
                @2024 Smart | All rights recieved
            </div>
        </section>
    );
};

export default Footer;
