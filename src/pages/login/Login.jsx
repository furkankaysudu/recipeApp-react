import React from 'react'
import {LoginPage} from './Styled'
import {Link} from "react-router-dom"



const Login = () => {
  return (
    
      <LoginPage>
        <div>
          <form>
              <label>
                  <input type="text" placeholder='USERNAME' required/>
              </label>
              <label>
                  <input type="password" placeholder='PASSWORD' required/>
              </label>
              <button type='submit'>LOGIN</button>
          </form>
        </div>
      </LoginPage>
  )
}

export default Login