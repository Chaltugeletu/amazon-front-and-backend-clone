import './App.css'
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import React, { useEffect } from 'react';
import { auth } from './Firebase';

function App() {
  const [{ basket}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  
  return (
  <Router>
    <div className="App">
    {/* <Header/> */}
    <Routes>
    <Route path="Login"element={<Login/>}/>
      <Route path="Checkout"element={<><Header/><Checkout/></>}/>
      <Route path="/"element={<><Header/><Home/></>}/>
    
      
    
      </Routes>
    </div>
    </Router>
  )
}

export default App;