import { Inter } from 'next/font/google';
import './globals.css';
import { QuizProvider } from '@/utils/QuizAppContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Quiz App',
	description: 'Quiz App',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<QuizProvider>{children}</QuizProvider>
			</body>
		</html>
	);
}
