import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getUserLogin } from "./features/authSlice";

import ProtectedRoutes from './components/ProtectedRoutes';
import AdminRoutes from './components/AdminRoutes';


// import Main Page
import Home from './page/home/Home';
import ProductCatalog from './page/home/ProductCatalog';
import Login from './page/home/Login';
import Register from './page/home/Register';
import About from './page/home/About';
import NotFound from './page/home/NotFound';
import AdminOnly from './page/home/AdminOnly';
import Feedback from './page/home/Feedback'

// import user
import UserMain from './page/user/UserMain';
import UserListKeranjang from './page/user/UserListKeranjang';
import UserDetailKeranjang from './page/user/UserDetailKeranjang';
import UserListCheckout from './page/user/UserListCheckout';
import UserDetailCheckout from './page/user/UserDetailCheckout';

// import admin
import AdminMain from './page/admin/AdminMain';
import AdminListUser from './page/admin/AdminListUser';
import AdminDetaiUser from './page/admin/AdminDetailUser';
import AdminAddUser from './page/admin/AdminAddUser';
import AdminEditUser from './page/admin/AdminEditUser';
import AdminListProduct from './page/admin/AdminListProduct'
import AdminDetailProduct from './page/admin/AdminDetailProduct';
import AdminAddProduk from './page/admin/AdminAddProduk';
import AdminEditProduct from './page/admin/AdminEditProduct';
import AdminListOrder from './page/admin/AdminListOrder';
import AdminEditOrder from './page/admin/AdminEditOrder';
import AdminListFeedback from './page/admin/AdminListFeedback';
import ProductMain from './page/product/ProductMain' 

import TesPage from './page/tes-page';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserLogin());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<ProductCatalog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/feedback' element={<Feedback />} />


        {/* Required Login */}
        <Route
          element={<ProtectedRoutes />}
        >
          {/* User */}
          <Route path='/user' element={<UserMain />} />
          <Route path='/user/keranjang' element={<UserListKeranjang />} />
          <Route path='/user/detailkeranjang' element={<UserDetailKeranjang />} />
          <Route path='/user/checkout' element={<UserListCheckout />} />
          <Route path='/user/detailcheckout/:id' element={<UserDetailCheckout />} />
          {/* Produk */}
          <Route path='/product/:productId' element={<ProductMain/>} /> 

          <Route 
            element={<AdminRoutes />}
          >
            {/* Admin */}
            <Route path='/admin' element={<AdminMain />} />
            {/* Admin User */}
            <Route path='/admin/listuser' element={<AdminListUser/>} />
            <Route path='/admin/detailuser' element={<AdminDetaiUser/>} />
            <Route path='/admin/adduser' element={<AdminAddUser/>} />
            <Route path='/admin/edituser' element={<AdminEditUser/>} />
            {/* Admin Product */}
            <Route path='/admin/listproduct' element={<AdminListProduct/>}/>
            <Route path='/admin/detailproduct' element={<AdminDetailProduct/>}/>
            <Route path='/admin/addproduct' element={<AdminAddProduk/>}/>
            <Route path='/admin/editproduct/:id' element={<AdminEditProduct/>}/>
            <Route path='/admin/listorder' element={<AdminListOrder/>} />
            <Route path='/admin/editorder' element={<AdminEditOrder/>} />
            <Route path='/admin/listfeedback' element={<AdminListFeedback/>} />
            <Route path='/adminOnly' element={<AdminOnly />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/tes' element={<TesPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
