/* eslint-disable quote-props */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-boolean-value */
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

const mapNameToLabel = {
  category: 'category',
  ita: 'Invitation To Apply',
  aor: 'Acknowledgement of Receipt',
  bil: 'Biometrics Invitation Letter',
  mil: 'Medicals Invitation Letter',
  biometricsPassed: 'Biometrics Passed',
  medicalsPassed: 'Medicals Passed',
  p1: 'Portal1 email',
  p2: 'Portal2 email',
  copr: 'Confirmation of PR',
};

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  processFormData = (e) => {
    e.preventDefault();
    const data = {};
    Object.keys(mapNameToLabel).forEach((key) => {
      console.log(e.target[key].name, e.target[key].value);
      const { name } = e.target[key];
      const { value } = e.target[key];
      if (!value || value.length === 0) {
        return;
      }
      data[name] = value;
    });
    console.log(data);
    axios.post(`${process.env.REACT_APP_PORT}/applications`, data, {
      headers: {
        'Authorization': localStorage.getItem('token'),
      },
    });
  };

  renderDateInputs = (categoryName) => (
    <>
      <label htmlFor={categoryName} name={categoryName} className=" mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">{mapNameToLabel[categoryName]}</label>
      <input type="date" name={categoryName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </>
  );

  render() {
    return (
      <>
        <NavBar profile={true} />
        <section className="bg-gray-50 dark:bg-gray-900">
          <p className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white text-center">My Profile</p>
          <form className="max-w-sm mx-auto" onSubmit={this.processFormData}>
            <label htmlFor="countries" name="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your Category</label>
            <select id="countries" name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>CEC PNP Inland</option>
              <option>CEC PNP Outland</option>
              <option>FSW PNP Outland</option>
              <option>FSW PNP Inland</option>
            </select>
            {this.renderDateInputs('ita')}
            {this.renderDateInputs('aor')}
            {this.renderDateInputs('bil')}
            {this.renderDateInputs('mil')}
            {this.renderDateInputs('biometricsPassed')}
            {this.renderDateInputs('medicalsPassed')}
            {this.renderDateInputs('p1')}
            {this.renderDateInputs('p2')}
            {this.renderDateInputs('copr')}
            <button type="submit" className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
          </form>
        </section>
      </>
    );
  }
}

export default MyProfile;
