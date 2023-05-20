import { HashLink as Link } from "react-router-hash-link";
export default function Header() {
	return (
		<div className=" top-0 fixed flex flex-row justify-between items-center w-full  bg-gray-300  py-[10px] text-black shadow-md shadow-gray-500">
			<div class="ml-8">
				<Link
					style={{ fontFamily: "kaushan script" }}
					className="text-lg"
					to="#home"
				>
					Rohit
				</Link>
			</div>
			<div className="flex md:mr-[40%]">
				<div className="py-1 px-3 hover:bg-slate-400 hover:rounded-full cursor-pointer "></div>
				<div className="py-1 px-3 hover:bg-slate-400 hover:rounded-full cursor-pointer">
					<Link to="#about">About</Link>
				</div>
				<div className="py-1 px-3 hover:bg-slate-400 hover:rounded-full cursor-pointer ">
					<Link to="#skill">Skills</Link>
				</div>
				<div className="py-1 px-3 hover:bg-slate-400 hover:rounded-full cursor-pointer">
					<Link to="#projects">Projects</Link>
				</div>
				<div className="py-1 px-3 hover:bg-slate-400 hover:rounded-full cursor-pointer ">
					<Link to="#contacts">Contacts</Link>
				</div>
			</div>
		</div>
	);
}
