// About.js
import React, { useEffect, useRef } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import Logoimage from "../assets/About.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
	const ref = useRef(null);
	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".image-container",
				start: "top bottom",
				end: "bottom bottom",
				scrub: true,
			},
		});

		tl.from(".clip-path-element", {
			scale: 1.5,
			ease: "power3.inOut",
			clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", // Gradually reveal the image
			duration: 2,
		}).to(".clip-path-element", {
			ease: "power3.inOut",
			clipPath: "polygon(0 0, 0% 0%, 0% 100%, 0% 100%)", // Start with a fully covered image
			duration: 2,
		});
	}, []);

	return (
		<div
			className="h-auto md:h-screen flex flex-col items-center justify-center"
			id="about"
		>
			<div className="flex my-4 items-center before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300 before:border-opacity-0">
				<h2 className="text-center text-2xl font-semibold mx-4">About Me</h2>
			</div>
			<div className="flex flex-col md:flex-row items-center justify-center mb-10">
				<div ref={ref} className="image-container relative overflow-hidden">
					<div className="clip-path-element absolute inset-0 w-full h-full bg-white"></div>
					<img
						className="image w-80 rounded-lg h-auto md:mt-5"
						src={Logoimage}
						alt="asdsd"
					/>
				</div>
				<div className="pt-5 flex items-center text-center justify-center flex-col w-80 md:w-1/2 md:ml-5 pl-5">
					<div>
						I am Rohit Kumar Chaurasia a final year student at RVS College of
						Engineering and Technology, Jamshedpur, majoring in Bachelors in
						Computer Science and Technology. I am a Full stack Developer and
						coding enthusiast with knowledge of C++, Javascript, NodeJs, ReactJs
						and ExpressJs.I have interned at Shikarthy Infotech as a FullStack
						Developer in the summer of 2023. I have created several projects
						such as Ecommerce Website, Weather App, Realtor Clone, Blog Portal
						and Tesla Clone. I am keen to learning new skills and technologies
						to improve my Web Development and problem solving abilities.You can
						reach me at{" "}
						<a
							className=" text-slate-950 font-bold hover:text-red-400"
							href="mailto:rohit.2001.chaurasia@gmail.com"
							target="_blank"
						>
							rohit.2001.chaurasia@gmail.com
						</a>
					</div>
					<a
						href="https://drive.google.com/file/d/1Iudxg8fWe0RPC-EV0rHOhW0DVBN5sgHj/view?usp=drive_link"
						target="_blank"
						rel="noopener noreferrer"
						alt=""
						className="border flex justify-center w-fit p-1 animate-bounce mt-5 hover:bg-red-400 mt-2 bg-black text-white hover:border-red-400 items-center transition-all ease-out duration-300 hover:text-white text-center"
					>
						<AiOutlineDownload /> View Resume
					</a>
				</div>
			</div>
		</div>
	);
}

export default About;
