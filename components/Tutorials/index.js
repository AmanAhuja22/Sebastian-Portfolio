import React from "react";

const Tutorial = () => {
	return (
		<div className="purple-gradient text-white text-center  text-4xl pt-12">
			<h1>Tutorials</h1>

			<div className="lg:flex sm:flex-row justify-center items-center">
				<div className="p-12">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/shCTEepchps"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</div>
				<div className="p-12">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/9INsrElC0pU"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</div>
			</div>
		</div>
	);
};

export default Tutorial;
