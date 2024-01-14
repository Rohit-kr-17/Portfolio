import React, { useEffect, useRef, useState } from "react";
import img1 from "../assets/Realtor-Clone-React.png";
import img2 from "../assets/WeatherJS.png";
import img3 from "../assets/Blog-Portal-Home.png";
import img4 from "../assets/Tesla-UI-Clone.png";
import img5 from "../assets/Product-Dashboard.png";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Projects() {
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
		tl.from("#project-head", {
			x: "+=50%",
			scale: 0,
			opacity: 0,
			duration: 2,
			ease: "power2",
		});

		const tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: "#project-1",
				start: "top bottom",
				end: "top center",
				toggleActions: "restart none none reset",
				scrub: 1,
			},
		});
		const tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: "#project-2",
				start: "top bottom",
				end: "top center",
				toggleActions: "restart none none reset",
				scrub: 1,
			},
		});
		const tl3 = gsap.timeline({
			scrollTrigger: {
				trigger: "#project-3",
				start: "top bottom",
				end: "top center",
				toggleActions: "restart none none reset",
				scrub: 1,
			},
		});
		const tl4 = gsap.timeline({
			scrollTrigger: {
				trigger: "#project-4",
				start: "top bottom",
				end: "top center",
				toggleActions: "restart none none reset",
				scrub: 1,
			},
		});
		const tl5 = gsap.timeline({
			scrollTrigger: {
				trigger: "#project-5",
				start: "top bottom",
				end: "top bottom",
				toggleActions: "restart none none reset",
				scrub: 1,
			},
		});

		tl1.from("#project-1", {
			x: "-=50%",
			opacity: 0,
			ease: "power1",
		});
		tl2.from("#project-2", {
			x: "+=50%",
			opacity: 0,
			ease: "power1",
		});
		tl3.from("#project-3", {
			x: "-=50%",
			opacity: 0,
			ease: "power1",
		});
		tl4.from("#project-4", {
			x: "+=50%",
			opacity: 0,
			ease: "power1",
		});
		tl5.from("#project-5", {
			y: "+=50%",
			opacity: 0,
			ease: "power1",
		});
	}, []);

	return (
		<div ref={ref} className="  pt-[5rem]" id="projects">
			<div
				id="project-head"
				className="flex my-4 items-center before:border-t  before:flex-1  before:border-gray-300 after:border-t-[5px]  after:flex-1  after:border-gray-300 before:border-opacity-0"
			>
				<h2 className="text-center text-[3rem] font-spaceGrotesk font-semibold mx-4 ">
					Projects
				</h2>
			</div>
			<div className="flex flex-col md:flex-row m-2 flex-wrap items-center justify-center">
				<div
					id="project-1"
					className="border h-[200px] m-2 md:m-5 w-[340px] md:h-[300px] md:w-[500px]"
					style={{
						background: `url(${img5}) center,no-repeat`,
						backgroundSize: "cover",
					}}
				>
					<div className="flex flex-col items-center justify-center h-full w-full p-[2rem] opacity-0 bg-slate-500 bg-opacity-40 hover:opacity-100 transition-all ease-in-out duration-300  ">
						<h2 className="text-[#fff] text- center selection:font-bold text-[2rem] ">
							Product Dashboard using MERN
						</h2>
						<a
							href="https://github.com/Rohit-kr-17/Dashboard"
							target="_blank"
							className="border flex justify-center w-fit p-1 rounded-md hover:bg-red-400 hover:border-red-400 items-center transition-all ease-out duration-300 bg-white hover:text-white text-center"
						>
							<AiFillGithub className="" /> GitHub Repository
						</a>
						<a
							href="https://dashboard-eight-pi.vercel.app/"
							target="_blank"
							alt=""
							className="border flex justify-center w-fit p-1 rounded-md hover:bg-red-400 mt-2 hover:border-red-400 items-center transition-all ease-out duration-300 bg-white hover:text-white text-center"
						>
							<BiLinkExternal className="" /> View Project
						</a>
					</div>
				</div>
				<div
					id="project-2"
					className="border h-[200px] m-2 md:m-5 w-[340px] md:h-[300px] md:w-[500px]"
					style={{
						background: `url(${img1}) center,no-repeat`,
						backgroundSize: "cover",
					}}
				>
					<div className="flex flex-col items-center justify-center h-full w-full p-[2rem] opacity-0 bg-slate-500 bg-opacity-40 hover:opacity-100 transition-all ease-in-out duration-300  ">
						<h2 className="text-[#fff] text-center font-bold text-[2rem] ">
							Realtor Clone using React & Firebase
						</h2>
						<a
							href="https://github.com/Rohit-kr-17/Realtor"
							target="_blank"
							className="border flex justify-center w-fit p-1 rounded-md hover:bg-red-400 hover:border-red-400 items-center transition-all ease-out duration-300 bg-white hover:text-white text-center"
						>
							<AiFillGithub className="" /> GitHub Repository
						</a>
						<a
							href="https://realtor-lilac.vercel.app/"
							target="_blank"
							alt=""
							className="border flex justify-center w-fit p-1 rounded-md hover:bg-red-400 mt-2 hover:border-red-400 items-center transition-all ease-out duration-300 bg-white hover:text-white text-center"
						>
							<BiLinkExternal className="" /> View Project
						</a>
					</div>
				</div>
				<div
					id="project-3"
					className="border h-[200px] m-2 md:m-5 w-[340px] md:h-[300px] md:w-[500px]"
					style={{
						background: `url(${img2}) center,no-repeat`,
						backgroundSize: "cover",
					}}
				>
					<div className="flex flex-col items-center justify-center h-full w-full p-[2rem] opacity-0 bg-slate-500 bg-opacity-40 hover:opacity-100 transition-all ease-in-out duration-300  ">
						<h2 className="text-[#fff] text-center font-bold text-[2rem] ">
							Weather App using Javascript and weather API
						</h2>
						<a
							href="https://github.com/Rohit-kr-17/weather-app"
							target="_blank"
							className="border flex justify-center w-fit p-1 rounded-md hover:bg-red-400 hover:border-red-400 items-center transition-all ease-out duration-300 bg-white hover:text-white text-center"
						>
							<AiFillGithub className="" /> GitHub Repository
						</a>
						<a
							href="https://weather-app-002.netlify.app/"
							target="_blank"
							alt=""
							className="border flex justify-center w-fit p-1 rounded-md hover:bg-red-400 mt-2 hover:border-red-400 items-center transition-all ease-out duration-300 bg-white hover:text-white text-center"
						>
							<BiLinkExternal className="" /> View Project
						</a>
					</div>
				</div>
				<div
					id="project-4"
					className="border h-[200px] m-2 md:m-5 w-[340px] md:h-[300px] md:w-[500px]"
					style={{
						background: `url(${img3}) center,no-repeat`,
						backgroundSize: "cover",
					}}
				>
					<div className="flex flex-col items-center justify-center h-full w-full p-[2rem] opacity-0 bg-slate-500 bg-opacity-40 hover:opacity-100 transition-all ease-in-out duration-300  ">
						<h2 className="text-[#fff] text-center  font-bold text-[2rem] ">
							Blog Portal using ExpressJS & ejs template engine
						</h2>
						<a
							href="https://github.com/Rohit-kr-17/Blog-App"
							target="_blank"
							className="border flex justify-center w-fit p-1 rounded-md hover:bg-red-400 hover:border-red-400 items-center transition-all ease-out duration-300 bg-white hover:text-white text-center"
						>
							<AiFillGithub className="" /> GitHub Repository
						</a>
						<a
							href="https://weak-pink-beaver-shoe.cyclic.cloud/"
							target="_blank"
							alt=""
							className="border flex justify-center w-fit p-1 rounded-md hover:bg-red-400 mt-2 hover:border-red-400 items-center transition-all ease-out duration-300 bg-white hover:text-white text-center"
						>
							{" "}
							<BiLinkExternal className="" /> View Project
						</a>
					</div>
				</div>
				<div
					id="project-5"
					className="border h-[200px] m-2 md:m-5 w-[340px] md:h-[300px] md:w-[500px]"
					style={{
						background: `url(${img4}) center,no-repeat`,
						backgroundSize: "cover",
					}}
				>
					<div className="flex flex-col items-center justify-center h-full w-full p-[2rem] opacity-0 bg-slate-500 bg-opacity-40 hover:opacity-100 transition-all ease-in-out duration-300  ">
						<h2 className="text-[#fff] text-center font-bold text-[1.5rem] md:text-[2rem] ">
							Tesla Landing Page using HTML & Tailwind CSS
						</h2>
						<a
							href="https://github.com/Rohit-kr-17/TeslaClone"
							target="_blank"
							className="border flex justify-center w-fit p-1 rounded-md hover:bg-red-400 hover:border-red-400 items-center transition-all ease-out duration-300 bg-white hover:text-white text-center"
						>
							<AiFillGithub className="" /> GitHub Repository
						</a>
						<a
							href="https://64710c83330870109bd88f3c--precious-sherbet-249515.netlify.app/"
							target="_blank"
							alt=""
							className="border flex justify-center w-fit p-1 rounded-md hover:bg-red-400 mt-2 hover:border-red-400 items-center transition-all ease-out duration-300 bg-white hover:text-white text-center"
						>
							<BiLinkExternal className="" /> View Project
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
