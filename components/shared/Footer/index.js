import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/Logo.png";
const Footer = () => {
	return (
		<div className="bg-[#160F15] h-80 text-white text-center overflow-hidden">
			<div className="">
				<Image width={400} height={400} src={Logo} alt="Sebastian's Logo" />
			</div>
			<div>
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
