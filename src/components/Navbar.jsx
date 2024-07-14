import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Chip } from '@mui/material';
import { useQuiz } from '@/utils/QuizAppContext';

export default function Navbar() {
	const { state } = useQuiz();
	const { timeLeft } = state;

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Quiz App
					</Typography>
					<Chip
						label={`Time left || ${timeLeft}`}
						sx={{ color: '#fff', bgcolor: 'black' }}
					/>
					{/* <Button color="inherit">Login</Button> */}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
