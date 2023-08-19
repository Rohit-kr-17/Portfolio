import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import Logoimage from "../assets/About.jpg";

function About() {
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
			className=" h-auto md:h-screen flex flex-col items-center justify-center "
			d
			id="about"
		>
			<div>
				<div className="flex my-4 items-center before:border-t  before:flex-1  before:border-gray-300 after:border-t  after:flex-1  after:border-gray-300 before:border-opacity-0">
					<h2 className="text-center text-[2rem] font-semibold mx-4 ">
						About Me
					</h2>
				</div>
				<div className="flex flex-col  md:flex-row items-center justify-center mb-10">
					<div className="">
						<img
							className="w-[20rem]  rounded-lg  h-auto  md: mt-[5rem]"
							src={Logoimage}
							alt="asdsd"
						/>
					</div>

					<div className="pt-5 flex items-center justify-center flex-col w-[50vh] md:w-[50%] md:ml-5 pl-5">
						<div className="">
							I am Rohit Kumar Chaurasia a final year student at RVS College of
							Engineering and Technology, Jamshedpur, majoring in Bachelors in
							Computer Science and Technology. I am a Full stack Developer and
							coding enthusiast with knowledge of C++, Javascript, NodeJs,
							ReactJs and ExpressJs.I have interned at Shikarthy Infotech as a
							FullStack Developer in the summer of 2023. I have created several
							projects such as Weather App, Realtor Clone, Project Portal and
							Tesla Clone. I am keen to learning new skills and technologies to
							improve my Web Development and problem solving abilities.You can
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
							href="https://drive.google.com/file/d/1VXJqdxGB6lMQDvepZmsNx0txefq1GBq6/view?usp=drive_link"
							target="_blank"
							alt=""
							className="border flex justify-center w-fit p-1 animate-bounce mt-5 hover:bg-red-400 mt-2 bg-black text-white hover:border-red-400 items-center transition-all ease-out duration-300 hover:text-white text-center"
						>
							<AiOutlineDownload /> View Resume
						</a>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default About;
