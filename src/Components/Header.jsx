//import { HashLink as Link } from "react-router-hash-link";
import { Link } from "react-scroll";
import Logo from "../assets/Logo-01.ico";
export default function Header() {
	return (
		<div className=" top-0 fixed flex flex-row justify-between items-center w-full  bg-gray-300  py-[10px] text-black shadow-md shadow-gray-500 z-10">
			<div class="ml-8">
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
			<div className="flex  md:mr-[40%]">
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
		</div>
	);
}
