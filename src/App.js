import { Routes,Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
//import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Header from './components/Header/Header';
import Login from '../src/components/Login/Login';
import SignUp from '../src/components/Signup/Signup';
import RequireAuth from './components/RequireAuth/RequireAuth';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/home' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={
            <RequireAuth>
                <Inventory></Inventory>
            </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      {/* /** 
       <Routes>
        <Route index element={<Landing />} />
        <Route path="landing" element={<Landing />} />
        <Route
          path="home"
          element={
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          }
        />
        ...
      </Routes>
      */}
    </div>
  );
}

export default App;