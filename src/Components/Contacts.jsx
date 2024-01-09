import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import { SiGmail } from "react-icons/si";
function Contacts() {
	return (
		<div
			className="h-auto p-10 bg-gray-400 flex flex-col items-center justify-center"
			id="contacts"
		>
			<div className="tet-[2rem]">
				<h2 className="text-[1.5rem]">Links</h2>
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
					className="border hover:animate-bounce mr-5 flex justify-center w-fit p-[5px]  rounded-full hover:bg-red-400  items-center transition-all ease-out duration-500 bg-white hover:text-white text-center"
				>
					<BsLinkedin className="text-[25px]" />
				</a>
				<a
					href="mailto:rohit.2001.chaurasia@gmail.com"
					target="_blank"
					className="border hover:animate-bounce flex justify-center w-fit p-[5px]  rounded-full hover:bg-red-400  items-center transition-all ease-out duration-500 bg-white hover:text-white text-center"
				>
					<SiGmail className="text-[25px]" />
				</a>
			</div>
			<div className="inline flex items-center justify-center">
				<BiCopyright className="mr-2 text-xl" />
				2023 Rohit Kumar Chaurasia All rights reserved
			</div>
		</div>
	);
}

export default Contacts;
