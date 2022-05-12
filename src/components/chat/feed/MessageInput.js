import React from 'react'

class MessageInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ message: event.target.value })
  }

  handleSubmit(event) {
    console.log(this.state.message)
    console.log(event.target.parentElement)
    event.preventDefault()
  }

  render() {
    return (
      <div className='MessageInput'>
        Input Box
        <form>
          <label>
            Message:
            <input type="text" onChange={this.handleChange} />
          </label>
          <input type="submit" onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}

export default MessageInput
