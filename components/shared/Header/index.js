import React from "react";

const Header = () => {
	return (
		<header className="purple-gradient items-center justify-center pt-4  text-white h-20">
			<nav className="container flex  justify-between items-center ">
				<div className="">Logo</div>

				<div className=" flex items-center">
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
			</nav>
		</header>
	);
};

export default Header;
