import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/Logo-01.ico";

export default function Header() {
	const [showLinks, setShowLinks] = useState(false);

	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};

	return (
		<div className="top-0 fixed flex flex-row justify-between items-center w-full bg-gray-300 py-[10px] text-black shadow-md shadow-gray-500 z-[10]">
			<div className="hidden md:inline ml-8">
				<Link
					activeClass="active"
					to="home"
					spy={true}
					smooth={true}
					duration={500}
					style={{ fontFamily: "kaushan script" }}
					className="text-lg cursor-pointer"
				>
					<img src={Logo} className="h-10 w-auto" alt="" />
				</Link>
			</div>
			<div className="hidden md:flex md:mr-[40%]">
				{/* Links for larger screens */}
				<Link
					activeClass="active"
					to="about"
					spy={true}
					smooth={true}
					duration={500}
				>
					<div className="py-1 px-3 hover:bg-slate-400 hover:rounded-full cursor-pointer">
						About
					</div>
				</Link>

				<Link
					activeClass="active"
					to="skill"
					spy={true}
					smooth={true}
					duration={500}
				>
					<div className="py-1 px-3 hover:bg-slate-400 hover:rounded-full cursor-pointer ">
						Skills
					</div>
				</Link>

				<Link
					activeClass="active"
					to="projects"
					spy={true}
					smooth={true}
					duration={500}
				>
					<div className="py-1 px-3 hover:bg-slate-400 hover:rounded-full cursor-pointer">
						Projects
					</div>
				</Link>

				<Link
					activeClass="active"
					to="contacts"
					spy={true}
					smooth={true}
					duration={500}
				>
					<div className="py-1 px-3 hover:bg-slate-400 hover:rounded-full cursor-pointer ">
						Links
					</div>
				</Link>
			</div>
			<div className="md:hidden w-screen flex items-center justify-center ">
				{/* Button to toggle links for smaller screens */}
				<button
					onClick={toggleLinks}
					className=" flex  items-center justify-center text-lg cursor-pointer"
				>
					<img
						className="flex  items-center justify-center h-10 w-auto"
						src={Logo}
					></img>
				</button>
			</div>
			{showLinks && (
				<div className="md:hidden flex flex-col items-end w-full bg-gray-300 py-[10px] text-black">
					{/* Links for smaller screens */}
					<Link
						activeClass="active"
						onClick={toggleLinks}
						to="about"
						spy={true}
						smooth={true}
						duration={500}
					>
						<div className="py-1 px-3 hover:bg-slate-400 hover:rounded-full cursor-pointer">
							About
						</div>
					</Link>

					<Link
						activeClass="active"
						onClick={toggleLinks}
						to="skill"
						spy={true}
						smooth={true}
						duration={500}
					>
						<div className="py-1 px-3 hover:bg-slate-400 hover:rounded-full cursor-pointer ">
							Skills
						</div>
					</Link>

					<Link
						activeClass="active"
						onClick={toggleLinks}
						to="projects"
						spy={true}
						smooth={true}
						duration={500}
					>
						<div className="py-1 px-3 hover:bg-slate-400 hover:rounded-full cursor-pointer">
							Projects
						</div>
					</Link>

					<Link
						activeClass="active"
						onClick={toggleLinks}
						to="contacts"
						spy={true}
						smooth={true}
						duration={500}
					>
						<div className="py-1 px-3 hover:bg-slate-400 hover:rounded-full cursor-pointer ">
							Links
						</div>
					</Link>
				</div>
			)}
		</div>
	);
}
