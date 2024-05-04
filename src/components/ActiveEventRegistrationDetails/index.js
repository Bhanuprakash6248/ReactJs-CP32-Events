// Write your code here
import './index.css'

const regStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {status} = props
  console.log(status)

  const renderRegistered = () => (
    <div className="registered-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="reg-p">You have already registered for the event</h1>
    </div>
  )

  const renderNotRegistered = () => (
    <div className="registered-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="notRegistered"
      />
      <p className="reg-p">
        A live performance brings so much to your relationship with dance
      </p>
      <button type="button" className="notReg-btn">
        Register Here
      </button>
    </div>
  )

  const renderRegistrationClosed = () => (
    <div className="registered-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrationClosed-img"
      />
      <h1 className="regClosed-head">Registrations Are Closed Now!</h1>
      <p className="reg-p">Stay tuned. We will reopen</p>
    </div>
  )

  switch (status) {
    case regStatus.registered:
      return renderRegistered()
    case regStatus.registrationClosed:
      return renderRegistrationClosed()
    case regStatus.yetToRegister:
      return renderNotRegistered()

    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
