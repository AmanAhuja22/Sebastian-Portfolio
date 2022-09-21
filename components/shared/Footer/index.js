import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/Logo.png";
const Footer = () => {
	return (
		<div className="bg-[#160F15]  text-white text-center ">
			<div className="">
				<Image
					className="absolute mx-auto"
					width={200}
					height={200}
					src={Logo}
					alt="Sebastian's Logo"
				/>
			</div>
			<div className="text-white">
				<ul className="flex justify-center ">
					<li className="px-8">ABOUT</li>
					<li className="px-8">MUSIC</li>
					<li className="px-8">TUTORIAL</li>
					<li className="px-8">CONTACT</li>
				</ul>
			</div>

			<div className="pt-24 text-gray-200">
				@Copyright2022 | All rights reserved.
			</div>
		</div>
	);
};

export default Footer;
