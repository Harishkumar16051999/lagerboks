import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './app/components/header/Header';
import Units from './app/pages/Units';
import TenantDetails from "./app/pages/TenantDetails";
import SidebarPostBooking from './app/components/postbooking/Sidebar';
import Profile from './app/pages/postbooking/profile/Profile';
import MyLeases from './app/pages/postbooking/my leases/MyLeases';
import MYInvoices from './app/pages/postbooking/my invoices/MYInvoices';
import Payment from './app/pages/postbooking/payment/Payment';
import Updatepassword from './app/pages/postbooking/update password/Updatepassword';
import SignandPayment from "./app/pages/SignandPayment";
import LoginForm from "./app/pages/LoginForm";
import ViewDocuments from "./app/pages/ViewDocuments";
import DocumentsExpired from "./app/pages/DocumentExpired";
import SuccessfulMoveIn from "./app/pages/SuccessfulMoveIn";

function App() {
  const windowWidth = window.innerWidth;
  const [mobileWidth, SetmobileWidth] = useState();
  const [sidebar, ShowSidebar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    SetmobileWidth(windowWidth)
  }, [mobileWidth])
  return (
    <div>
      <Header width={mobileWidth} sidebar={sidebar} showSidebar={ShowSidebar} />
      {location.pathname.startsWith('/postBooking') && <SidebarPostBooking width={mobileWidth} sidebar={sidebar} showSidebar={ShowSidebar} />}
      <div className={` pusher  ${location.pathname.startsWith('/postBooking') && `${mobileWidth > 980 ? 'pusher-desktop ' : 'pt-120'}`} `} id='mainContent'>
        <Routes>
          <Route exact path='/units' element={<Units />} />
          <Route path='/tenantDetails' element={<TenantDetails />} />
          <Route path='/signandPayment' element={<SignandPayment />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/viewDocuments' element={<ViewDocuments />} />
          <Route path='/linkExpired' element={<DocumentsExpired />} />
          <Route path='/successfulMovein' element={<SuccessfulMoveIn />} />

          <Route path='/postBooking/Profile' element={<Profile />} />
          <Route path='/postBooking/myLeases' element={<MyLeases />} />
          <Route path='/postBooking/myInvoices' element={<MYInvoices />} />
          <Route path='/postBooking/payment' element={<Payment />} />
          <Route path='/postBooking/updatePassword' element={<Updatepassword />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
