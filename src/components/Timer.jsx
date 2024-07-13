import React, { useEffect } from 'react';

const Timer = ({ timeLeft, setTimeLeft }) => {
	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
		}, 1000);

		return () => clearInterval(timer);
	}, [setTimeLeft]);

	return (
		<div className="timer">
			<p>Time Left: {timeLeft < 10 ? `0${timeLeft}` : timeLeft} seconds</p>
		</div>
	);
};

export default Timer;
