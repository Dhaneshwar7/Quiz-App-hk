'use client';
import Navbar from '@/components/Navbar';
import Timer from '@/components/Timer';
import Result from '@/components/Result';
import Question from '@/components/Question';
import { useState, useEffect } from 'react';

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
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [timeLeft, setTimeLeft] = useState(120); // Initialize with 60 seconds or desired time
	const [selectedOptions, setSelectedOptions] = useState(
		Array(quizQuestions.length).fill(null)
	);

	console.log(selectedOptions);
	console.log(score);
	useEffect(() => {
		if (timeLeft === 0) {
			setShowResult(true);
		}
	}, [timeLeft]);

	const handleAnswer = isCorrect => {
		if (isCorrect && selectedOptions[currentQuestionIndex] !== true) {
			setScore(prevScore => prevScore + 1);
		} else if (!isCorrect && selectedOptions[currentQuestionIndex] === true) {
			setScore(prevScore => prevScore - 1);
		}
	};

	const goToNextQuestion = () => {
		const nextQuestionIndex = currentQuestionIndex + 1;
		if (nextQuestionIndex < quizQuestions.length) {
			setCurrentQuestionIndex(nextQuestionIndex);
		} else {
			setShowResult(true);
		}
	};

	const goToPreviousQuestion = () => {
		const previousQuestionIndex = currentQuestionIndex - 1;
		if (previousQuestionIndex >= 0) {
			setCurrentQuestionIndex(previousQuestionIndex);
		}
	};

	const setSelectedOption = option => {
		const updatedSelectedOptions = [...selectedOptions];
		updatedSelectedOptions[currentQuestionIndex] = option;
		setSelectedOptions(updatedSelectedOptions);
	};

	return (
		<>
			<div style={{ backgroundColor: '#F6F7F8', height: '100vh' }}>
				<Navbar />
				<div className="quiz-app">
					<h1>Awesome Quiz Application</h1>
					<Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
					{showResult ? (
						<Result
							score={score}
							totalQuestions={quizQuestions.length}
							message={timeLeft === 0 ? "Time's Up!" : null}
						/>
					) : (
						<Question
							question={quizQuestions[currentQuestionIndex]}
							handleAnswer={handleAnswer}
							selectedOption={selectedOptions[currentQuestionIndex]}
							setSelectedOption={setSelectedOption}
							goToNextQuestion={goToNextQuestion}
							goToPreviousQuestion={goToPreviousQuestion}
						/>
					)}
				</div>
			</div>
		</>
	);
}
