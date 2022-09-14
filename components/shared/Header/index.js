import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/Logo.png";
const Header = () => {
	return (
		<header className="purple-gradient font-semibold flex items-center justify-between pt-12 p-4  text-white h-20 lg:pr-12">
			<div className="p-0 ">
				<Image className="absolute" width="500" height="500" src={Logo} />
			</div>

			<div className=" hidden  lg:flex items-center">
				<ul className=" flex uppercase">
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

				<button className="bg-purple-700 rounded-full px-4 py-2">
					Spanish
				</button>
			</div>
		</header>
	);
};

export default Header;
