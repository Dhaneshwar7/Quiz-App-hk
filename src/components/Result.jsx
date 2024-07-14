import { useQuiz } from '@/utils/QuizAppContext';
import React from 'react';
import Timer from './Timer';

const Result = ({ score, totalQuestions, message }) => {
	const { state, dispatch } = useQuiz();
	const { showResult, timeLeft, reviewTestFeedback } = state;

	return (
		<div className="Result">
			<div className="max-w-3xl my-3 mx-auto p-7 rounded-lg bg-slate-100 border border-[#ddddddd] drop-shadow-box">
				<div className="p-3  w-full">
					<h2 className="m-auto text-center text-3xl max-sm:text-xl font-bold bg-red-300/60 w-fit px-4 pt-3 mb-3 rounded-md">
						🏁 Quiz Finished!
						{message && (
							<p className="m-auto text-center text-xl font-bold w-fit px-4 py-3">
								{message}⌛️
							</p>
						)}
					</h2>

					<p className="m-auto text-center text-3xl max-sm:text-lg font-bold py-2 bg-yellow-200/25">
						Your score is {score} out of {totalQuestions}
					</p>
				</div>
				<div className="flex items-center justify-between mt-4">
					<button
						className="bg-red-500/85 max-sm:text-xs drop-shadow-dark text-zinc-800 font-semibold  border  rounded-md py-3 px-4"
						onClick={() => window.location.reload()}
					>
						🔁 Restart Quiz
					</button>{' '}
					<button
						className="bg-sky-700 text-white max-sm:text-xs font-semibold  border  rounded-md py-3 px-4"
						onClick={() => dispatch({ type: 'SET_REVIEW_TEST_FEEDBACK' })}
					>
						Review Test
					</button>
				</div>
			</div>
		</div>
	);
};

export default Result;
