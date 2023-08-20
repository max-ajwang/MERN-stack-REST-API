import {useState, useEffect} from 'react'
import { FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/SubscribePage'
import { useAppContext } from '../context/appContext'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Subscribe = () => {
  const [values, setValues] = useState(initialState)
  //global state and useNavigate
  const {isLoading, showAlert, displayAlert} = useAppContext()


  const toggleMember = () => {
    setValues({...values, isMember: !values.isMember})
  }

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }
    console.log(values)
  }
  
  return (
    <Wrapper>
      <div className='subscribe-page'>
        <h1>The Road to $1k</h1>
        <p className='subscription-subheading'>Sharing my journey to $1k monthly recurring revenue by building a portfolio of profitable internet businesses</p>
        <a href='./newsletter' className='link-to-newsletter'> Read it here first </a>

        <form className='form' onSubmit={onSubmit}>
          <h4>{values.isMember ? 'Sign In' : 'Register'}</h4>
          {showAlert && <Alert />}
          {/*name input*/}
          {!values.isMember && (
            <FormRow type='text' name='name' value={values.name} handleChange={handleChange}/>
          )
          }
          {/*email input*/}
          <FormRow type='email' name='email' value={values.email} handleChange={handleChange}/>
          {/*password input*/}
          <FormRow type='password' name='password' value={values.password} handleChange={handleChange}/>
          <button type='submit' className='btn btn-block'>
            Sign In
          </button>
          <p className='login-register-link'>
            {values.isMember ? 'Not a member yet?' : 'Already a member?'}
            <button type='button' onClick={toggleMember} className='member-btn'>
              {values.isMember ? 'Register' : 'Login'}
            </button>
          </p>
        </form>
      </div>
    </Wrapper>
  )
}

export default Subscribe