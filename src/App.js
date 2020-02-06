import React from 'react';
import Loginpage from './screens/login/Login.page';
import Adminpage from './screens/admin-board';
import firebase from 'firebase';
import { firebaseConfig } from './util/FirebaseConf';


firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      {/* <Loginpage/> */}
      <Adminpage/>
    
    </div>
  );
}

export default App;
