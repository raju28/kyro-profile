import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import UserForm from './components/UserForm';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import UserPreview from './components/UserPreview';
import PreviewHeader from './components/PreviewHeader';

export default function GridLayout() {
	const [firstName, setFirstName] = useState('Adam');
  const [lastName, setLastName] = useState('Levine');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');

	const handleValueChange = (newFirstName, newLastName, newDisplayName, newEmail, newPhoneNumber, newLocation) => {
    setFirstName(newFirstName);
    setLastName(newLastName);
		setDisplayName(newDisplayName);
		setEmail(newEmail);
		setPhoneNumber(newPhoneNumber);
		setLocation(newLocation);
  };

  const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: '#fbfbfb',
		padding: theme.spacing(2),
		height: '100vh'
  }));
  return (
	
    <Grid container spacing={0}>
			<Grid item xs={2.5}>
				<Navbar/>
				<Menu/>
			</Grid>
			<Grid item xs={6.5}>
				<Item elevation={0}>
					<UserForm
						onValueChange={handleValueChange}
						firstName={firstName}
						lastName={lastName}
						displayName={displayName}
						email={email}
						phoneNumber={phoneNumber}
						location={location}
					/>
				</Item>
			</Grid>
			<Grid item xs={3}>
				<Item elevation={0}>
					<PreviewHeader/>
					<UserPreview
						firstName={firstName}
						lastName={lastName}
						displayName={displayName}
						email={email}
						phoneNumber={phoneNumber}
						location={location}
					/>
				</Item>
			</Grid>
  </Grid>
  );
}