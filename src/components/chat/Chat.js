import React from 'react'
import Feed from './feed/Feed'
import Banner from './Banner'
import SideBar from './SideBar';

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.socket = null
    this.state = {
      currentRoom: "General",
    }
    this.changeRoom = this.changeRoom.bind(this)
  }

  changeRoom(newRoom) {
    this.setState({ currentRoom: newRoom })
  }

  render = () => {
    const { currentUser } = this.props.currentState
    const { logoutFunction, loginFunction } = this.props
  
    return (
      <div className='Chat'>
        <Feed currentRoom={this.state.currentRoom} currentUser={currentUser}/>
        <Banner currentUser={currentUser} logoutFunction={logoutFunction} loginFunction={loginFunction} currentRoom={this.state.currentRoom}/>
        <SideBar changeRoom={this.changeRoom}/> 
      </div>
    )
  }

}

export default Chat
