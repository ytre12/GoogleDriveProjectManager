import { useState } from "react";

export default function Card({ userName, cardGmail, typeOfMany, icon}) {

	const [textCopied, setTextCopied] = useState(false);

	function hendelCopy() {
		navigator.clipboard.writeText(cardGmail);
		setTextCopied(true);
	}

	return (
		<>
			<nav className="bg-blue-300 border-blue-900 border-[1px] p-2 py-3 m-2 mt-5 rounded-xl" onClick={hendelCopy}>
				<div className="flex justify-between">
					<h1 className="font-bold italic">PayPall</h1>
					<img className="w-7" src={icon} alt="PayPall"/>
				</div>
				<h2>{userName}</h2>
				<div className="flex justify-center">
					<h1 className="text-bold text-xl p-3">{cardGmail}</h1>
				</div>
				<p className="text-end text-black/40 font-bolds">{typeOfMany}</p>
			</nav>
			{textCopied && <div className="text-center bg-green-400/50 m-2 rounded-xl py-1 text-[13px] text-gray-700/80">
				Gmail was copied
			</div>}
		</>
	)
}
