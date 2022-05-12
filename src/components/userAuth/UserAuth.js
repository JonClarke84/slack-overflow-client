import React from 'react';
import Login from './Login'
import Signup from './Signup'

class UserAuth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayLogin: true
    }
  }

  toggleLogin = () => {
    this.setState({ displayLogin: !this.state.displayLogin })
  }

  render = () => {
    let displayPage = this.state.displayLogin ?
                      <Login loginFunction={this.props.loginFunction} toggleLogin={this.toggleLogin}/>
                      :
                      <Signup signUpFunction={this.props.signUpFunction} />
    return (
      <div className='UserAuth'>
        {displayPage}
      </div>
    )
  }
}

export default UserAuth
