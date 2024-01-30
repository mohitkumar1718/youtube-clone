import React, { useEffect, useRef, useState } from "react";
import { Chat } from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessege } from "../utils/chatSlice";
import { generateMessege, generateName } from "../utils/helper";

const LiveChat = () => {
	const chatMesseges = useSelector((store) => store.chat);
	const [showchat, setshowChat] = useState(true);

	const changeShowChat = () => {
		setshowChat(!showchat);
	};
	var chatYou = useRef(null);
	// console.log(chatMesseges);
	const dispatch = useDispatch();
	useEffect(() => {
		const i = setInterval(() => {
			dispatch(
				addChatMessege({
					name: generateName(),
					messege: generateMessege(7),
				}),
			);
		}, 2000);
		return () => clearInterval(i);
	}, []);

	const chatFunction = () => {
		// console.log(chatYou.current.value);
		dispatch(
			addChatMessege({
				name: "YOU",
				messege: chatYou.current.value,
			}),
		);
		chatYou.current.value = "";
	};

	return (
		<div className='mt-10 sm:mt-0 w-full lg:min-w-[250px] lg:max-w-[400px]  border border-black p-3 mx-2 bg-slate-100 rounded-lg mx-auto '>
			{/* <Chat name="Mohit" messege="this is live chat"/> */}
			<div onClick={changeShowChat}>
				<span className='text-xl font-bold'>Live Chat</span>
				<span className='ml-5'>⬇️</span>
			</div>
			{showchat && <div>
				<div className='flex flex-col flex-col-reverse overflow-y-scroll h-[450px]'>
					{chatMesseges?.map((c, index) => (
						<Chat key={index} name={c.name} messege={c.messege} />
					))}
				</div>
				<div className='flex '>
					<input
						ref={chatYou}
						className='w-3/4 mx-1 rounded-lg bg-slate-200 border border-black px-2'
						type='text'
					/>
					<button
						onClick={chatFunction}
						className='bg-black text-white px-2 rounded-lg'>
						Chat
					</button>
				</div>
			</div>}
		</div>
	);
};

export default LiveChat;
