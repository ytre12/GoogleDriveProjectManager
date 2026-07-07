import { useState } from "react"

export default function Header({ name }) {
	const [progressCur, setprogressCur] = useState(0);
	const [showProgress, setShowProgress] = useState(false);

	function handleChange() {
		setprogressCur(progressCur + 50);
		setShowProgress(true);
	}

	if (progressCur >= 1000) {
		setprogressCur(0);
		setShowProgress(false);
	}
	
	return (
		<>
			<header className="flex justify-between items-center bg-gray-200 px-3">
				<h2 className="font-bold w-35 text-gray-800">{ name }</h2>
				<button onClick={handleChange} className="text-yellow-500 rounded-xl border-[1px] p-1 text-[12px] active:text-yellow-600 active:bg-amber-200/5">Update</button>
			</header>
			{showProgress && <progress max={1000} value={progressCur} className="w-full p-1 rounded-full [&::-webkit-progress-value]:bg-amber-500 [&::-webkit-progress-bar]:bg-gray-200"/>}
		</>
	)
}