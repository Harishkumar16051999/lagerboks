import React from 'react';
import { Checkbox, Button } from 'semantic-ui-react';

const SigninForm = (props) => {
    return (
        <div className='ui form py-2 px-4 px-sm-2'>
            <div className='field mb-3'>
                <label className='fw-400 mb-1'>First Name<i className='error'>*</i></label>
                <div className="ui input w-100 position-relative">
                    <input className='pl-6' type="text" placeholder="Enter First Name" />
                    <svg className="position-absolute field-icon l-1 t-1" id="user-svgrepo-com" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 30.667 30.667">
                        <g id="Group_6355" data-name="Group 6355">
                            <path id="Path_18913" data-name="Path 18913" d="M26.176,4.49A15.334,15.334,0,0,0,4.49,26.176,15.334,15.334,0,0,0,26.176,4.49ZM15.333,28.973a13.64,13.64,0,1,1,13.64-13.64A13.658,13.658,0,0,1,15.333,28.973Z" fill="#b5b3b3" />
                            <path id="Path_18914" data-name="Path 18914" d="M184.889,83.883a3.992,3.992,0,1,0-3.989-3.995A3.995,3.995,0,0,0,184.889,83.883Zm0-6.29a2.3,2.3,0,1,1-2.3,2.3A2.3,2.3,0,0,1,184.889,77.593Z" transform="translate(-169.555 -71.14)" fill="#b5b3b3" />
                            <path id="Path_18915" data-name="Path 18915" d="M130.687,234.1a7.439,7.439,0,0,0-12.091,0,13.409,13.409,0,0,0-1.969,6.19.845.845,0,0,0,1.681.176c.533-5.161,2.665-7.776,6.334-7.776s5.8,2.615,6.334,7.776a.848.848,0,0,0,.84.759.413.413,0,0,0,.088-.006.845.845,0,0,0,.753-.928A13.385,13.385,0,0,0,130.687,234.1Z" transform="translate(-109.308 -216.513)" fill="#b5b3b3" />
                        </g>
                    </svg>
                </div>
            </div>
            <div className='field mb-3'>
                <label className='fw-400 mb-1'>Password<i className='error'>*</i></label>
                <div className="ui input w-100 position-relative">
                    <input className='pl-6' type="password" placeholder="Password" />
                    <svg className="position-absolute l-1 t-1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 22.036 32">
                        <g id="password-svgrepo-com" transform="translate(-31.62)" opacity="0.21">
                            <path id="Path_18916" data-name="Path 18916" d="M50.9,11.539h-.521v-3.8a7.739,7.739,0,0,0-15.479,0v3.8h-.522A2.761,2.761,0,0,0,31.62,14.3V29.243A2.761,2.761,0,0,0,34.377,32H50.9a2.761,2.761,0,0,0,2.757-2.757V14.3A2.76,2.76,0,0,0,50.9,11.539Zm-13.636-3.8a5.376,5.376,0,0,1,10.752,0v3.8H37.262Zm14.03,21.5a.4.4,0,0,1-.394.394H34.377a.4.4,0,0,1-.394-.394V14.3a.4.4,0,0,1,.394-.394H50.9a.4.4,0,0,1,.394.394Z" />
                            <path id="Path_18917" data-name="Path 18917" d="M95.229,116.309a1.182,1.182,0,0,0-1.182,1.182v4.524a1.182,1.182,0,1,0,2.363,0v-4.524A1.182,1.182,0,0,0,95.229,116.309Z" transform="translate(-52.591 -97.983)" />
                        </g>
                    </svg>
                </div>
            </div>
            <div className='text-center'>
                <div className="remember-div d-flex justify-content-between mb-3 flex-wrap">
                    <Checkbox className='fs-8 mr-3 mb-sm-1' label='Remember me' />
                    <p className='fs-8 text-decoration-underline'><a href="/">Forget your password?</a></p>
                </div>
                <button className='ui button bg-primary text-white fw-400 fs-7 w-100 py-2'>Login</button>
                <p className='fs-8 mt-3'>Don't have an account? <Button className='bg-transparent fs-8 fw-400 p-0 text-primary' onClick={props.onClick}
              value={props.value}>Signup Now</Button></p>
            </div>
        </div>
    )
}

export default SigninForm