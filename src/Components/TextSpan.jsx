import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
function TextSpan({ children }) {
	//console.log(props);
	const controls = useAnimationControls();
	const [isPlaying, setIsPlaying] = useState(false);
	const rubberBand = () => {
		controls.start({
			transform: [
				"scale3d(1,1,1)",
				"scale3d(1.4,.55,1)",
				"scale3d(.75,1.25,1)",
				"scale3d(1.25,.85,1)",
				"scale3d(.9,1.05,1)",
				"scale3d(1,1,1)",
			],
			transition: {
				times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
			},
		});
	};

	return (
		<motion.span
			className="hover:text-red-400 "
			//whileHover={{ scale: 2.1 }}
			animate={controls}
			onMouseOver={() => {
				console.log("yes");
				if (!isPlaying) rubberBand();
			}}
			onAnimationComplete={() => {
				setIsPlaying(false);
			}}
		>
			{children}
		</motion.span>
	);
}

export default TextSpan;
