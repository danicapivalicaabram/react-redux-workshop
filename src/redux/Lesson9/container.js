import React from 'react';
import { connect } from 'react-redux';

class Container extends React.Component {
  render() {
    return (
      <div>
        {
           /*
            Insert code here
           */
       }
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  /*
    Insert code here
  */
};

const mapDispatchToProps = (dispatch) => {
  /*
    Insert code here
  */

};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
