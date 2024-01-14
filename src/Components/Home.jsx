import React, { useLayoutEffect, useRef } from "react";
import logo from "../assets/Logo-white.png";
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import TextSpan from "./TextSpan";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-scroll";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Home1() {
	const home = useRef();
	const first = "Hello,".split("");
	const second = "I'm Rohit Kumar Chaurasia".split("");
	useGSAP(() => {
		let ctx = gsap.context(() => {
			const t1 = gsap.timeline();
			t1.from("#logo", {
				opacity: 0,
				scale: 0,
				duration: 2,
				delay: 0.1,
			})
				.from(["#title-1", "#title-2", "#title-3"], {
					opacity: 0,
					y: "+=30",
					delay: 0.3,
					stagger: 0.5,
				})
				.to(["#title-1", "#title-2", "#title-3"], {
					opacity: 0,
					y: "-=30",
					delay: 0.3,
					stagger: 0.5,
				})
				.to("#intro-slider", {
					xPercent: "-100",
					duration: 1.3,
				})
				.from("#home", {
					opacity: 0,
					duration: 0.5,
				});
		}, home);
		return () => ctx.revert();
	}, []);
	return (
		<div className="relative" ref={home}>
			<div
				id="intro-slider"
				className="h-screen  w-screen fixed items-center justify-center p-10 bg-gray-950 top-0 left-0 z-[11]  flex flex-col gap-10 tracking-tight"
			>
				<img src={logo} id="logo" className="h-[30%] md:h-[50%]" alt="" />
				<div className="flex flex-row justify-center items-center flex-wrap text-white gap-5">
					<h1 id="title-1" className="text-3xl">
						Fullstack Developer
					</h1>
					<h1 id="title-2" className="text-3xl">
						Coding Enthusiast
					</h1>
					<h1 id="title-3" className="text-3xl">
						Graphic Designer
					</h1>
				</div>
			</div>

			<div
				className=" flex flex-col flex-wrap md:ml-[2rem] items-center justify-center h-screen "
				id="home"
			>
				<div className="flex  items-center flex-wrap md:flex-nowrap ">
					<div className="flex  flex-col">
						<div className="text-[50px]">
							<span>Hello,</span>
							<br></br>
							<span>I'm Rohit Kumar Chaurasia</span>
						</div>
						<div className=" font-spaceGrotesk">
							A Fullstack Developer and a Coding Enthusiast seeking new
							challenges and opportunities to expand my knowledge and expertise
						</div>
						<div className="flex mt-3 mb-3 flex-row items-center ">
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
					</div>
					<div className="flex items-center justify-center">
						<lottie-player
							src="https://lottie.host/b610f6fb-5c69-4bef-b5ee-9cabb870f42e/g9mjO1H7pL.json"
							background="transparent"
							speed="1"
							style={{ width: "400px", height: "400px" }}
							loop
							autoplay
							direction="1"
							mode="normal"
						></lottie-player>
					</div>
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
			</div>
		</div>
	);
}
{
}
