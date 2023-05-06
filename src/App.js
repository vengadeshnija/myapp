import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link,Outlet} from 'react-router-dom';
//import Counter from './counter';
//import Todo from './Todo/Todo';
//import ImageSearch from './ImageSearch';
//import Counter1 from './counter1';
//import ImageSearchfn from './ImageSearchfn';
//import Weather from './Weather';
//import Todo1 from './Todo1/Todo1'
//import Weatherreport from './wapi/Weatherreport';
//import SignIn from './Signin';
//import Post from './Post';
//import SignIn1 from './SignIn1';
//import Post1 from './Post1';
//import Calculator from './Calculator';
import Weather1 from './Weather1';
function App() {
  return (
    <BrowserRouter>
    <nav className="navbar navbar-dark bg-warning">
    <ul className="navbar-nav">   
    {/*<li className="nav-item active">
      <Link to="/counter">counter</Link>      
      </li>
      <li className="nav-item active">
      <Link to="/Todo">Todo</Link>         
      </li>
      <li className="nav-item active">
      <Link to="/ImageSearch">ImageSearch</Link>         
      </li>
      <li className="nav-item active">
      <Link to="/Counter1">Counter1</Link>         
      </li>
      <li className="nav-item active">
      <Link to="/ImageSearchfn">ImageSearchfn</Link>         
      </li>
      <li className="nav-item active">
      <Link to="/Weather">Weather</Link>         
      </li>
      <li className="nav-item active">
      <Link to="/Todo1">Todo1</Link>         
      </li>
      <li className="nav-item active">
      <Link to="/Weatherreport">Weatherreport</Link>         
      </li> 
      <li className="nav-item active">
      <Link to="/Signin">SignIn</Link>         
      </li> 
      <li className="nav-item active">
      <Link to="/Post">Post</Link>         
      </li> 
      <li className="nav-item active">
      <Link to="/Signin1">SignIn1</Link>         
      </li> 
      <li className="nav-item active">
      <Link to="/Post1">Post1</Link>         
      </li> 
      
      <li className="nav-item active">
      <Link to="/Calculator">Calculator</Link>         
  </li>*/} 
      <li className="nav-item active">
      <Link to="/Weather1">Weather1</Link>         
      </li> 
      </ul>
    </nav>
    <Routes>
      {/*<Route path="counter" element={<Counter/>}></Route>
      <Route path="Todo" element={<Todo/>}></Route>
      <Route path="ImageSearch" element={<ImageSearch/>}></Route>
      <Route path="Weather" element={<Weather/>}></Route>
      <Route path="Counter1" element={<Counter1/>}></Route>
      <Route path="ImageSearchfn" element={<ImageSearchfn/>}></Route>
      <Route path="Todo1" element={<Todo1/>}></Route>
      <Route path="Weatherreport" element={<Weatherreport/>}></Route>
      <Route path="Signin" element={<SignIn/>}></Route>
      <Route path="Post" element={<Post/>}></Route>
      <Route path="Signin1" element={<SignIn1/>}></Route>
      <Route path="Post1" element={<Post1/>}></Route>
      <Route path="Calculator" element={<Calculator/>}></Route>*/}
      <Route path="Weather1" element={<Weather1/>}></Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;