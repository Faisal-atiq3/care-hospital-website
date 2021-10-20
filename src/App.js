
import './App.css';


import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import Home from './Home/Home';
import Booking from './Booking/Booking/Booking';
import Login from './Login/Login';
import Menubar from './Menubar/Menubar'
import Footer from './Footer/Footer';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';
import About from './About/About';
import ContuctUs from './Contact Us/ContuctUs';
import Register from './Register/Register';
import Career from './Career/Career';






function App() {
  
  return (
    <AuthProvider>
       <Router>
        <Menubar></Menubar>
        <Switch>
          <Route  exact path="/">
            <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
              </Route>
            <Route path="/register">
            <Register></Register>
              </Route>
            <Route path="/about">
             <About></About>
              </Route>
            <Route path="/contuctUs">
             <ContuctUs></ContuctUs>
              </Route>
            <Route path="/career">
             <Career></Career>
              </Route>
            <Route path="/login">
              <Login></Login>
              </Route>
              <PrivateRoute path="/booking/:serviceId">
                <Booking></Booking>

              </PrivateRoute>



        <Route path ="*">
          <NotFound></NotFound>

        </Route>

        </Switch>
        <Footer></Footer>
      </Router> 
      
    </AuthProvider>
     
   
  );
}

export default App;
