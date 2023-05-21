import React from "react";

function About() {
	return (
		<div
			className="h-screen bg-slate-300 flex flex-col justify-center items-center"
			id="about"
		>
			<h2 className="underline text-lg">Who Am I??</h2>
			<div className="flex flex-row items-center justify-center">
				<div className="w-[45vh] mt-[5rem]">
					<img
						src="https://pbs.twimg.com/media/Fwp_EXYaEAMz0Rs?format=jpg&name=small"
						alt="asdsd"
					/>
				</div>
				<div className="pt-[10%] w-[50vh] pl-5">
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
