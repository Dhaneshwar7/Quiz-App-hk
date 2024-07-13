import React, { useState, useEffect } from 'react';

const Question = ({
	question,
	count,
	totalquestion,
	submitQuiz,
	selectedOption,
	setSelectedOption,
	goToNextQuestion,
	goToPreviousQuestion,
}) => {
	const handleOptionClick = option => {
		setSelectedOption(option);
	};
	console.log(` ya i ${count.currentQuesNum}`);

	return (
		<div className="question">
			<h2>{question.question}</h2>
			<ul>
				{question.options.map((option, index) => (
					<li key={index}>
						<button
							className={`option ${selectedOption === option ? 'correct' : ''}`}
							onClick={() => handleOptionClick(option)}
						>
							{option}
						</button>
					</li>
				))}
			</ul>
			<p>
				{count.currentQuesNum} out of {totalquestion}
			</p>

			<div className="navigation-buttons">
				<button onClick={goToPreviousQuestion}>Previous Question</button>
				{count.currentQuesNum === totalquestion ? (
					<button onClick={submitQuiz}>Submit the Quiz</button>
				) : (
					<button onClick={goToNextQuestion}>Next Question</button>
				)}
			</div>
			<p>YOUr REmaining question : {count.remainingQues}</p>
		</div>
	);
};

export default Question;
