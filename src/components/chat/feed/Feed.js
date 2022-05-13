import React from 'react'
import Message from './Message'
import io from 'socket.io-client'
import ImageUpload from '../../utils/imageUpload';
import { IoSend } from "react-icons/io5";
import { BsImage, BsFillEmojiDizzyFill, BsCodeSlash } from "react-icons/bs";
import { AiOutlineFileGif } from "react-icons/ai"
import equal from 'fast-deep-equal'

class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      newMessageInput: '',
      upToDate: false,
      imageUrl: '',
    }
    this.socket = null

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.emitReaction = this.emitReaction.bind(this)
    this.getUrl = this.getUrl.bind(this)

    this.emitDeleteMessage = this.emitDeleteMessage.bind(this)
    this.emitEditMessage = this.emitEditMessage.bind(this)
    this.scrollToBottom = this.scrollToBottom.bind(this)
  }

  getRoomMessages() {
    const that = this
    const url = `https://polar-ravine-55573.herokuapp.com/messages/room/${this.props.currentRoom}`
    fetch(url, {
      method: "GET",
    }
    ).then(res => res.json()
    ).then((data) => {
      that.setState({ messages: data })
    })
  }

  setMessagesState(newMessages) {
    this.setState({ messages: newMessages })
  }

  objectsAreSame(x, y) {
    var objectsAreSame = true;
    for(var propertyName in x) {
       if(x[propertyName] !== y[propertyName]) {
          objectsAreSame = false;
          break;
       }
    }
    return objectsAreSame;
 }

  socketConnect() {
    this.socket = io(`https://polar-ravine-55573.herokuapp.com`)
    this.socket.on('handshake', (msg) => {
      console.log(msg)
    })

    this.socket.on('displayNewMessage', (params) => {
      this.displayNewMessage(params)
    })

    this.socket.on('refreshMessages', () => {
      this.getRoomMessages()
    })
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({ newMessageInput: event.target.value })
  }
  
  getUrl(url) {
    this.setState({ imageUrl: url })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.state.newMessageInput != '') {
      const { firstName, lastName, displayName, icon } = this.props.currentUser
      const newTimeStamp = new Date
      const newMessage = { 
        message: this.state.newMessageInput, 
        roomName: this.props.currentRoom, 
        timeStamp: newTimeStamp,
        authorId: this.props.currentUser.id,
        imageUrl: this.state.imageUrl }

      this.socket.emit('newMessage', newMessage)
      
      this.setState({ newMessageInput: '' })
    }

      // setTimeout(() => {
      //   this.scrollToBottom('smooth')
      // }
      // , 1000)
  }

  scrollToBottom(behavior) {
    const element = document.getElementById("feed")
    element.scrollTo({ top: element.scrollHeight, behavior: `${behavior}` })
  }

  emitReaction(params) {
    this.socket.emit('newReaction', params)
  }

  emitDeleteMessage(messageId) {
    this.socket.emit('deleteMessage', messageId)
  }

  emitEditMessage(messageId, newText) {
    this.socket.emit('editMessage', { messageId: messageId, newText: newText})
  }

  displayNewMessage(messageObj) {
    const currentMessages = this.state.messages
    const newMessages = []
    for (let i = 0; i < currentMessages.length; i++) newMessages.push(currentMessages[i])
    newMessages.push(messageObj)
    this.setState({ messages: newMessages })
  }

  render() {
    const messageComponents = []
    for (let i = 0; i < this.state.messages.length; i++) {
      messageComponents.push(
        <Message 
          key={i}
          authorId={this.state.messages[i].authorId} 
          text={this.state.messages[i].message} 
          imageUrl={this.state.messages[i].imageUrl}
          timeStamp={this.state.messages[i].timeStamp} 
          reactions={this.state.messages[i].reactions}
          messageId={this.state.messages[i]._id}
          currentUser={this.props.currentUser}
          emitReaction={this.emitReaction}
          emitDelete={this.emitDeleteMessage}
          emitEdit={this.emitEditMessage}
        />
      )
    }
   
    return (
      <div>
        <div className='Feed' id="feed">
          {messageComponents}
          <p className='text-transparent'>{this.props.currentRoom}</p>
            <div className='bottom-bar'>
                <input
                id='messageInput' 
                className='bottom-bar-input' 
                type="text" 
                placeholder="Enter message..." 
                onChange={this.handleChange}
                value={this.state.newMessageInput} />

              <button
                type="submit"
                id="submit-message"
                className='send-button' 
                onClick={this.handleSubmit}>
                <IoSend size="20" />
              </button>
              <div className='bottom-sub-bar'>

              
            
              <button
                type="submit"
                className='bottom-bar-icon group'>
                <BsImage size="20" />
                <span className="flex flex-row justify-center items-center
                                absolute bottom-8 left-0
                              bg-gray-600
                                scale-0 group-hover:scale-100
                                transition-all duration-300 origin-bottom-left ease-in-out
                                rounded-md">
                  <ImageUpload currentUser={this.props.currentUser} getUrl={this.getUrl} />
                </span>
              </button>

              <button
                type="file"
                className='bottom-bar-icon'>
                <AiOutlineFileGif size="20"/>
              </button>
              <button
                type="submit"
                className='bottom-bar-emoji'>
                <BsFillEmojiDizzyFill size="20"/>
              </button>
              <button
                type="submit"
                className='bottom-bar-icon'>
                <BsCodeSlash size="20" />
              </button>
              </div>
            </div>       
        </div>
      </div>
      
    )
  }

  componentDidMount() {
    if (!this.socket) this.socketConnect()
    this.getRoomMessages()
    setTimeout(() => {
      this.scrollToBottom('auto')
    }
    , 1000)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.currentRoom != prevProps.currentRoom) {
      console.log(`leaving room: ${prevProps.currentRoom}`)
      console.log(`joining room: ${this.props.currentRoom}`)
      this.socket.emit('joinNewRoom', this.props.currentRoom)
      this.getRoomMessages()
    }
    if (prevState.messages.length !== this.state.messages.length) {
        this.scrollToBottom('smooth')
    }
    if (!equal(this.props.currentUser, prevProps.currentUser)) {
      this.socket.emit('nameChange', this.props.currentRoom)
    }
  }
}

export default Feed
