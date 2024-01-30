/* eslint-disable no-useless-constructor */
/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  processFormInput = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target;
    const data = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    console.log(data);
    axios.post('https://pr-app-tracker.onrender.com/api/users', data).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    });
  };

  render() {
    if (localStorage.getItem('token')) {
      window.location = '/';
      return;
    }
    return (
      <>
        <NavBar />
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-1 py-8 mx-auto h-screen lg:py-0">
            <p className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">PR Application Tracker</p>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-2 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={this.processFormInput}>
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                    <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?
                    {' '}
                    <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default SignUp;
