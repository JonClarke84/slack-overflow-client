export function emailExists(email) {
  fetch(`http://localhost:5000/users/email/check`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('email check result from server: ', data.message)
      if (data.message == 'userExists') {
        alert('Email already exists')
        return true
      }
      return false
    }
    )
}