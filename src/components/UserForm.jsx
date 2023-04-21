import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import '../Form.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Greeting from './Greeting';

function UserForm({
	firstName,
	lastName,
	displayName,
	email,
	phoneNumber,
	location,
	onValueChange
}) {
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newDisplayName, setNewDisplayName] = useState(displayName);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber);
  const [newLocation, setNewLocation] = useState(location);
	const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
		event.preventDefault();
		const errors = {};

    if (!newEmail.trim()) {
      errors.newEmail = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
      errors.newEmail = 'Invalid email address';
    }

    if (!newPhoneNumber.trim()) {
      errors.newPhoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(newPhoneNumber)) {
      errors.newPhoneNumber = 'Invalid phone number';
    }

		setErrors(errors);

    if (Object.keys(errors).length === 0) {
			toast.success('Profile updated successfully!', {
				position: toast.POSITION.TOP_RIGHT,
				autoClose: 2000
			});
			onValueChange(newFirstName, newLastName, newDisplayName, newEmail, newPhoneNumber, newLocation);
			console.log('User data saved:', {
				firstName,
				lastName,
				displayName,
				email,
				phoneNumber,
				location
			});
		}
  };

  return (
		<>
			<Greeting firstName={firstName}/>
			<ToastContainer/>
			<h4>My Profile</h4>
			<form className='profile-form' onSubmit={handleSubmit}>
				<Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
					<Grid item={true} xs={6}>
						<div className="group">      
							<input type="text" value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)} />
							<label>First name</label>
						</div>
					</Grid>
					<Grid item={true} xs={6}>
						<div className="group">      
							<input type="text" value={newLastName} onChange={(e) => setNewLastName(e.target.value)} />
							<label>Last name</label>
						</div>
					</Grid>
					<Grid item={true} xs={6}>
						<div className="group">      
							<input type="text" value={newDisplayName} onChange={(e) => setNewDisplayName(e.target.value)} />
							<label>Display name</label>
						</div>
					</Grid>
					<Grid item={true} xs={6}>
						<div className="group">      
							<input type="text" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
							<label>Email</label>
						</div>
						{errors.newEmail && <div className='error-text'>{errors.newEmail}</div>}
					</Grid>
					<Grid item={true} xs={6}>
						<div className="group">      
							<input type="tel" value={newPhoneNumber} onChange={(e) => setNewPhoneNumber(e.target.value)} />
							<label>Phone number</label>
						</div>
						{errors.newPhoneNumber && <div className='error-text'>{errors.newPhoneNumber}</div>}
					</Grid>
					<Grid item={true} xs={6}>
						<div className="group">      
							<input type="text" value={newLocation} onChange={(e) => setNewLocation(e.target.value)} />
							<label>Location</label>
						</div>
					</Grid>
				</Grid>
				<button type="submit" className='btn-red form-submit'>Save</button>
			</form>
		</>
  );
}

export default UserForm;
