import React from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'
type Props = {}

const Register = (props: Props) => {
  React.useEffect(() => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const user = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    console.log(document.cookie)
    // console.log(user)

    if (user && token) {
      console.log('User is logged in')
      window.location.href = '/'
    } else {
      console.log('User is not logged in')
    }
  }, []);
  const [data, setData] = React.useState({
    name: '',
    email: '',
    password: '',
  })

  const registerUser = ()=>{
    axios.post('/auth/register', data).then((res) => {
      console.log(res)
      window.location.href = '/login'

    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <h1>Register</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <input type="text" placeholder="Name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
        <input type="email" placeholder="Email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
        <input type="password" placeholder="Password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
        <button onClick = {registerUser}>Register</button>
        <br></br>
        <Link to="/login">Allready registered? Click here</Link>

      </div>
    </div>
  )
}

export default Register