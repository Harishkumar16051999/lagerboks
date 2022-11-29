import React from "react";
import { useNavigate } from 'react-router-dom';

const SuccessfulMoveIn = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border-radius-15 text-center card-boxShadow w-35 mx-auto px-2 py-5 mt-5">
      <div className="success-img text-center mb-2">
        <img className="w-75" src="/assets/images/success-movein.svg" alt="Successfully Moved In" />
      </div>
      <h6 className="text-success-dark fs-7 fw-500 mb-1">You have successfully Moved In</h6>
      <p className="mb-1">Check your inbox for lease-related information</p>
      <div className="d-flex align-items-center justify-content-around mb-2">
        <div className="d-flex">
          <img src="" alt="" />
          <p>Invoice No 584</p>
        </div>
        <div className="d-flex">
          <img src="" alt="" />
          <p>Invoice No 584</p>
        </div>
        <div className="d-flex">
          <img src="" alt="" />
          <p>Invoice No 584</p>
        </div>
      </div>
      <button onClick={() => navigate('/postBooking/Profile')} className="ui button bg-success-dark text-white fw-400">Go to Lease</button>
    </div>
  )
}

export default SuccessfulMoveIn