import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import img1 from "../assets/Realtor-Clone-React.png";
import img2 from "../assets/WeatherJS.png";
import img3 from "../assets/Project-Portal-Home.png";
import img4 from "../assets/Tesla-UI-Clone.png";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
function Projects() {
	const ref = useRef(null);
	const isInView = useInView(ref);
	const mainControls = useAnimation();
	const slideControls = useAnimation();
	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
			slideControls.start("visible");
		}
	}, [isInView]);
	return (
		<motion.div
			ref={ref}
			variants={{
				hidden: { opacity: 0, x: 75 },
				visible: { opacity: 1, x: 0 },
			}}
			initial="hidden"
			animate={mainControls}
			transition={{ duration: 0.7, delay: 0.25 }}
			className="  pt-[5rem]"
			id="projects"
		>
			<div className="flex my-4 items-center before:border-t  before:flex-1  before:border-gray-300 after:border-t  after:flex-1  after:border-gray-300 before:border-opacity-0">
				<h2 className="text-center text-[2rem] font-semibold mx-4 ">
					Projects
				</h2>
			</div>
			<div className="flex flex-col md:flex-row m-2 flex-wrap items-center justify-center">
				<div
					className="border h-[200px] m-2 md:m-5 w-[340px] md:h-[300px] md:w-[500px]"
					style={{
						background: `url(${img1}) center,no-repeat`,
						backgroundSize: "cover",
					}}
				>
					<div className="flex flex-col items-center justify-center h-full w-full p-[2rem] opacity-0 bg-slate-500 bg-opacity-40 hover:opacity-100 transition-all ease-in-out duration-300  ">
						<h2 className="text-[#fff] font-bold text-[2rem] ">
							Realtor Clone
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
					className="border h-[200px] m-2 md:m-5 w-[340px] md:h-[300px] md:w-[500px]"
					style={{
						background: `url(${img2}) center,no-repeat`,
						backgroundSize: "cover",
					}}
				>
					<div className="flex flex-col items-center justify-center h-full w-full p-[2rem] opacity-0 bg-slate-500 bg-opacity-40 hover:opacity-100 transition-all ease-in-out duration-300  ">
						<h2 className="text-[#fff] font-bold text-[2rem] ">Weather App</h2>
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
					className="border h-[200px] m-2 md:m-5 w-[340px] md:h-[300px] md:w-[500px]"
					style={{
						background: `url(${img3}) center,no-repeat`,
						backgroundSize: "cover",
					}}
				>
					<div className="flex flex-col items-center justify-center h-full w-full p-[2rem] opacity-0 bg-slate-500 bg-opacity-40 hover:opacity-100 transition-all ease-in-out duration-300  ">
						<h2 className="text-[#fff] font-bold text-[2rem] ">
							Project Portal
						</h2>
						<a
							href="https://github.com/Rohit-kr-17/Rvscet-Project-Portal"
							target="_blank"
							className="border flex justify-center w-fit p-1 rounded-md hover:bg-red-400 hover:border-red-400 items-center transition-all ease-out duration-300 bg-white hover:text-white text-center"
						>
							<AiFillGithub className="" /> GitHub Repository
						</a>
					</div>
				</div>
				<div
					className="border h-[200px] m-2 md:m-5 w-[340px] md:h-[300px] md:w-[500px]"
					style={{
						background: `url(${img4}) center,no-repeat`,
						backgroundSize: "cover",
					}}
				>
					<div className="flex flex-col items-center justify-center h-full w-full p-[2rem] opacity-0 bg-slate-500 bg-opacity-40 hover:opacity-100 transition-all ease-in-out duration-300  ">
						<h2 className="text-[#fff] font-bold text-[1.5rem] md:text-[2rem] ">
							Tesla Landing Page Clone
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
		</motion.div>
	);
}

export default Projects;
