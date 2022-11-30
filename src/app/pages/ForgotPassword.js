import React from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Button } from 'semantic-ui-react';

const ForgotPassword = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="forgotPassword-wrapper">
                <div className="banner-img">
                    <img src="/assets/images/units-bg.png" alt="Banner" />
                </div>
                <div className='bg-white border-radius-10 mb-4 text-center card-boxShadow w-35 mx-auto px-2 mt-5'>
                    <h2 className='py-3 text-primary text-center fw-500 fs-6'>FORGOT PASSWORD</h2>
                    <div className="forgot-img text-center">
                        <img src="/assets/images/forgot.png" alt="Forgot Password" />
                    </div>
                    <div className='ui form py-2 px-4 px-sm-2'>
                        <div className='field mb-3'>
                            <label className='fw-400 mb-2 text-left'>Email/User Name</label>
                            <div className="ui input w-100 position-relative">
                                <input className='pl-6' type="text" placeholder="Email/User Name" />
                                <svg className="position-absolute field-icon l-1 t-1" id="user-svgrepo-com" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 30.667 30.667">
                                    <g id="Group_6355" data-name="Group 6355">
                                        <path id="Path_18913" data-name="Path 18913" d="M26.176,4.49A15.334,15.334,0,0,0,4.49,26.176,15.334,15.334,0,0,0,26.176,4.49ZM15.333,28.973a13.64,13.64,0,1,1,13.64-13.64A13.658,13.658,0,0,1,15.333,28.973Z" fill="#b5b3b3" />
                                        <path id="Path_18914" data-name="Path 18914" d="M184.889,83.883a3.992,3.992,0,1,0-3.989-3.995A3.995,3.995,0,0,0,184.889,83.883Zm0-6.29a2.3,2.3,0,1,1-2.3,2.3A2.3,2.3,0,0,1,184.889,77.593Z" transform="translate(-169.555 -71.14)" fill="#b5b3b3" />
                                        <path id="Path_18915" data-name="Path 18915" d="M130.687,234.1a7.439,7.439,0,0,0-12.091,0,13.409,13.409,0,0,0-1.969,6.19.845.845,0,0,0,1.681.176c.533-5.161,2.665-7.776,6.334-7.776s5.8,2.615,6.334,7.776a.848.848,0,0,0,.84.759.413.413,0,0,0,.088-.006.845.845,0,0,0,.753-.928A13.385,13.385,0,0,0,130.687,234.1Z" transform="translate(-109.308 -216.513)" fill="#b5b3b3" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className='text-center'>
                            <button className='ui button bg-primary text-white fw-400 fs-7'>Submit</button>
                            <p className='fs-8 mt-3'>Already having an account? <Button onClick={() => navigate('/login')} className='text-decoration-underline bg-transparent fs-8 fw-400 p-0 text-primary'
                            >Sign in</Button></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword