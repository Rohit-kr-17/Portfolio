import React, { useEffect, useState } from "react";
import logo from "../assets/Logo-white.png";
const PreLoader = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [opacity, setOpacity] = useState(1);
	const [height, setHeight] = useState("100vh");
	useEffect(() => {
		const interval = setInterval(() => {
			setHeight(0);
		}, 1000);
		const loadingFalse = setInterval(() => {
			setIsLoading(false);
		}, 1500);
		return () => {
			clearInterval(interval);
			clearInterval(loadingFalse);
		};
	}, []);
	if (isLoading) {
		return (
			<div
				style={{ height }}
				className="bg-black h-screen w-screen top-0 fixed transition-all ease-in-out duration-500 z-[55]"
			>
				<div className=" flex fixed first-line justify-center h-screen w-screen items-center ">
					<img
						src={logo}
						className=" h-[30%] relative  transition-all duration-500 w-auto"
						alt=""
					/>
				</div>
			</div>
		);
	}
	return <></>;
};

export default PreLoader;
