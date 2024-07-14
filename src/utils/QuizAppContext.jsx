'use client';
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const QuizContext = createContext();

export const useQuiz = () => useContext(QuizContext);

const initialState = {
	quizQuestions: [
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
	],
	currentQuestionIndex: 0,
	count: { currentQuesNum: 1, remainingQues: 0 },
	score: 0,
	showResult: false,
	timeLeft: 20,
	selectedOptions: Array(3).fill(null),
	reviewTestFeedback: false,
};

const quizReducer = (state, action) => {
	switch (action.type) {
		case 'SET_SELECTED_OPTION':
			const updatedSelectedOptions = [...state.selectedOptions];
			updatedSelectedOptions[state.currentQuestionIndex] = action.payload;
			return { ...state, selectedOptions: updatedSelectedOptions };
		case 'GO_TO_NEXT_QUESTION':
			const nextIndex = state.currentQuestionIndex + 1;
			return {
				...state,
				currentQuestionIndex:
					nextIndex < state.quizQuestions.length
						? nextIndex
						: state.currentQuestionIndex,
				count: {
					...state.count,
					currentQuesNum:
						nextIndex < state.quizQuestions.length
							? state.count.currentQuesNum + 1
							: state.count.currentQuesNum,
				},
				showResult: nextIndex >= state.quizQuestions.length,
			};
		case 'GO_TO_PREVIOUS_QUESTION':
			const prevIndex = state.currentQuestionIndex - 1;
			return {
				...state,
				currentQuestionIndex:
					prevIndex >= 0 ? prevIndex : state.currentQuestionIndex,
				count: {
					...state.count,
					currentQuesNum:
						prevIndex >= 0
							? state.count.currentQuesNum - 1
							: state.count.currentQuesNum,
				},
			};
		case 'SUBMIT_QUIZ':
			const valueNulls = state.selectedOptions.filter(
				selopt => selopt === null
			);
			let selectOptLength = valueNulls.length;
			let newScore = state.score;
			if (selectOptLength === 0) {
				for (let i = 0; i < state.quizQuestions.length; i++) {
					if (
						state.selectedOptions[i] === state.quizQuestions[i].correctAnswer
					) {
						newScore += 1;
					}
				}
			}
			return {
				...state,
				score: newScore,
				showResult: selectOptLength === 0 ? true : false,
				count: {
					...state.count,
					remainingQues: selectOptLength,
				},
			};
		case 'UPDATE_TIME_LEFT':
			return { ...state, timeLeft: action.payload };
		case 'SET_REVIEW_TEST_FEEDBACK':
			return { ...state, reviewTestFeedback: true, showResult: false };
		default:
			return state;
	}
};

export const QuizProvider = ({ children }) => {
	const [state, dispatch] = useReducer(quizReducer, initialState);

	useEffect(() => {
		if (state.timeLeft === 0) {
			dispatch({ type: 'SUBMIT_QUIZ' });
		}
	}, [state.timeLeft]);

	useEffect(() => {
		const timer = setInterval(() => {
			dispatch({
				type: 'UPDATE_TIME_LEFT',
				payload: state.timeLeft > 0 ? state.timeLeft - 1 : 0,
			});
		}, 1000);
		if (state.showResult) {
			// dispatch({type:'SET_TIMER_ID', timer})
			clearInterval(timer);
		}

		return () => clearInterval(timer);
	}, [state.timeLeft]);

	return (
		<QuizContext.Provider value={{ state, dispatch }}>
			{children}
		</QuizContext.Provider>
	);
};
