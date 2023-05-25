import React, { useEffect } from "react";
import Logoimage from "../assets/WhatsApp Image 2022-04-15 at 2.47.37 PM.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
function About() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div
			className=" h-auto md:h-screen bg-slate-300 flex flex-col items-center justify-center "
			data-aos="fade-right"
			id="about"
		>
			<h2 className="underline text-[72px] mt-10">Who Am I??</h2>
			<div className="flex flex-col md:flex-row items-center justify-center mb-10">
				<div className="">
					<img
						className="w-[20rem]  rounded-lg  h-auto  md: mt-[5rem]"
						src={Logoimage}
						alt="asdsd"
					/>
				</div>
				<div className="pt-5 w-[50vh] md:w-[50%] md:ml-5 pl-5">
					I am Rohit Kumar Chaurasia a prefinal year student at RVS College of
					Engineering and Technology, Jamshedpur, majoring in Bachelors in
					Computer Science and Technology. I am a Full stack Developer and
					coding enthusiast with knowledge of C++, Javascript, NodeJs, ReactJs
					and ExpressJs. I have created several projects which are their in the
					project section. I am keen to learning new skills and technologies to
					improve my Web Development and problem solving abilities.You can reach
					me at rohit.2001.chaurasia@gmail.com.
				</div>
				<a href="www.google.com" className=" absoluteborder border-black">
					ssdsdasd
				</a>
			</div>
		</div>
	);
}

export default About;
