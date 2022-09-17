import React from "react";
import Image from "next/image";
import Revealed from "../../public/images/Revealed.png";
import Afrojack from "../../public/images/Afrojack.svg";
import Hardwell from "../../public/images/Hardwell.svg";
import MartinGarrix from "../../public/images/MartinGarrix.svg";

import DavidGuetta from "../../public/images/DavidGuetta.svg";
const Support = () => {
	return (
		<div className="h-full text-white purple-gradient text-center  text-4xl pt-12">
			<div className="p-24">Supported By</div>
			<div className="w-18">
				<Image width="90px" height="90px" src={Revealed} alt="Revealed" />
			</div>

			{/* <div className="">
				<Image
					style={{ background: "white" }}
					width="280px"
					height="50px"
					src={DavidGuetta}
				/>
			</div> */}
			<div className="w-18">
				<Image src={Afrojack} alt="Afrojack" />
			</div>
			{/* <div className="w-18">
				<Image
					style={{ background: "white" }}
					width="180px"
					height="50px"
					src={Hardwell}
				/>
			</div> */}
			{/* <div className="w-18">
				<Image
					style={{ background: "white" }}
					width="180px"
					height="50px"
					src={MartinGarrix}
				/>
			</div> */}
		</div>
	);
};

export default Support;
