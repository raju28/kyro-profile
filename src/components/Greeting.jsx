import React from 'react';

function Greeting({firstName}) {
  const currentDate = new Date();
  const currentTime = currentDate.getHours();

  let greeting;
  if (currentTime < 12) {
    greeting = 'Good morning';
  } else if (currentTime < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <>
      <p>{greeting}, {firstName}</p>
      <p>{formattedDate}</p>
    </>
  );
}

export default Greeting;
