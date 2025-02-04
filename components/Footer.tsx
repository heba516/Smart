import Image from "next/image";

const Footer = () => {
    return (
        <section
            id="footer"
            className="bg-[#2A2A2A] mx-auto w-full min-h-screen text-center"
        >
			<div className="flex border-white border-b">
				<Image
						className=""
                        src={"/images/logo.png"}
                        alt="smartmart"
                        width={60}
                        height={60}
                        loading="lazy"
                    />
					<div>

					</div>
			</div>
			<div className="h-[17px] font-semibold text-sm text-white">
				@2024  Smart |  All rights recieved
			</div>
		</section>
    );
};

export default Footer;



