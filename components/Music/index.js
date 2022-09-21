import React from "react";

const Music = () => {
	return (
		<div className="purple-gradient text-white text-center h-80 text-4xl pt-12">
			Music
			<div className="container mx-auto">
				<iframe
					src="https://open.spotify.com/embed/artist/4McoittPoukRnXpQM6oqus?utm_source=generator&theme=0"
					width="100%"
					height="380"
					frameBorder="0"
					allowFullScreen=""
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"></iframe>
			</div>
		</div>
	);
};

export default Music;
