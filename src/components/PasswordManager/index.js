import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  state = {
    passwordListItems: [],
    websiteInput: '',
    userNameInput: '',
    passwordInput: '',
  }

  renderImage = () => (
    <div className="no-password-container">
      <img
        className="no-password"
        alt="no passwords"
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
      />
      <p>No Passwords</p>
    </div>
  )

  renderListItems = () => {
    const {passwordListItems} = this.state
    return (
      <ul className="password-list-container">
        {passwordListItems.map(eachPassword => (
          <PasswordItem
            deletePassword={this.deletePassword}
            passwordDetails={eachPassword}
            key={eachPassword.id}
          />
        ))}
      </ul>
    )
  }

  onChangeSearchInput = event => {
    console.log(event.target.value)
    const {passwordListItems} = this.state
    this.setState({
      passwordListItems: passwordListItems.filter(eachPassword =>
        eachPassword.website.includes(event.target.value),
      ),
    })
  }

  deletePassword = id => {
    const {passwordListItems} = this.state
    this.setState({
      passwordListItems: passwordListItems.filter(
        eachPassword => eachPassword.id !== id,
      ),
    })
  }

  onChangeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userNameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  addPasswordToList = event => {
    event.preventDefault()
    const {userNameInput, passwordInput, websiteInput} = this.state
    const newPassword = {
      id: uuidv4(),
      website: websiteInput,
      username: userNameInput,
      password: passwordInput,
    }
    this.setState(prevState => ({
      passwordListItems: [...prevState.passwordListItems, newPassword],
      websiteInput: '',
      passwordInput: '',
      userNameInput: '',
    }))
  }

  render() {
    const {
      passwordListItems,
      websiteInput,
      passwordInput,
      userNameInput,
    } = this.state
    const passwordLength = passwordListItems.length
    return (
      <div className="password-manager-container">
        <div className="logo-container">
          <img
            className="logo-image"
            alt=" app logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          />
        </div>
        <div className="cards-container">
          <div className="card-1">
            <div className="inputs-container">
              <h1 className="heading">Add New Password</h1>
              <form onSubmit={this.addPasswordToList} className="from">
                <div className="input-element">
                  <img
                    className="search-icon"
                    alt="website"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  />
                  <input
                    onChange={this.onChangeWebsite}
                    className="text-search"
                    type="text"
                    placeholder="Enter Website"
                    value={websiteInput}
                  />
                </div>
                <div className="input-element">
                  <img
                    className="search-icon"
                    alt="username"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  />
                  <input
                    onChange={this.onChangeUserName}
                    className="text-search"
                    type="text"
                    placeholder="Enter Username"
                    value={userNameInput}
                  />
                </div>

                <div className="input-element">
                  <img
                    className="search-icon"
                    alt="password"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  />
                  <input
                    onChange={this.onChangePassword}
                    className="text-search"
                    type="password"
                    placeholder="Enter Password"
                    value={passwordInput}
                  />
                </div>
                <div className="button-container">
                  <button className="button" type="submit">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <div>
              <img
                alt="password manager"
                className="password-image"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              />
            </div>
          </div>
          <div className="card-2">
            <div className="password-search-container">
              <div>
                <h1 className="password-heading">
                  Your Passwords <p>{passwordLength}</p>
                </h1>
              </div>
              <div className="input-element-search">
                <img
                  className="search-icon"
                  alt="search"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                />
                <input
                  onChange={this.onChangeSearchInput}
                  className="text-search1"
                  type="search"
                />
              </div>
            </div>
            <hr className="separator" />
            <div className="show-password-button-container">
              <div className="show-password">
                <input type="checkbox" id="showPassword" />
                <label className="heading" htmlFor="showPassword">
                  Show Password
                </label>
              </div>
            </div>
            <div className="list-items-container">
              {passwordListItems.length === 0
                ? this.renderImage()
                : this.renderListItems()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
