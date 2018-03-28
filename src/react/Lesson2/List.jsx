import React from 'react';
import LecturerCard from './LecturerCard';
import Title from './Title';

class List extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <LecturerCard />
      </div>
    );
  }
}

export default List;
