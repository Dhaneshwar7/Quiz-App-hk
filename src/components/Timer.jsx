import { useQuiz } from '@/utils/QuizAppContext';
import React, { useEffect } from 'react';

const Timer = () => {
	const { state } = useQuiz();
	const { timeLeft } = state;
	return (
		<div className="Timer">
			<div className="bg-blue-300 py-3 px-4 rounded-md">
				<span className="text-blue-900 mr-2">Time Left</span>
				<span className="bg-gray-700 py-1 px-3 text-white rounded-sm">
					{timeLeft}
				</span>
			</div>
		</div>
	);
};

export default Timer;
