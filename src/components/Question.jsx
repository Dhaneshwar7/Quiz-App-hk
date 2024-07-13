import React, { useState, useEffect } from 'react';

const Question = ({
	question,
	handleAnswer,
	selectedOption,
	setSelectedOption,
	goToNextQuestion,
	goToPreviousQuestion,
}) => {
	const handleOptionClick = option => {
		setSelectedOption(option);
		handleAnswer(option === question.correctAnswer);
	};

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
			<div className="navigation-buttons">
				<button onClick={goToPreviousQuestion}>Previous Question</button>
				<button onClick={goToNextQuestion}>Next Question</button>
			</div>
		</div>
	);
};

export default Question;
