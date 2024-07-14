import React from 'react';
import { useQuiz } from '@/utils/QuizAppContext';


const Question = () => {
	const { state, dispatch } = useQuiz();
	const { quizQuestions, currentQuestionIndex, count, selectedOptions,reviewTestFeedback } = state;

	const question = quizQuestions[currentQuestionIndex];
	const selectedOption = selectedOptions[currentQuestionIndex];

	const handleOptionClick = option => {
		dispatch({ type: 'SET_SELECTED_OPTION', payload: option });
	};

	return (
		<div className="question">
			<h2>{question.question}</h2>
			<ul>
				{question.options.map((option, index) => (
					<li key={index}>
						<button
							className={`option ${
								selectedOption === option ? 'correct' : ''
							} ${
								reviewTestFeedback
									? option === question.correctAnswer
										? 'correct'
										: selectedOption === option
										? 'incorrect'
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
			<p>
				{count.currentQuesNum} out of {quizQuestions.length}
			</p>
			<div className="navigation-buttons">
				<button onClick={() => dispatch({ type: 'GO_TO_PREVIOUS_QUESTION' })}>
					Previous Question
				</button>
				{count.currentQuesNum === quizQuestions.length ? (
					reviewTestFeedback ? (
						<button onClick={() => window.location.reload()}>
							Restart Quiz
						</button>
					) : (
						<button onClick={()=>dispatch({type:'SUBMIT_QUIZ'})}>Submit the Quiz</button>
					)
				) : (
					<button onClick={() => dispatch({ type: 'GO_TO_NEXT_QUESTION' })}>
						Next Question
					</button>
				)}
			</div>
			<p>YOUR Remaining question: {count.remainingQues}</p>
		</div>
	);
};

export default Question;
