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
	const [queArray, setqueArray] = useState(quizQuestions.length);
	const [count, setCount] = useState({ currentQuesNum: 1, remainingQues: 0 });
	const [score, setScore] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [timeLeft, setTimeLeft] = useState(10); // Initialize with 60 seconds or desired time
	const [selectedOptions, setSelectedOptions] = useState(
		Array(quizQuestions.length).fill(null)
	);
	// console.log(queArray);
	// console.log(selectedOptions);
	// console.log(score);
console.log(count);
	// console.log(selectedOptions[currentQuestionIndex] !== true);
	// console.log(selectedOptions[currentQuestionIndex] === true);
	useEffect(() => {
		if (timeLeft === 0) {
			setShowResult(true);
			for (let i = 0; i < quizQuestions.length; i++) {
				if (selectedOptions[i] === quizQuestions[i].correctAnswer) {
					setScore(prevscore => prevscore + 1);
				}
			}
		}
	}, [timeLeft]);

	const handleAnswer = isCorrect => {
		console.log(selectedOptions);
		if (isCorrect && selectedOptions[currentQuestionIndex] !== true) {
			setScore(prevScore => prevScore + 1);
		} else if (!isCorrect && selectedOptions[currentQuestionIndex] === true) {
			setScore(prevScore => prevScore - 1);
		}
	};

	const goToNextQuestion = () => {
		const nextQuestionIndex = currentQuestionIndex + 1;
		setCount(prevCount => ({
			...prevCount,
			currentQuesNum: prevCount.currentQuesNum + 1,
			remainingQues: prevCount.remainingQues,
		}));
		if (nextQuestionIndex < quizQuestions.length) {
			setCurrentQuestionIndex(nextQuestionIndex);
		} else {
			setShowResult(true);
		}
	};

	const submitQuiz = () => {
		const val = selectedOptions.filter(selopt => selopt === null);
		let rval = val.length;
	setCount(prevcount => ({
		...prevcount,
		remainingQues: rval,
	}));
	};
	const goToPreviousQuestion = () => {
		if (count.currentQuesNum !== 1) {
			setCount(prevCount => ({
				...prevCount,
				currentQuesNum: prevCount.currentQuesNum - 1,
				remainingQues: prevCount.remainingQues,
			}));
		}
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
							count={count}
							totalquestion={queArray}
							question={quizQuestions[currentQuestionIndex]}
							handleAnswer={handleAnswer}
							submitQuiz={submitQuiz}
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
