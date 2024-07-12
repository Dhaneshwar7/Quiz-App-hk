import React from 'react';
import {
	Card,
	CardContent,
	Container,
	Typography,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel,
	Button,
	Box,
} from '@mui/material';

const QuizCard = () => {
	return (
		<Container maxWidth="xl">
			<Card sx={{ padding: 2 }}>
				<CardContent>
					<Typography variant="h6" color="initial">
						Q.1 What is the capital of France?
					</Typography>
					<FormControl component="fieldset">
						<RadioGroup
							aria-label="quiz"
							defaultValue=""
							name="quiz-radio-buttons-group"
						>
							<FormControlLabel
								value="paris"
								control={<Radio />}
								label="Paris"
							/>
							<FormControlLabel
								value="london"
								control={<Radio />}
								label="London"
							/>
							<FormControlLabel
								value="berlin"
								control={<Radio />}
								label="Berlin"
							/>
							<FormControlLabel
								value="madrid"
								control={<Radio />}
								label="Madrid"
							/>
						</RadioGroup>
					</FormControl>
				</CardContent>
				<Box
					display="flex"
					justifyContent="space-between"
					sx={{ marginTop: 2 }}
				>
					<Button variant="contained" color="primary">
						Previous
					</Button>
					<Button variant="contained" color="primary">
						Save & Next
					</Button>
				</Box>
			</Card>
		</Container>
	);
};

export default QuizCard;
