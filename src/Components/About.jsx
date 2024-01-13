// About.js
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import Logoimage from "../assets/About.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
	const ref = useRef(null);
	useGSAP(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ref.current,
					start: "top bottom",
					end: "top 10%",
					toggleActions: "restart none none reset",
					scrub: 1,
				},
			});
			tl.from("#heading", {
				x: "-=500",
				scale: 0,
				opacity: 0,
				duration: 2,
				ease: "power2",
			});
			tl.to("#image", {
				height: 0,
				duration: 1,
				ease: "power1",
				delay: -1,
			});
			tl.from("#profile", {
				scale: 2,
				duration: 2,
				delay: -1,
			});
		}, ref);
		return () => ctx.revert();
	}, []);

	return (
		<div ref={ref} id="about" className="h-screen  pt-[5%]">
			<div
				id="heading"
				className="font-spaceGrotesk  flex my-4 items-center after:border-t  after:flex-1  after:border-gray-300 before:border-t  before:flex-1  before:border-gray-300 before:border-opacity-0"
			>
				<h2 className="text-center text-[3rem] font-bold mx-4 ">About</h2>
			</div>
			<div className="flex items-center justify-center flex-wrap">
				<div className="flex relative overflow-clip ml-[10%] h-auto w-[20rem]">
					<div
						id="image"
						className="h-full w-full absolute bg-red-400 z-10"
					></div>
					<img
						id="profile"
						className="w-[20rem]  z-5  h-[30rem]"
						alt="Profile Pic"
						src={Logoimage}
					></img>
				</div>
			</div>
		</div>
	);
}

export default About;
