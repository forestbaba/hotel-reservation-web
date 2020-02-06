
import React, { Component, useState, useEffect } from 'react';
import Popup from './Popup';

const Login = ({ closePopup, activateLogin, handleChange, onSubmit}) => {

  const [showPopup, setshowPopup] = useState(true)

  // constructor(props) {
  //   super(props);
  //   this.state = { showPopup: false };
  // }

  // togglePopup() {
  //   this.setState({
  //     showPopup: !this.state.showPopup
  //   });
  // }


 
    return (
      <div>
        <button> login</button>

        {showPopup ?
          <Popup
            text='Add room'
            greeting='Add as many rooms to your hotel'
            closePopup={closePopup}
            handleChange={handleChange}
            onSubmit={onSubmit}

            // closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>

    );

}

export default Login;

// import React, { Component } from 'react';
// import Popup from './Popup';

// class index extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { showPopup: false };
//   }

//   togglePopup() {
//     this.setState({
//       showPopup: !this.state.showPopup
//     });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.togglePopup.bind(this)}> login</button>

//         {this.state.showPopup ?
//           <Popup
//             text='Log in'
//             greeting='Welcome to DroppX, login with your account'
//             closePopup={this.togglePopup.bind(this)}
//           />
//           : null
//         }
//       </div>

//     );
//   }
// }

// export default index;