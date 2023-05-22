import React from "react";
import Card from "./Card";
function Skill() {
	return (
		<div
			className="h-auto pt-[10%] flex justify-center items-center"
			id="skill"
		>
			<div className="flex flex-col ">
				<h1 className="left-10">Technical Skills...</h1>
				<div className="flex flex-row flex-wrap items-center  justify-center">
					<Card skill="C++" img="https://i.ibb.co/7z8WH1h/c.png" />
					<Card skill="Python" img="https://i.ibb.co/CKdVV11/python.png" />
					<Card
						skill="JavaScript"
						img="https://i.ibb.co/5jfdYB5/java-script.png"
					/>
					<Card skill="ReactJS" img="https://i.ibb.co/g63J87S/physics.png" />
					<Card skill="NodeJS" img="https://i.ibb.co/MSnzwWp/nodejs.png" />
					<Card
						skill="Tailwind CSS"
						img="https://i.ibb.co/ggGWx99/tailwind-css-512x307.png"
					/>
					<Card
						skill="MongoDB"
						img="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem-640x400.jpg"
					/>
					<Card skill="SQL" img="https://i.ibb.co/DwY7L2Y/database.png" />
					<Card skill="HTML" img="https://i.ibb.co/3FmSpyC/html-5.png" />
					<Card skill="CSS" img="https://i.ibb.co/FqGWC9P/css-3.png" />
				</div>
			</div>
		</div>
	);
}

export default Skill;
