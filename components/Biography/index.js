import React from "react";
import Image from "next/image";
import Hero from "../../public/images/PurpleHero.jpg";
const Biograhy = () => {
	return (
		<div style={{ position: "relative", overflow: "hidden" }}>
			<div className="ellipse1" />
			<div className="ellipse2" />
			<div className="ellipse3" />
			<div className="ellipse4" />
			<div className="ellipse7" />
			<div className="ellipse8" />
			<div className="ellipse9" />
			<div className="ellipse10" />
			<div className="ellipse-eleven" />
			<div className="ellipse-twelve" />

			<div className="w-full h-full purple-gradient justify-center items-center text-center sm:px:18 lg:px-24 text-white flex p-12 gap-12 md:p-2 md:gap-8">
				<div className="md:my-24 xs:my-4 w-90 md:mt-24 sm:mt-36 ">
					<h1 className="lg:text-7xl text-left md:text-4xl md:mb-4 font-main">
						Biography
					</h1>
					<p className="text-xsm text-left">
						Sebastian Mateo is a DJ and producer from Lima, Peru. Inspired by
						EDM and Pop sounds, he is the leading producer of his country,
						having the support from the biggest DJs in the world such as David
						Guetta, Hardwell, Afrojack and many more, as well as having millions
						of streams across all the streaming platforms.
					</p>
				</div>

				<div className=" lg:w-[1000px] sm:w-[900px] lg:py-24 lg:px:24">
					<Image className="" src={Hero} alt="Hero Image" />
				</div>
			</div>
		</div>
	);
};

export default Biograhy;
