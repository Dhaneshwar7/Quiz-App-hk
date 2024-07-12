import Image from 'next/image';
import Navbar from '@/components/Navbar';
import QuizCard from '@/components/QuizCard';

export default function Home() {
	return (
		<>
			<div style={{ backgroundColor: '#F6F7F8', height: '100vh' }}>
				<Navbar />
				<QuizCard />
			</div>
		</>
	);
}
