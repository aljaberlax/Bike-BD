import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
import Manage from './Components/Manage/Manage';
import Footer from './Shared/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import AddItems from './Components/AddItems/AddItems';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import MyItems from './Components/MyItems/MyItems';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/manage' element={<RequireAuth>
          <Manage></Manage>
        </RequireAuth>}>
        </Route>
        <Route path='/additems' element={<RequireAuth>
          <AddItems></AddItems>
        </RequireAuth>}>
        </Route>
        <Route path='/product/:productId' element={
          <RequireAuth>
          <ProductDetails></ProductDetails>
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
          <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
