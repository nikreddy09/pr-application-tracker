/* eslint-disable react/jsx-boolean-value */
/* eslint-disable comma-dangle */
/* eslint-disable quote-props */
/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import NavBar from '../NavBar/NavBar';

class Applications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applications: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5555/applications', {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    }).then((data) => {
      console.log(data);

      this.setState({
        applications: data.data.data,
      });
    });
  }

  listItem(name, data) {
    if (!data) {
      return;
    }
    return (
      <li className="py-1 sm:py-2">
        <div className="flex items-center">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {name}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {data || 'N/A'}
          </div>
        </div>
      </li>
    );
  }

  application(data) {
    console.log(data);
    return (
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-md font-bold leading-none text-gray-900 dark:text-white">
            {data.applicantName}
          </h5>
          <p className="text-md font-bold leading-none text-gray-900 dark:text-white">
            {data.category}
          </p>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {this.listItem('ITA', data.ita)}
            {this.listItem('AOR', data.acknowledgment)}
            {this.listItem('BIL', data.biometricsInvitation)}
            {this.listItem('MIL', data.medicalsInvitation)}
            {this.listItem('Biometrics Passed', data.biometricsCompleted)}
            {this.listItem('Medicals Passed', data.medicalsCompleted)}
            {this.listItem('P1 Email', data.p1Email)}
            {this.listItem('P2 Email', data.p2Email)}
            {this.listItem('COPR', data.copr)}
          </ul>
        </div>
      </div>
    );
  }

  render() {
    return (
      <>
        <NavBar applications={true} />
        <div className="container mx-auto my-3 px-2">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 1050: 2, 1300: 3 }}>
            <Masonry gutter="20px">
              {this.state.applications.map((data) => this.application(data))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </>

    );
  }
}

export default Applications;
