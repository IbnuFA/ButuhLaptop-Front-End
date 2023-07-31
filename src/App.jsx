import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import TesPage from './page/tes-page';
import Home from './page/home/Home';
import Login from './page/home/Login';
import Register from './page/home/Register';
import About from './page/home/About';
import NotFound from './page/home/NotFound';
import AdminOnly from './page/home/AdminOnly';

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
import ProductMain from './page/product/ProductMain' 

import TesPage from './page/tes-page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        {/* User */}
        <Route path='/user' element={<UserMain />} />
        <Route path='/user/listkeranjang' element={<UserListKeranjang />} />
        <Route path='/user/detailkeranjang' element={<UserDetailKeranjang />} />
        <Route path='/user/listcheckout' element={<UserListCheckout />} />
        <Route path='/user/detailcheckout' element={<UserDetailCheckout />} />
        {/* Produk */}
        <Route path='produk' element={<ProductMain/>} /> 
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
        <Route path='/admin/editproduct' element={<AdminEditProduct/>}/>
        <Route path='/admin/listorder' element={<AdminListOrder/>} />
        <Route path='/adminOnly' element={<AdminOnly />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/tes' element={<TesPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
