import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';



import './App.css';

const HatsPage = (props) => {
  console.log(props)
  return (
    <div>
      <h1> HATS PAGE </h1>
    </div>
  )
}

class App extends React.Component {

  //commented as dipatch/action redux addded 
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props //de structuring it from props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // this.setState({
          //   currentUser: {
          //     id:snapShot.id,
          //     ...snapShot.data()
          //   }
          // });

          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });

          //console.log(snapShot.data());
          //console.log(this.state);
        });
      }

      setCurrentUser(userAuth);
      //console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/shop/hats' component={HatsPage} />
          <Route excat path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,
  mapDispatchToProps)(App);
