import React from "react";
import Image from "next/image";
import Revealed from "../../public/images/Revealed.png";
import Afrojack from "../../public/images/Afrojack.svg";
import Hardwell from "../../public/images/Hardwell.svg";
import David from "../../public/images/David.png";
import DonDiable from "../../public/images/DonDiable.png";
import Hexagon from "../../public/images/Hexagon.png";

const Support = () => {
	return (
		<div className="h-full font-main text-white purple-gradient text-center  text-4xl  md:p-24 sm:p-12">
			<div className="p-4">Supported By</div>

			<div className="flex justify-center items-center gap-24 mt-12 sm:gap-12">
				<div className="w-18 cursor-pointer" title="Afrojack">
					<Image src={Afrojack} alt="Afrojack" />
				</div>
				<div className="w-18 cursor-pointer" title="David Guetta">
					<Image width="200" height={28} src={David} alt="David" />
				</div>
				<div className="w-18 cursor-pointer" title="Hardwell">
					<Image
						style={{ background: "white" }}
						width="180px"
						height="50px"
						src={Hardwell}
					/>
				</div>
				{/* <div className="w-18">
					<Image width="200px" height="40px" src={Hexagon} />
				</div> */}
				<div className="w-18" title="Revealed Recordings">
					<Image width="90px" height="90px" src={Revealed} alt="Revealed" />
				</div>
				{/* <div className="w-18">
					<Image width="200px" height="80px" src={DonDiable} />
				</div> */}
			</div>
			<div className="flex justify-center items-center gap-24 mt-12">
				<div className="w-18 cursor-pointer" title="Hardwell">
					<Image
						style={{ background: "white" }}
						width="180px"
						height="50px"
						src={Hardwell}
					/>
				</div>
				<div className="w-18">
					<Image width="200px" height="40px" src={Hexagon} />
				</div>
				{/* <div className="w-18" title="Revealed Recordings">
					<Image width="90px" height="90px" src={Revealed} alt="Revealed" />
				</div> */}
				<div className="w-18">
					<Image width="200px" height="80px" src={DonDiable} />
				</div>
			</div>
		</div>
	);
};

export default Support;
