import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import TextSpan from "./TextSpan";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-scroll";

function Home() {
	const ref = useRef(null);
	const isInView = useInView(ref);
	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView, mainControls]);
	const first = "Hello,".split("");
	const second = "I'm Rohit Kumar Chaurasia".split("");
	return (
		<div>
			<motion.div
				ref={ref}
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 0.5, delay: 0.25 }}
				className=" flex flex-col flex-wrap md:ml-[2rem] items-start justify-center h-screen "
				id="home"
			>
				<div className=" text-[50px] ">
					{first.map((letter, index) => {
						return (
							<TextSpan className="" key={index}>
								{letter === " " ? "\u00A0" : letter}
							</TextSpan>
						);
					})}
				</div>
				<div className=" text-[50px]">
					{second.map((letter, index) => {
						return (
							<TextSpan className="" key={index}>
								{letter === " " ? "\u00A0" : letter}
							</TextSpan>
						);
					})}
				</div>
				<div className="">
					A Fullstack Developer and a Coding Enthusiast seeking new challenges
					and opportunites to expand my knowledge and expertise
				</div>
				<div className="flex mt-3 mb-3 flex-row items-center justify-center ">
					<a
						href="https://github.com/Rohit-kr-17"
						target="_blank"
						className="border hover:animate-bounce flex justify-center mr-5  w-fit p-[5px] rounded-full hover:bg-red-400  items-center transition-all ease-out duration-500 bg-white hover:text-white text-center"
					>
						<AiFillGithub className="text-[25px]" />
					</a>
					<a
						href="https://leetcode.com/Rohit_017/"
						target="_blank"
						className="border hover:animate-bounce flex justify-center  w-fit p-[5px] mr-5 rounded-full hover:bg-red-400  items-center transition-all ease-out duration-500 bg-white hover:text-white text-center"
					>
						<SiLeetcode className="text-[25px]" />
					</a>
					<a
						href="https://www.linkedin.com/in/rohit-kumar-chaurasia-0a638a237/7"
						target="_blank"
						className="border hover:animate-bounce flex justify-center w-fit p-[5px]  rounded-full hover:bg-red-400  items-center transition-all ease-out duration-500 bg-white hover:text-white text-center"
					>
						<BsLinkedin className="text-[25px]" />
					</a>
				</div>
				<div>
					<a
						href="mailto:rohit.2001.chaurasia@gmail.com"
						target="_blank"
						className="border hover:animate-bounce flex justify-center md:mt-2  w-fit p-[5px]  hover:bg-red-400 bg-black text-white items-center transition-all ease-out duration-500 border-white  text-center"
					>
						Contact Me
					</a>
				</div>
				<div class="absolute left-[50%] translate-x-[-50%] cursor-pointer animate-bounce bottom-3">
					<Link
						className="text-[2rem] "
						activeClass="active"
						to="contacts"
						spy={true}
						smooth={true}
						duration={500}
					>
						<RiArrowDropDownLine />
					</Link>
				</div>
			</motion.div>
		</div>
	);
}

export default Home;
