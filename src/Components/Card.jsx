import React from "react";

function Card(props) {
	return (
		<div>
			<div className="border w-[200px] h-[200px] rounded-lg">
				<img src={props.img} className="h-[75%] w-full rounded-t-lg" alt="" />
				<div>{props.skill}</div>
			</div>
		</div>
	);
}

export default Card;
