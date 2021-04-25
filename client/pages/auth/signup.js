import { useState } from 'react';
import Router from 'next/router';
import useRequest from './../../hooks/use-request';

const signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
      email, password
    },
    onSuccess: () => Router.push('/')
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    await doRequest();
    setPassword('');
    setEmail('');
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label htmlFor="email">Email Adress:</label>
        <input
          id="email"
          type="text"
          className="form-control"
          value={email}
          onChange={e => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          className="form-control"
          value={password}
          onChange={e => setPassword(e.target.value)} />
      </div>
      {errors}
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};

export default signup;