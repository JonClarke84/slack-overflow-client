export function emailExists(email) {
  fetch(`https://polar-ravine-55573.herokuapp.com/users/email/check`, {
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