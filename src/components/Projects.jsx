import { useState } from "react"

export default function Project({ name, status, data, linkToParfolio, linkToFull}) {
	const [isOpen, setIsOpen] = useState(false);
	const [isPartfolioCopy, setIsPartfolioCopy] = useState(false);
	const [isFullCopy, setIsFullCopy] = useState(false);

	function copyParfolioLink() {
		navigator.clipboard.writeText(linkToParfolio);
		setIsPartfolioCopy(true);
	}
	
	function copyFullLink() {
		navigator.clipboard.writeText(linkToFull);
		setIsFullCopy(true);
	}

	let statusStyle = '';

	if (status === 'Complited') {
		statusStyle = 'text-[10px] italic font-bold text-white bg-green-600 rounded-xl p-1 px-2'
	} else if (status === 'In Progress') {
		statusStyle = 'text-[10px] italic font-bold text-white bg-blue-600 rounded-xl p-1 px-2'
	} else if (status === 'Draft') {
		statusStyle = 'text-[10px] italic font-bold text-white bg-gray-600 rounded-xl p-1 px-2'
	}

	return (
		<section className="bg-gray-400/50 m-3 rounded-xl">
			<div onClick={() => setIsOpen(true)} className="flex justify-between p-3">
				<h2 className="font-medium">{name}</h2>
				<p className={statusStyle}>{status}</p>
			</div>
			{isOpen && 
			<div className="py-2 p-3">
				<p className={isPartfolioCopy ? "text-[14px] my-1 text-gray-600 italic" : "text-[14px] my-1 w-full"} onClick={copyParfolioLink}>Link to partfolio: {linkToParfolio.slice(0, 30)}</p>
				{isPartfolioCopy && <p className="text-center bg-green-500/40 text-white rounded-2xl text-[11px]">Copied!</p>}
				<p className={isFullCopy ? "text-[14px] my-1 text-gray-500 italic" : "text-[14px] my-1"} onClick={copyFullLink}>Link to Full: {linkToFull.slice(0, 30)}</p>
				{isFullCopy && <p className="text-center bg-green-500/40 text-white rounded-2xl text-[11px]">Copied!</p>}
				<p className="text-end text-black/60 text-[12px] py-3">{data}</p>
				<button onClick={() => {
					setIsOpen(false)
					setIsPartfolioCopy(false)
					setIsFullCopy(false)
					}} className="text-center w-full bg-red-600/40 p-2 rounded-xl text-white">Close</button>
			</div>}
		</section>
	)
} 