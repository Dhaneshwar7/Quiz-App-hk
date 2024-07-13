import React from 'react';

const Result = ({ score, totalQuestions, message, reviewTest }) => {
	return (
		<div className="result">
			<h2>Quiz Finished!</h2>
			{message && <p>{message}</p>}
			<p>
				Your score is {score} out of {totalQuestions}
			</p>
			<button onClick={() => window.location.reload()}>Restart Quiz</button>
			<button onClick={reviewTest}>Review Test</button>
		</div>
	);
};

export default Result;
