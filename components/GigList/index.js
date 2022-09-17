import Image from "next/image";
import one from "../../public/images/gigList/1.jpg";
import two from "../../public/images/gigList/2.jpg";
import three from "../../public/images/gigList/3.jpg";
import four from "../../public/images/gigList/4.jpg";
const GigList = () => {
	return (
		<div className="  text-white text-center purple-gradient text-4xl">
			<h1 className="p-12">GigList</h1>
			<div className="container mx-auto px-24 pb-24 flex-col">
				<GigCard image={one} event="Revealed Night ADE 2018 (Netherlands)" />
				<GigCard image={two} event="Astrology Festival 2019 (Peru)" />
				<GigCard
					image={three}
					event="Revealed Recordings Pop-Store ADE 2019 (Netherlands)"
				/>
				<GigCard
					image={four}
					event="Revealed Recordings Presents: RevCraft 1.0 2021 (Virtual Performance)"
				/>
			</div>
		</div>
	);
};

const GigCard = ({ image, event }) => {
	return (
		<ul className="text-left text-lg flex mt-8 items-center px-24 border-white">
			<Image src={image} width={80} height={80} alt="image" />
			<li className="px-8">{event}</li>
		</ul>
	);
};

export default GigList;
