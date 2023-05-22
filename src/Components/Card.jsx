import React from "react";

function Card(props) {
	return (
		<div className="p-5">
			<div className="border flex justify-between items-center flex-col p-5 w-[200px] h-[200px] rounded-lg">
				<div className="h-[75%]">
					<img src={props.img} className=" h-[100px] w-auto " alt="" />
				</div>
				<div className="p-5 "> {props.skill}</div>
			</div>
		</div>
	);
}

export default Card;
