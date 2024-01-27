import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(closeMenu());
	}, []);
	const [searchParam] = useSearchParams();
	// console.log(searchParam.get('v'));
	return (
		<div>
			<iframe
				width='1000'
				height='500'
				src={'https://www.youtube.com/embed/'+searchParam.get('v')+'?si=vUI-Syiq6LaDc22o'}
				title='YouTube video player'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowFullScreen></iframe>
		</div>
	);
};

export default WatchPage;