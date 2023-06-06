import {useState, useEffect} from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'

const initialState = {
  name:'',
  email:'',
  password:'',
  isMember:true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  //global state and useNavigate

  const handleChange = (e) => {
    console.log(e.target)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }
  
  return (
    <Wrapper>
      <form className='form' onSubmit={onSubmit}>
        <h3>Login</h3>

        {/*name input*/}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type="text" value={values.name} name='name' onChange={handleChange} className='form-input'/>
        </div>
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
    </Wrapper>
  )
}

export default Register