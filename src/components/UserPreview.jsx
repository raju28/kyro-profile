import React from 'react';

function UserPreview({ firstName, lastName, displayName, email, phoneNumber, location }) {
  return (
    <div className='profile-preview-container'>
      <div className='preview-img'>
      <img src="https://xsgames.co/randomusers/assets/avatars/male/70.jpg" alt="" className='thumb'/>
      </div>
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Display name: {displayName}</p>
      <p>Email: {email}</p>
      <p>Phone number: {phoneNumber}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default UserPreview;
