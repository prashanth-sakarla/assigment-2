import './index.css'

const PasswordItem = props => {
  const {passwordDetails, deletePassword} = props
  const {id, website, username, password} = passwordDetails
  const isChecked = true
  const initial = website.slice(0, 1).toUpperCase()

  const onClickDeletePassword = () => {
    deletePassword(id)
  }

  return (
    <li className="password-item">
      <div className="initial-item">{initial}</div>
      <div>
        <p className="website">{website}</p>
        <p className="username">{username}</p>
        {isChecked ? (
          <img
            className="stars"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        ) : (
          <p>{password}</p>
        )}
      </div>
      <div className="delete-container">
        <button
          onClick={onClickDeletePassword}
          type="button"
          className="delete-button"
          testid="delete"
        >
          <img
            className="delete-image"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
