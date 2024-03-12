import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  React.useEffect(() => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const user = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    console.log(document.cookie);

    if (user && token) {
      console.log('User is logged in');
      window.location.href = '/';
    } else {
      console.log('User is not logged in');
    }
  }, []);

  const [data, setData] = React.useState({
    email: '',
    password: '',
  });
  const [text, setText] = React.useState('');

  const loginUser = () => {
    axios.post('/auth/login', data)
      .then((res) => {
        console.log(res);
        setText('Logged in');
        // Set cookies
        const expirationDate = new Date(res.data.tokens.access.expires).toUTCString();
        document.cookie = `token=${res.data.tokens.access.token}; expires=${expirationDate}`;
        document.cookie = `user=${JSON.stringify(res.data.user)}`;
        // Set local storage
        localStorage.setItem('token', res.data.tokens.access.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        window.location.href = '/';
      })
      .catch((err) => {
        console.log(err);
        setText('Error logging in');
        // Error message
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <h1>{text}</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input type="email" placeholder="Email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
        <input type="password" placeholder="Password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
        <button onClick={loginUser}>Login</button>
      </div>

      <br />
      <Link to="/register">Not registered? Click here</Link>
    </div>
  );
}
