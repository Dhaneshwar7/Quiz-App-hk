import React from 'react';

const Result = ({ score, totalQuestions, message }) => {
	return (
		<div className="result">
			<h2>Quiz Finished!</h2>
			{message && <p>{message}</p>}
			<p>
				Your score is {score} out of {totalQuestions}
			</p>
			<button onClick={() => window.location.reload()}>Restart Quiz</button>
		</div>
	);
};

export default Result;
