import Image from "next/image";
import One from "../../public/images/gigList/One.png";
import AstrologyFestival from "../../public/images/gigList/AstrologyFestival.png";
import PopUpStore from "../../public/images/gigList/PopUpStore.png";
import Ravecraft from "../../public/images/gigList/Ravecraft.png";
const GigList = () => {
	return (
		<div className="text-white text-center purple-gradient sm:p-24 text-4xl">
			<h1 className="p-12 ">GigList</h1>
			<div className="container mx-auto lg:px-0  pb-24 flex-col">
				<GigCard className="card-bottom" image={One} event="Revealed Night ADE 2018 (Netherlands)" />
				<GigCard image={AstrologyFestival} event="Astrology Festival 2019 (Peru)" />
				<GigCard
					image={PopUpStore}
					event="Revealed Recordings Pop-Store ADE 2019 (Netherlands)"
				/>
				<GigCard
					image={Ravecraft}
					event="Revealed Recordings Presents: RevCraft 1.0 2021 (Virtual Performance)"
				/>
			</div>
		</div>
	);
};

const GigCard = ({ image, event }) => {
	return (
		<ul style={{borderBottom: "1px solid #404040"}} className="text-left text-lg flex mt-8 items-center  border-white pb-4">
			<Image src={image} width={120} height={120} alt="Images for gigs" />
			<li className="px-8 text-2xl ">{event}</li>
		</ul>
	);
};

export default GigList;
