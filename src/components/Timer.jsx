import { useQuiz } from '@/utils/QuizAppContext';
import React, { useEffect } from 'react';

const Timer = () => {
	const { state } = useQuiz();
	const { timeLeft } = state;
	return (
		<div className="timer">
			<p>Time Left:{timeLeft} seconds</p>
		</div>
	);
};

export default Timer;
