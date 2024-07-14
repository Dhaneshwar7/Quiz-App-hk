import React from 'react';
import { useQuiz } from '@/utils/QuizAppContext';

const Question = () => {
	const { state, dispatch } = useQuiz();
	const {
		quizQuestions,
		currentQuestionIndex,
		count,
		showResult,
		selectedOptions,
		reviewTestFeedback,
	} = state;

	const question = quizQuestions[currentQuestionIndex];
	const selectedOption = selectedOptions[currentQuestionIndex];

	const handleOptionClick = option => {
		dispatch({ type: 'SET_SELECTED_OPTION', payload: option });
	};

	return (
		<div className="Question py-7">
			<h2 className="text-xl py-1 mb-2 font-medium">
				{currentQuestionIndex + 1} : {question.question}
			</h2>
			<ul className="mb-8">
				{question.options.map((option, index) => (
					<li className="mb-1" key={index}>
						<button
							className={`block w-full p-3 bg-blue-100 border text-black hover:bg-green-100 border-blue-800/40 rounded-md ${
								selectedOption === option ? 'correct' : ''
							} ${
								reviewTestFeedback
									? option === question.correctAnswer
										? ' option correct'
										: selectedOption === option
										? 'option incorrect'
										: ''
									: ''
							}`}
							onClick={() => handleOptionClick(option)}
							disabled={reviewTestFeedback}
						>
							{option}
						</button>
					</li>
				))}
			</ul>
			<hr className="border-stone-950/40 border" />
			<p className="text-xl m-2 ">
				{count.currentQuesNum} of {quizQuestions.length} Questions
			</p>
			<div className="Navigation-buttons flex items-center justify-between">
				{reviewTestFeedback ? (
					<div>
						<button
							className="bg-red-500/85 max-sm:hidden drop-shadow-dark text-zinc-800 font-semibold  border  rounded-md py-3 px-4"
							onClick={() => window.location.reload()}
						>
							🔁 Restart Quiz
						</button>{' '}
					</div>
				) : (
					<div></div>
				)}

				<div className="gap-8 flex">
					<button
						className="bg-sky-700 text-white font-semibold  border  rounded-md py-3 px-4"
						onClick={() => dispatch({ type: 'GO_TO_PREVIOUS_QUESTION' })}
					>
						Previous Ques
					</button>
					{count.currentQuesNum === quizQuestions.length ? (
						reviewTestFeedback ? (
							''
						) : (
							<button
								className="bg-sky-700 text-white font-semibold  border  rounded-md py-3 px-4"
								onClick={() => dispatch({ type: 'SUBMIT_QUIZ' })}
							>
								Submit Quiz
							</button>
						)
					) : (
						<button
							className="bg-sky-700 text-white font-semibold  border  rounded-md py-3 px-4"
							onClick={() => dispatch({ type: 'GO_TO_NEXT_QUESTION' })}
						>
							Next Ques
						</button>
					)}
				</div>
			</div>
			{reviewTestFeedback && (
				<div className="flex justify-center mt-3">
					<button
						className="bg-red-500/85 hidden max-sm:block drop-shadow-dark text-zinc-800 font-semibold  border  rounded-md py-3 px-4"
						onClick={() => window.location.reload()}
					>
						🔁 Restart Quiz
					</button>{' '}
				</div>
			)}

			{count.remainingQues === 0 ? (
				''
			) : (
				<div
					class="flex items-center w-fit  p-4 m-auto mt-4 text-sm text-red-800 border border-red-300 rounded-lg bg-gray-400 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
					role="alert"
				>
					<svg
						class="flex-shrink-0 inline w-4 h-4 me-3"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
					</svg>
					<span class="sr-only">Info</span>
					<div>
						<span class="font-medium">
							Your Remaining Question ``{count.remainingQues}`` | Attemp All &
							Then Submit.
						</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Question;
