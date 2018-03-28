import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        Not found
        <Link href to="/"> <b>Go to Home</b></Link>
      </div>
    );
  }
}
