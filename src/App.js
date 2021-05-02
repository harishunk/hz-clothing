import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import './App.css';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

const HatsPage = (props) => {
  console.log(props)
  return (
    <div>
      <h1> HATS PAGE </h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path='/shop/hats' component={HatsPage} />
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
