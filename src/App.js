
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Default from './components/Default';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

import React from 'react'

function App() {
  return (
    <div>
      <Navbar/>
       <Switch>

         <Route  exact path="/" component={ProductList}/>
         
         <Route path="/details" component={Details}/>
         
        
         <Route path="/cart" component={Cart}/>
        
         <Route  component={Default}/>
         
       </Switch>
       

    </div>
  )
}

export default App


// class App extends Component {
//   render (){
//     return(
//       <React.Fragment>
//        <Navbar/>
//        <Switch>

//          <Route  exact path="/" component={ProductList}/>
         
//          <Route path="/details" component={Details}/>
         
        
//          <Route path="/cart" component={Cart}/>
        
//          <Route  component={Default}/>
         
//        </Switch>
       

//     </React.Fragment>
//     );
//   }
  
// }

// export default App;
