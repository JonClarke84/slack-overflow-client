import { validateEmail } from './validateEmail';

export function validateForm(formData) {
  const { email, password, confirmPassword, firstName, lastName, displayName, icon } = formData

  if (password !== confirmPassword) {
    alert('Passwords do not match')
    return false
  } else if (password.length < 6) {  // password must be at least 6 characters
    alert('Password must be at least 6 characters')
    return false
  } else if (firstName.length < 1) {  // first name must be at least 1 character
    alert('First name must not be blank')
    return false
  } else if (lastName.length < 1) {  // last name must be at least 1 character
    alert('Last name must not be blank')
    return false
  } else if (displayName.length < 1) {  // display name must be at least 1 character
    alert('Please choose your display name')
    return false
  } else if (!validateEmail(email)) { //check if valid email address
    alert('Please enter a valid email address')
    return false
  } else {
    return true
  }
}