'use client';
import Navbar from '@/components/Navbar';
import Timer from '@/components/Timer';
import Result from '@/components/Result';
import Question from '@/components/Question';
import { useState, useEffect } from 'react';
import { useQuiz } from '@/utils/QuizAppContext';

const quizQuestions = [
	{
		question: 'What is the capital of France?',
		options: ['London', 'Berlin', 'Paris', 'Madrid'],
		correctAnswer: 'Paris',
	},
	{
		question: 'What is the largest planet in our solar system?',
		options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
		correctAnswer: 'Jupiter',
	},
	{
		question:
			'Which programming language is commonly used for web development?',
		options: ['Python', 'Java', 'JavaScript', 'C++'],
		correctAnswer: 'JavaScript',
	},
];

export default function Home() {
	const { state } = useQuiz();
	const { quizQuestions, score, showResult, timeLeft, reviewTestFeedback } =
		state;
	// console.log(score);

	return (
		<>
			<div style={{ backgroundColor: '#F6F7F8', height: '100vh' }}>
				<Navbar />
				<div className="quiz-app">
					<h1>Awesome Quiz Application</h1>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						{reviewTestFeedback ? <p> Your Result Score: {score}</p> : <p></p>}

						<Timer />
					</div>
					{showResult ? (
						<Result
							score={score}
							totalQuestions={quizQuestions.length}
							message={timeLeft === 0 ? "Time's Up!" : null}
						/>
					) : (
						<Question />
					)}
				</div>
			</div>
		</>
	);
}
