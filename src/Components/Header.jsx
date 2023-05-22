//import { HashLink as Link } from "react-router-hash-link";
import { Link } from "react-scroll";
export default function Header() {
	return (
		<div className=" top-0 fixed flex flex-row justify-between items-center w-full  bg-gray-300  py-[10px] text-black shadow-md shadow-gray-500">
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
					Rohit
				</Link>
			</div>
			<div className="flex md:mr-[40%]">
				<div className="py-1 px-3 hover:bg-slate-400 hover:rounded-full cursor-pointer">
					<Link
						activeClass="active"
						to="about"
						spy={true}
						smooth={true}
						duration={500}
					>
						About
					</Link>
				</div>
				<div className="py-1 px-3 hover:bg-slate-400 hover:rounded-full cursor-pointer ">
					<Link
						activeClass="active"
						to="skill"
						spy={true}
						smooth={true}
						duration={500}
					>
						Skills
					</Link>
				</div>
				<div className="py-1 px-3 hover:bg-slate-400 hover:rounded-full cursor-pointer">
					<Link
						activeClass="active"
						to="projects"
						spy={true}
						smooth={true}
						duration={500}
					>
						Projects
					</Link>
				</div>
				<div className="py-1 px-3 hover:bg-slate-400 hover:rounded-full cursor-pointer ">
					<Link
						activeClass="active"
						to="contacts"
						spy={true}
						smooth={true}
						duration={500}
					>
						Contacts
					</Link>
				</div>
			</div>
		</div>
	);
}
