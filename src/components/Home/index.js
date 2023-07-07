// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {isLogged: false}

  onButton = () => {
    this.setState(prevState => ({isLogged: !prevState.isLogged}))
  }

  render() {
    const {isLogged} = this.state

    return (
      <div>
        <div className="container">
          <Message isLogged={isLogged} />
          {isLogged ? (
            <Logout logout={this.onButton} />
          ) : (
            <Login login={this.onButton} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
