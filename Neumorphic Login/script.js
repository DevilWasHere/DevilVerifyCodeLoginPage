function verifyCode() {
  const enteredCode = document.getElementById('verificationCode').value;
  const correctCode = 'yourSecretCode'; // Replace with your actual secret code

  if (!enteredCode) {
    alert('Error: Please enter a verification code.');
  } else if (enteredCode === correctCode) {
    alert('Verification Successful!');
    // Redirect or perform other actions on success
  } else {
    alert('Verification Failed. Please try again.');
  }
}