import React from "react";
import Image from "next/image";
import Hero from "../../public/images/PurpleHero.jpg";
const Biograhy = () => {
	return (
		<>
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

			<div className="w-full h-full purple-gradient justify-center text-center text-white flex p-12 gap-12">
				<div className="md:my-24 w-90 mt-24 pt-36">
					<h1 className="lg:text-7xl mb-12">Biography</h1>
					<p className=" text-left text-lg">
						Sebastian Mateo is a DJ and producer from Lima, Peru. Inspired by
						EDM and Pop sounds, he is the leading producer of his country,
						having the support from the biggest DJs in the world such as David
						Guetta, Hardwell, Afrojack and many more, as well as having millions
						of streams across all the streaming platforms.
					</p>
				</div>

				<div className="w-[100%] my-24 mx-36">
					<Image className="rounded-3xl" src={Hero} />
				</div>
			</div>
		</>
	);
};

export default Biograhy;
