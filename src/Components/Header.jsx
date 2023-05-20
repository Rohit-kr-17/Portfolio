import { HashLink as Link } from "react-router-hash-link";
export default function Header() {
	return (
		<>
			<div className=" top-0 fixed  justify-center  w-full  bg-gray-600  py-[10px] text-white shadow-md shadow-gray-500">
				<span className="px-2 hover:text-red-700 transiton duration-150 ">
					<Link to="#home">Home</Link>
				</span>
				<span className="px-2 hover:text-red-700 transiton duration-150 ">
					<Link to="#about">About</Link>
				</span>
				<span className="px-2 hover:text-red-700 transiton duration-150 ">
					<Link to="#skill">Skills</Link>
				</span>
				<span className="px-2 hover:text-red-700 transiton duration-150 ">
					<Link to="#projects">Projects</Link>
				</span>
				<span className="px-2 hover:text-red-700 transiton duration-150 ">
					<Link to="#contacts">Contacts</Link>
				</span>
			</div>
		</>
	);
}
