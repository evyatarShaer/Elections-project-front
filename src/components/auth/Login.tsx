import Register from './Register';
import { Link, Routes, Route } from 'react-router-dom';


const Login = () => {
  return (
    <div>
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Submit</button>
          <Link to="http://localhost:4444/auth/register">Sign Up</Link>
          <Routes>
            <Route path="http://localhost:4444/auth/register" element={<Register />} />
          </Routes>
        </form>
    </div>
  )
}

export default Login