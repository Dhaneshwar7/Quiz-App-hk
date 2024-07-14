'use client';
import Navbar from '@/components/Navbar';
import Timer from '@/components/Timer';
import Result from '@/components/Result';
import Question from '@/components/Question';
import { useQuiz } from '@/utils/QuizAppContext';
import { useEffect, useState } from 'react';

export default function Home() {
	const [mount, setMount] = useState(false);

	const { state } = useQuiz();
	const { quizQuestions, score, showResult, timeLeft, reviewTestFeedback } =
		state;
	// console.log(score);
	const [startQuiz, setStartQuiz] = useState(false);

	useEffect(() => {
		setMount(true);
	}, []);

	if (!mount) return null;
	return (
		<>
			<div className="min-h-screen">
				<Navbar />
				<div className="max-w-3xl my-3 mx-auto p-7 rounded-lg bg-slate-100 border border-[#ddddddd] drop-shadow-box">
					<div className="Full Quiz Application">
						<div className="Heading">
							<h1 className="text-3xl py-2 font-semibold">
								Quiz Web Application
							</h1>
						</div>
						<div className="Score Timer flex items-center justify-between">
							<div>
								{reviewTestFeedback ? (
									<p className="font-medium">Your Result Score: {score}</p>
								) : (
									<p></p>
								)}
							</div>
							<Timer />
						</div>
						<div>
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
				</div>
			</div>
		</>
	);
}
