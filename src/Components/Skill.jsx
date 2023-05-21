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
				<div className="flex flex-row flex-wrap items-center justify-center">
					<Card
						skill="C++"
						img="https://cms.replit.com/assets/about/connerow.jpeg"
					/>
					<Card
						skill="Python"
						img="https://cms.replit.com/assets/about/connerow.jpeg"
					/>
					<Card
						skill="JavaScript"
						img="https://cms.replit.com/assets/about/connerow.jpeg"
					/>
					<Card
						skill="ReactJS"
						img="https://cms.replit.com/assets/about/connerow.jpeg"
					/>
					<Card
						skill="NodeJS"
						img="https://cms.replit.com/assets/about/connerow.jpeg"
					/>
					<Card
						skill="ExpressJs"
						img="https://cms.replit.com/assets/about/connerow.jpeg"
					/>
					<Card
						skill="MongoDB"
						img="https://cms.replit.com/assets/about/connerow.jpeg"
					/>
					<Card
						skill="SQL"
						img="https://cms.replit.com/assets/about/connerow.jpeg"
					/>
					<Card
						skill="HTML"
						img="https://cms.replit.com/assets/about/connerow.jpeg"
					/>
					<Card
						skill="CSS"
						img="https://cms.replit.com/assets/about/connerow.jpeg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Skill;
