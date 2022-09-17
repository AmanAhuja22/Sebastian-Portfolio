import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/Logo.png";
const Footer = () => {
	return (
		<div className="bg-[#160F15] h-80 text-white text-center ">
			<div className="">
				<Image width={40} height={40} src={Logo} alt="Sebastian's Logo" />
			</div>
			<div className="text-white">
				<ul>
					<li>ABOUT</li>
					<li>MUSIC</li>
					<li>TUTORIAL</li>
					<li>CONTACT</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
