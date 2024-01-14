// About.js
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import Logoimage from "../assets/About.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
	const ref = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ref.current,
				start: "top bottom",
				end: "top top",
				toggleActions: "restart none none reset",
				scrub: 1,
			},
		});
		const tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: "#image",
				start: "top bottom",
				end: "top 25%",
				toggleActions: "restart none none reset",
				scrub: 1,
			},
		});
		const tl3 = gsap.timeline({
			scrollTrigger: {
				trigger: "#profile",
				start: "top bottom",
				end: "top top",
				toggleActions: "restart none none reset",
				scrub: 1,
			},
		});
		tl.from("#heading", {
			x: "+=50%",
			scale: 0,
			opacity: 0,
			duration: 2,
			ease: "power2",
		});
		tl2.to("#image", {
			height: 0,
			duration: 1,
			ease: "power1",
		});
		tl3.from("#profile", {
			opacity: 0,
			scale: 2,
			duration: 2,
		});
		tl3.from("#info", {
			y: "+=80",
			opacity: 0,
		});
	}, []);

	return (
		<div ref={ref} id="about" className="h-auto  pt-[5%]">
			<div
				id="heading"
				className="font-spaceGrotesk flex my-4   items-center after:border-t-[5px]   after:flex-1  after:border-gray-300 before:border-t  before:flex-1  before:border-gray-300 before:border-opacity-0"
			>
				<h2 className="text-center text-[3rem] font-bold mx-4 ">About</h2>
			</div>
			<div className="flex md:flex-row flex-col items-center justify-between ">
				<div className="flex relative m-5 md:ml-[10%]  overflow-clip h-auto w-[20rem]">
					<div
						id="image"
						className="h-full w-full absolute bg-black z-10"
					></div>
					<img
						id="profile"
						className="w-[20rem]  z-0  h-[30rem]"
						alt="Profile Pic"
						src={Logoimage}
					></img>
				</div>
				<div
					id="info"
					className=" flex-1 items-center justify-center md:p-[10rem] md:ml-10 md:mr-10 font-spaceGrotesk md:text-[1rem] flex flex-wrap text-center"
				>
					<p>
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
							className="font-bold"
							href="mailto:rohit.2001.chaurasia@gmail.com"
						>
							rohit.2001.chaurasia@gmail.com
						</a>
					</p>
					<a
						className=" flex items-center rounded-md hover:animate-none animate-bounce p-1 mt-5 bg-black hover:bg-red-400 text-white"
						target="_blank"
						href="https://drive.google.com/file/d/1DuufBReQPl-beFIxZ-kQ1Pe9NXpLFP6V/view?usp=drive_link"
					>
						<AiOutlineDownload />
						Download Resume
					</a>
				</div>
			</div>
		</div>
	);
}

export default About;
