import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import img1 from "../assets/c-.png";
import img2 from "../assets/python.png";
import img3 from "../assets/java-script.png";
import img4 from "../assets/physics.png";
import img5 from "../assets/nodejs.png";
import img6 from "../assets/tailwind-css.512x307.png";
import img7 from "../assets/database.png";
import img8 from "../assets/html-5.png";
import img9 from "../assets/css-3.png";
import Card from "./Card";
function Skill() {
	const ref = useRef(null);

	return (
		<div
			ref={ref}
			className="h-auto pt-[10%] flex justify-center items-center"
			id="skill"
		>
			<div className="flex flex-col ">
				<div className="flex my-4 items-center before:border-t  before:flex-1  before:border-gray-300 after:border-t  after:flex-1  after:border-gray-300 after:border-opacity-0">
					<h2 className="text-center text-[2rem] font-semibold mx-4 ">
						Technical Skills
					</h2>
				</div>
				<div className="flex flex-row flex-wrap items-center  justify-center">
					<Card skill="C++" img={img1} />
					<Card skill="Python" img={img2} />
					<Card skill="JavaScript" img={img3} />
					<Card skill="ReactJS" img={img4} />
					<Card skill="NodeJS" img={img5} />
					<Card skill="Tailwind CSS" img={img6} />
					<Card
						skill="MongoDB"
						img={
							"https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem-640x400.jpg"
						}
					/>
					<Card skill="SQL" img={img7} />
					<Card skill="HTML" img={img8} />
					<Card skill="CSS" img={img9} />
				</div>
			</div>
		</div>
	);
}

export default Skill;
