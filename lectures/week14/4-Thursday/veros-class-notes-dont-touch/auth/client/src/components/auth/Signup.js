import React, {useState} from "react";
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {signUp} from '../../actions/index'

const Signup = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    
    e.preventDefault()

    // dispatch(signUp({email:email, password:password}))
    dispatch(signUp({email, password}))
  }

  return (

    
  <div className="mt-5">

  
    <div className="grid align__item">

      <div className="register">

            <img height="100px" src="https://avatars.githubusercontent.com/u/67744643?s=200&v=4" alt=""/>

            <h2>Sign Up</h2>

            <form onSubmit={handleSubmit} className="form">

              <div className="form__field">
                <input type="email" placeholder="enter email address"
                onChange={e=>setEmail(e.target.value)} />
              </div>

              <div className="form__field">
                <input type="password" placeholder="enter password"
                onChange={e=>setPassword(e.target.value)} />
              </div>

              <div className="form__field">
                <input type="submit" value="Sign Up" />
              </div>

          </form>

          <p>Already have an account? <Link to="/signin">Log in</Link></p>

      </div>

    </div>
  
  </div>);
};

export default Signup;
