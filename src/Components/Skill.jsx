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
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Skill() {
	const ref = useRef(null);
	useGSAP(() => {
		const t1 = gsap.timeline({
			scrollTrigger: {
				trigger: "#Technical-skills",
				start: "top bottom",
				end: "top top",
				toggleActions: "restart none none reset",
				scrub: 1,
			},
		});
		const t2 = gsap.timeline({
			scrollTrigger: {
				trigger: "#skill",
				start: "top bottom",
				end: "top top",
				toggleActions: "restart none none reset",
				scrub: 1,
			},
		});

		t1.from("#Technical-skills", {
			x: "-=500",
			scale: 0,
			opacity: 0,
			ease: "power2",
		});
		t2.from(
			[
				"#skill-1",
				"#skill-2",
				"#skill-3",
				"#skill-4",
				"#skill-5",
				"#skill-6",
				"#skill-7",
				"#skill-8",
				"#skill-9",
				"#skill-10",
			],
			{
				ease: "elastic",
				scale: 0,
				opacity: 0,
				stagger: 0.5,
				delay: 10,
			}
		);
	}, []);

	return (
		<div
			ref={ref}
			className="h-auto pt-[10%] flex justify-center items-center"
			id="skill"
		>
			<div className="flex flex-col ">
				<div id="Technical-skills">
					<div className="flex my-4 items-center before:border-t font-spaceGrotesk before:flex-1  before:border-gray-300 after:border-t  after:flex-1  after:border-gray-300 after:border-opacity-0">
						<h2 className="text-center text-[3rem] font-semibold mx-4 ">
							Technical Skills
						</h2>
					</div>
				</div>
				<div className="flex flex-row flex-wrap items-center  justify-center">
					<div id="skill-1">
						<Card skill="C++" img={img1} />
					</div>
					<div id="skill-2">
						<Card skill="Python" img={img2} />
					</div>
					<div id="skill-3">
						<Card skill="JavaScript" img={img3} />
					</div>
					<div id="skill-4">
						<Card skill="ReactJS" img={img4} />
					</div>
					<div id="skill-5">
						<Card skill="NodeJS" img={img5} />
					</div>
					<div id="skill-6">
						<Card skill="Tailwind CSS" img={img6} />
					</div>
					<div id="skill-7">
						<Card
							skill="MongoDB"
							img={
								"https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem-640x400.jpg"
							}
						/>
					</div>
					<div id="skill-8">
						<Card skill="SQL" img={img7} />
					</div>
					<div id="skill-9">
						<Card skill="HTML" img={img8} />
					</div>

					<div id="skill-10">
						<Card skill="CSS" img={img9} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skill;
