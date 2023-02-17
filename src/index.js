import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container d-flex align-items-center text-center'>
    <div className='form-signin'>
      <form>
        <img className='mb-4' src="https://newwaypms.com/skins/news/images/logo_mobile.png" alt="newwaypms" width="100" height="50" />
        <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>
        <div className='form-floating'>
          <input type="email" className='form-control email' id='floatingEmail' placeholder='yourname@example.com' />
          <label>Email address</label>
        </div>
        <div className='form-floating'>
          <input type="password" className='form-control password' id='floatingPassword' placeholder='Password' />
          <label>Password</label>
        </div>
        <div className='checkbox mb-3'>
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
        <p className='mt-5 mb-3 text-muted'>2017 - 2023</p>
      </form>
    </div>
  </div>
);


