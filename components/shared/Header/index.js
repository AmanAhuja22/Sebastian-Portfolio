import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/Logo.png";
const Header = () => {
	return (
		<header className="purple-gradient flex items-center justify-between  p-4  text-white h-20 lg:pr-12 ">
			<div className="p-0 ">
				<Image
					className="absolute"
					alt="Logo"
					width="500"
					height="500"
					src={Logo}
				/>
			</div>

			<div className=" hidden  font-satoshi2 lg:flex gap-12 items-center">
				<ul className=" flex gap-12 uppercase ">
					<li className="pr-4 cursor-pointer hover:bg-gray-600 hover:bg-opacity-10 p-2 mr-4 hover:rounded-md">
						About
					</li>
					<li className="pr-4 cursor-pointer hover:bg-gray-600 hover:bg-opacity-10 p-2 mr-4 hover:rounded-md">
						Music
					</li>
					<li className="pr-4 cursor-pointer hover:bg-gray-600 hover:bg-opacity-10 p-2 mr-4 hover:rounded-md">
						Tutorial
					</li>
					<li className="pr-4 cursor-pointer hover:bg-gray-600 hover:bg-opacity-10 p-2 mr-4 hover:rounded-md">
						Contact
					</li>
				</ul>

				<button className="bg-purple-700 rounded-full px-8 py-2">
					Spanish
				</button>
			</div>
		</header>
	);
};

export default Header;
