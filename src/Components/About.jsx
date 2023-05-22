import React from "react";
import Logoimage from "../assets/WhatsApp Image 2022-04-15 at 2.47.37 PM.jpeg";
function About() {
	return (
		<div className="h-auto bg-slate-300 flex flex-col items-center" id="about">
			<h2 className="underline text-[72px] mt-10">Who Am I??</h2>
			<div className="flex flex-col md:flex-row items-center justify-center mb-10">
				<div className="">
					<img
						className="w-auto h-[25rem] md:w-auto md: mt-[5rem]"
						src={Logoimage}
						alt="asdsd"
					/>
				</div>
				<div className="pt-[10%] w-[50vh] md:w-[50%] pl-5">
					I am Rohit Kumar Chaurasia a prefinal year student at RVS College of
					Engineering and Technology, Jamshedpur, majoring in Bachelors in
					Computer Science and Technology. I am a Full stack Developer and
					coding enthusiast with knowledge of C++, Javascript, NodeJs, ReactJs
					and ExpressJs. I have created several projects which are their in the
					project section. I am keen to learning new skills and technologies to
					improve my Web Development and problem solving abilities.You can reach
					me at rohit.2001.chaurasia@gmail.com.
				</div>
			</div>
		</div>
	);
}

export default About;
