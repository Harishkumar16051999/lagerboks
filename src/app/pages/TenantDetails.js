import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import PreBookingBreadcrumb from "../components/prebooking breadcrumb/PreBookingBreadcrumb"
import { Dropdown, Checkbox, Input, Modal, Image } from 'semantic-ui-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import countriecodes from "../components/CountryCode";

const TenantDetails = () => {
    const navigate = useNavigate();
    const signandpayment = (e) => {
        e.preventDefault()
        navigate('/SignandPayment');
    }
    const [applyDiscountModal, SetApplyDiscountModal] = useState({
        open: false,
        dimmer: undefined,
    })
    const [creditCheckModal, SetCreditCheckModal] = useState({
        open: false,
        dimmer: undefined,
    })
    const [creditScoreModal, SetCreditScoreModal] = useState({
        open: false,
        dimmer: undefined,
    })
    const [alreadyUser, setAlreadyUser] = useState(false);
    const alreadyUserHandler = () => {
        setAlreadyUser(true);
    }
    const [creditStatus, SetCreditStatus] = useState(false);
    const proceedCreditCheck = (e) => {
        e.preventDefault();
        SetCreditStatus(true);
    }
    const invoicePeriodOptions = [
        {
            key: 1,
            text: 'Personal User',
            value: 'Personal User'
        },
        {
            key: 2,
            text: 'Business User',
            value: 'Business User',
        },
    ]
    return (
        <div className='tenantDetails-wrapper'>
            <div className='ui container fluid'>
                <div className='tenantDetails-banner'>
                    <PreBookingBreadcrumb activeStep='12' />
                </div>
                <div className='row'>
                    <div className='col-lg-8 col-md-8 col-sm-12'>
                        <div className='bg-white card-boxshadow py-4 px-3'>
                            <div className='card-border border-radius-5 p-3 p-sm-2 mb-4'>
                                <h3 className='fs-6 fw-600 mb-3'>SELECT YOUR RENTING DETAILS</h3>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-6 col-sm-12 pr-2 pr-sm-0'>
                                        <div className='field w-100 datePicker mb-2'>
                                            <label className='mb-1 d-block'>Move In Date<i className='error'>*</i></label>
                                            <SemanticDatepicker placeholder='Move In Date' className='w-100' />
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <div className='field mb-2'>
                                            <label className='mb-1 d-block'>Invoice Period<i className='error'>*</i></label>
                                            <Dropdown className='mb-sm-2' placeholder="Invoice Period" clearable fluid search selection options={invoicePeriodOptions} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {!alreadyUser && <div className='tenantDetails-form-wrapper'>
                                <div className='mb-3'>
                                    <div className='d-flex justify-content-between flex-wrap mb-4'>
                                        <h2 className='fs-4 fw-600 mb-sm-1'>CREATE ACCOUNT</h2>
                                        <p onClick={alreadyUserHandler} className='cursor-pointer text-decoration-underline text-primary'>Already a Customer? Sign-in</p>
                                    </div>
                                    <div className='mb-4'>
                                        <h5 className='sub-title fw-600 mb-2 d-inline-block'>TENANT DETAILS</h5>
                                        <div className='my-1'>
                                            <Checkbox className='fs-7 mr-3' label='Personal' />
                                            <Checkbox className='fs-7' label='Business' />
                                        </div>
                                    </div>
                                    <div className='ui form w-100'>
                                        <div className='row'>
                                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                                <div className='field pr-3 pr-md-1 pr-sm-0 mb-4'>
                                                    <label className='fw-400 mb-1'>First Name<i className='error'>*</i></label>
                                                    <input type="text" placeholder='First Name' />
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                                <div className='field pl-3 pl-md-1 pl-sm-0 mb-4'>
                                                    <label className='fw-400 mb-1'>Last Name<i className='error'>*</i></label>
                                                    <input type="text" placeholder='Last Name' />
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                                <div className='field pr-3 pr-md-1 pr-sm-0 mb-4'>
                                                    <label className='fw-400 mb-1'>Email<i className='error'>*</i></label>
                                                    <input type="text" placeholder='Email' />
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                                <div className='field pl-3 pl-md-1 pl-sm-0 mb-4'>
                                                    <label className='fw-400 mb-1'>Phone Number<i className='error'>*</i></label>
                                                    <Input className="noCounterNumber w-100" type="number" placeholder="Phone Number"
                                                        label={<Dropdown defaultValue='+91' search options={countriecodes} />}
                                                        labelPosition='left' />
                                                </div>
                                            </div>

                                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                                <div className='field pr-3 pr-md-1 pr-sm-0 mb-4'>
                                                    <label className='fw-400 mb-1'>Company Name</label>
                                                    <input type="text" placeholder='Company Name' />
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                                <div className='field pl-3 pl-md-1 pl-sm-0 mb-4'>
                                                    <label className='fw-400 mb-1'>Company registration No<i className='error'>*</i></label>
                                                    <input type="text" placeholder='Company registration No' />
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                                <div className='field pr-3 pr-md-1 pr-sm-0 mb-4'>
                                                    <label className='fw-400 mb-1'>Gate Access Code<i className='error'>*</i></label>
                                                    <input type="text" placeholder='Gate Access Code' />
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                                <div className='field pl-3 pl-md-1 pl-sm-0 mb-4'>
                                                    <label className='fw-400 mb-1'>Password<i className='error'>*</i></label>
                                                    <input type="text" placeholder='Password' />
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                                <div className='field pr-3 pr-md-1 pr-sm-0 mb-4'>
                                                    <label className='fw-400 mb-1'>Confirm Password<i className='error'>*</i></label>
                                                    <input type="text" placeholder='Confirm Password' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-3'>
                                    <div className='mb-2'>
                                        <h5 className='sub-title fs-6 fw-600 mb-2 d-inline-block'>ADDRESS DETAILS</h5>
                                    </div>
                                    <div className='ui form w-100'>
                                        <div className='row'>
                                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                                <div className='field pr-3 pr-md-1 pr-sm-0 mb-4'>
                                                    <label className='fw-400 mb-1'>Address Line 1</label>
                                                    <input type="text" placeholder='Address Line 1' />
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                                <div className='field pl-3 pl-md-1 pl-sm-0 mb-4'>
                                                    <label className='fw-400 mb-1'>Address Line 2</label>
                                                    <input type="text" placeholder='Address Line 2' />
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                                <div className='field pr-3 pr-md-1 pr-sm-0 mb-4'>
                                                    <label className='fw-400 mb-1'>City</label>
                                                    <input type="text" placeholder='City' />
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                                <div className='field pl-3 pl-md-1 pl-sm-0 mb-4'>
                                                    <label className='fw-400 mb-1'>State/Provine</label>
                                                    <input type="text" placeholder='State/Provine' />
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                                <div className='field pr-3 pr-md-1 pr-sm-0 mb-1'>
                                                    <label className='fw-400 mb-1'>Zip/Postal Code</label>
                                                    <input type="text" placeholder='Zip/Postal Code' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex mb-4 justify-content-between flex-wrap bg-primary-light p-1 border-success-dark-1 border-radius-5">
                                    <p class="d-flex align-items-center">
                                        <img src="/assets/images/credit-score.svg" alt="Esign" /><span class="ml-1">Great! Your credit score has been checked successfully</span>
                                    </p>
                                    <button onClick={() => SetCreditScoreModal({ open: true, dimmer: 'blurring' })} class="ui button border-success-dark-1 text-success-dark p-1 bg-white fs-7 fw-400 text-dark px-2 px-sm-1 mr-2 mt-md-1">View Score</button>
                                </div>
                                <div class="text-center my-2">
                                    <button onClick={() => navigate('/order')} class="ui button bg-white border-success-dark-light-1 text-dark fs-7 fw-400 px-5 mx-1 mb-1 mb-sm-1 px-sm-2">BACK</button>
                                    <button onClick={() => SetCreditCheckModal({ open: true, dimmer: 'blurring' })} class="ui button bg-success-dark text-white fs-7 fw-400 px-5 mx-1 mb-1 mb-sm-1 px-sm-3">NEXT</button>
                                </div>
                            </div>}
                            {alreadyUser && <div className='tenantDetails-signin-wrapper'>
                                <div className="postloginform-inputs bg-white">
                                    <div className="form-title">
                                        <h2 className="text-success fs-4 fw-500">SIGN-IN TO YOUR ACCOUNT</h2>
                                    </div>
                                    <form>
                                        <div className="form-control mb-4">
                                            <label className="d-block fs-7 fw-400 mb-1">First Name<i className='error'>*</i></label>
                                            <div className="ui input w-100 position-relative">
                                                <input type="text" placeholder="Enter Name" />
                                                <svg className="position-absolute l-1 t-1" id="user-svgrepo-com" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 30.667 30.667">
                                                    <g id="Group_6355" data-name="Group 6355">
                                                        <path id="Path_18913" data-name="Path 18913" d="M26.176,4.49A15.334,15.334,0,0,0,4.49,26.176,15.334,15.334,0,0,0,26.176,4.49ZM15.333,28.973a13.64,13.64,0,1,1,13.64-13.64A13.658,13.658,0,0,1,15.333,28.973Z" fill="#b5b3b3" />
                                                        <path id="Path_18914" data-name="Path 18914" d="M184.889,83.883a3.992,3.992,0,1,0-3.989-3.995A3.995,3.995,0,0,0,184.889,83.883Zm0-6.29a2.3,2.3,0,1,1-2.3,2.3A2.3,2.3,0,0,1,184.889,77.593Z" transform="translate(-169.555 -71.14)" fill="#b5b3b3" />
                                                        <path id="Path_18915" data-name="Path 18915" d="M130.687,234.1a7.439,7.439,0,0,0-12.091,0,13.409,13.409,0,0,0-1.969,6.19.845.845,0,0,0,1.681.176c.533-5.161,2.665-7.776,6.334-7.776s5.8,2.615,6.334,7.776a.848.848,0,0,0,.84.759.413.413,0,0,0,.088-.006.845.845,0,0,0,.753-.928A13.385,13.385,0,0,0,130.687,234.1Z" transform="translate(-109.308 -216.513)" fill="#b5b3b3" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="form-control mb-4">
                                            <label className="d-block fs-7 fw-400 mb-1">Password<i className='error'>*</i></label>
                                            <div className="ui input w-100 position-relative">
                                                <input type="password" placeholder="Enter Password" />
                                                <svg className="position-absolute l-1 t-1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 22.036 32">
                                                    <g id="password-svgrepo-com" transform="translate(-31.62)" opacity="0.21">
                                                        <path id="Path_18916" data-name="Path 18916" d="M50.9,11.539h-.521v-3.8a7.739,7.739,0,0,0-15.479,0v3.8h-.522A2.761,2.761,0,0,0,31.62,14.3V29.243A2.761,2.761,0,0,0,34.377,32H50.9a2.761,2.761,0,0,0,2.757-2.757V14.3A2.76,2.76,0,0,0,50.9,11.539Zm-13.636-3.8a5.376,5.376,0,0,1,10.752,0v3.8H37.262Zm14.03,21.5a.4.4,0,0,1-.394.394H34.377a.4.4,0,0,1-.394-.394V14.3a.4.4,0,0,1,.394-.394H50.9a.4.4,0,0,1,.394.394Z" />
                                                        <path id="Path_18917" data-name="Path 18917" d="M95.229,116.309a1.182,1.182,0,0,0-1.182,1.182v4.524a1.182,1.182,0,1,0,2.363,0v-4.524A1.182,1.182,0,0,0,95.229,116.309Z" transform="translate(-52.591 -97.983)" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="remember-div d-flex justify-content-between flex-wrap">
                                            <Checkbox className='fs-8 mr-3 mb-sm-1' label='Remember me' />
                                            <p><a href="/">Forget your password?</a></p>
                                        </div>
                                        <button className="ui button w-100 fw-100 fs-7 fw-500">Sign In</button>
                                    </form>
                                    <div className="signup-div text-center">
                                        <p>Don't have an account? <Link to={'/signup'}>Signup Now</Link></p>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div className='px-0 py-2 border-radius-15'>
                            <h6 className='text-dark fw-600 fs-6 px-4 pt-2 mb-1 px-sm-2'>TOTAL AMOUNT</h6>
                            <p className='px-4 mb-2 px-sm-2 fw-400 text-light-gray'>Please see the breakdown below</p>
                            <div className='px-4 px-md-2 px-sm-1'>
                                <div className="py-2 card-border-top mb-2">
                                    <div className="content">
                                        <div className='mb-2 d-flex justify-content-between text-light-gray fw-500 px-1'>
                                            <span>Storage Unit-5'x10'</span><span>$90</span>
                                        </div>
                                        <div className='mb-2 card-border-bottom-dashed pb-1 d-flex justify-content-between text-light-gray fw-500 px-1'>
                                            <span>NB HST (15%)</span><span >$14.25</span>
                                        </div>
                                        <p></p>
                                        <div className="field w-100 datePicker mt-3 mb-2 px-1">
                                            <label className='fs-6 fw-500'>Promo Code</label>
                                            <div className='row mt-1'>
                                                <div className='col-6'>
                                                    <p className='d-flex align-items-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24.631 24.637">
                                                            <path id="tick" d="M-81.811-487.2h-1.443a1.331,1.331,0,0,0-.186-.04,11.727,11.727,0,0,1-5.374-1.695,12.155,12.155,0,0,1-5.844-8.462c-.086-.461-.129-.931-.192-1.4v-1.443c.015-.085.032-.17.045-.256.076-.529.121-1.067.234-1.59A11.963,11.963,0,0,1-90-509.286a11.957,11.957,0,0,1,10.054-2.258A11.885,11.885,0,0,1-72.774-507a11.977,11.977,0,0,1,2.491,8.722,11.9,11.9,0,0,1-3,6.884,12.1,12.1,0,0,1-7.124,4.007C-80.874-487.306-81.343-487.26-81.811-487.2Zm-2.642-10.284c-.453-.418-.906-.83-1.354-1.238-.679-.621-1.345-1.263-2.053-1.852a1.178,1.178,0,0,0-1.878.633,1.271,1.271,0,0,0,.445,1.314q2,1.812,3.984,3.624a1.231,1.231,0,0,0,1.887-.047q3.828-3.792,7.651-7.589a2.755,2.755,0,0,0,.2-.211,1.23,1.23,0,0,0,.269-1.01,1.23,1.23,0,0,0-.606-.852,1.244,1.244,0,0,0-1.585.286q-3.378,3.372-6.753,6.75c-.061.061-.125.12-.2.192Z" transform="translate(94.85 511.833)" fill="#67c84e" />
                                                        </svg>
                                                        <span className='ml-1'>MONTH20 applied</span>
                                                    </p>
                                                </div>
                                                <div className='col-6 text-right'>
                                                    <p><span>$14.25</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row pb-1 mb-2 px-1 card-border-bottom-dashed'>
                                            <div className='col-6'>
                                                <p className='text-success'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 22 22.938">
                                                        <g id="offer" transform="translate(-0.012 -0.021)">
                                                            <path id="Path_16041" data-name="Path 16041" d="M11.235,22.959h-.448A2.634,2.634,0,0,1,9.309,22.1c-.338-.348-.7-.674-1.044-1.014a.752.752,0,0,0-.674-.22c-.568.083-1.138.159-1.706.247A2,2,0,0,1,3.47,19.438q-.17-.844-.3-1.7a.893.893,0,0,0-.521-.725c-.507-.252-1.006-.523-1.5-.793a2,2,0,0,1-.9-2.763c.25-.525.5-1.048.768-1.566a.834.834,0,0,0,0-.811C.754,10.572.5,10.055.256,9.537a2.008,2.008,0,0,1,.915-2.793c.506-.272,1.011-.545,1.523-.805a.832.832,0,0,0,.472-.66q.133-.828.283-1.653A2,2,0,0,1,5.8,1.864c.571.065,1.139.151,1.706.244A.844.844,0,0,0,8.3,1.863c.411-.412.834-.814,1.255-1.216a2,2,0,0,1,2.906,0q.648.619,1.288,1.246a.772.772,0,0,0,.695.224c.568-.084,1.137-.163,1.705-.249a2,2,0,0,1,2.4,1.669c.116.569.212,1.144.3,1.719a.864.864,0,0,0,.495.693c.5.25.99.521,1.483.784a2.013,2.013,0,0,1,.919,2.842c-.241.5-.478.995-.73,1.485a.865.865,0,0,0,0,.852c.261.511.511,1.028.758,1.546a2,2,0,0,1-.9,2.764c-.511.278-1.024.553-1.543.815a.834.834,0,0,0-.476.657c-.089.552-.185,1.1-.283,1.653A2.009,2.009,0,0,1,16.2,21.115c-.57-.07-1.139-.153-1.706-.245a.827.827,0,0,0-.774.242c-.332.334-.684.646-1.011.984a2.631,2.631,0,0,1-1.477.862Zm4.851-15.8a.739.739,0,0,0-.72-.693.759.759,0,0,0-.541.275L6.258,15.307a1.225,1.225,0,0,0-.149.166.658.658,0,0,0,.525,1.038.793.793,0,0,0,.6-.306q3.775-3.778,7.552-7.553c.338-.338.684-.667,1.009-1.017a2.8,2.8,0,0,0,.295-.476ZM13.65,12.6A2.423,2.423,0,1,0,16.079,15,2.42,2.42,0,0,0,13.65,12.6ZM8.372,10.382A2.424,2.424,0,1,0,5.944,7.974a2.424,2.424,0,0,0,2.429,2.408Z" transform="translate(0 0)" fill="#67be5c" />
                                                            <path id="Path_16042" data-name="Path 16042" d="M224.734,249.857a1.093,1.093,0,0,1-1.106-1.082,1.1,1.1,0,1,1,2.2-.015A1.1,1.1,0,0,1,224.734,249.857Z" transform="translate(-211.069 -233.745)" fill="#67be5c" />
                                                            <path id="Path_16043" data-name="Path 16043" d="M131.451,123.107a1.1,1.1,0,1,1-2.2.006,1.1,1.1,0,0,1,2.2-.006Z" transform="translate(-121.987 -115.154)" fill="#67be5c" />
                                                        </g>
                                                    </svg>
                                                    <span className='veritical-align-text-bottom ml-1 cursor-pointer' onClick={() => SetApplyDiscountModal({ open: true, dimmer: 'blurring' })}>Use Promocode</span></p>
                                            </div>
                                            <div className='col-6 text-right'>
                                                <p className='error cursor-pointer' onClick={() => SetApplyDiscountModal({ open: true, dimmer: 'blurring' })}>Change</p>
                                            </div>
                                        </div>
                                        <div className='fw-600 d-flex justify-content-between px-1'>
                                            <span>Total</span><span >$134.25</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    dimmer={applyDiscountModal.dimmer}
                    open={applyDiscountModal.open}
                    onClose={() => SetApplyDiscountModal({ open: false })}
                >
                    <Modal.Header className='bg-success-dark text-white text-center fs-6 py-2 fw-400 position-relative'>PROMO CODES
                        <svg onClick={() => SetApplyDiscountModal({ open: false })} className='r-3 cursor-pointer position-absolute' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 17.473 17.47">
                            <path id="wrong-5" d="M978.609-438.353l-2.052-2.043-4.37-4.366a1.33,1.33,0,0,1-.4-1.425,1.3,1.3,0,0,1,.833-.843,1.3,1.3,0,0,1,1.171.183,3.019,3.019,0,0,1,.353.321q3.009,3,6.009,6.01c.088.088.159.193.254.309.127-.118.217-.2.3-.281l6.156-6.156a1.332,1.332,0,0,1,1.325-.431,1.3,1.3,0,0,1,.927.828,1.3,1.3,0,0,1-.188,1.228,3.412,3.412,0,0,1-.325.35q-3,3.009-6.011,6.009a3.233,3.233,0,0,1-.317.244c.132.14.213.23.3.316q3.052,3.053,6.108,6.1a1.36,1.36,0,0,1,.441,1.387,1.305,1.305,0,0,1-2.205.564c-.59-.568-1.163-1.157-1.74-1.736l-4.487-4.491a2.068,2.068,0,0,1-.183-.248l-.142-.051a1.52,1.52,0,0,1-.191.325q-3.047,3.059-6.1,6.111a1.341,1.341,0,0,1-1.45.419,1.3,1.3,0,0,1-.851-.866,1.3,1.3,0,0,1,.235-1.19,3.215,3.215,0,0,1,.257-.274l6.034-6.033C978.386-438.167,978.484-438.245,978.609-438.353Z" transform="translate(-971.716 447.116)" fill="#fff" />
                        </svg>
                    </Modal.Header>
                    <Modal.Content className='mh-400 overflow-y-auto'>
                        <div className='row'>
                            <div className='col-12 col-md-6 mb-3 px-1'>
                                <div className='card-border-secondary-dashed p-2 border-radius-10'>
                                    <div className='row'>
                                        <div className='col-sm-12 col-md-9 mb-1'>
                                            <h5 className='fw-600 mb-1'>50% OFF 2 MONTHS</h5>
                                            <p className='fs-7'>Lorem Ipsum has been the industry's</p>
                                        </div>
                                        <div className='col-sm-12 col-md-3 d-flex align-items-center justify-content-center'>
                                            <button className="ui button text-success bg-white border-success-1  fs-7 fw-400 py-1 px-3">Apply</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Modal.Content>
                </Modal>
                <Modal
                    dimmer={creditCheckModal.dimmer}
                    open={creditCheckModal.open}
                    size='tiny'
                    onClose={() => SetCreditCheckModal({ open: false })}
                >
                    <Modal.Header className='header text-success-dark text-center fw-601 fs-5 border-0 pb-1'>CREDIT CHECK</Modal.Header>
                    <Modal.Content className='mh-400 overflow-y-auto text-center pt-2'>
                        <div className="d-flex justify-content-center mb-2">
                            <Image width='250' src={!creditStatus ? `/assets/images/AAA-Check.png` : '/assets/images/AA.png'} alt='CreditCheck' />
                        </div>
                        {!creditStatus &&
                            <>
                                <div className="mb-3">
                                    As part of the move-in process, we need to verify your credit score, would you like to proceed for a credit check?
                                </div>
                                <div className="">
                                    <button onClick={() => SetCreditCheckModal({ open: false })} className="ui button bg-secondary  fs-7 fw-400 text-white px-5 mr-1">Cancel</button>
                                    <button onClick={(e) => proceedCreditCheck(e)} className="ui button bg-success-dark   fs-7 fw-400 text-white px-5">Proceed</button>
                                </div>
                            </>
                        }
                        {creditStatus && <>
                            <div className="mb-3">
                                Congratulations! You have sufficient credit score to proceed further with us
                            </div>
                            <div>
                                <button onClick={signandpayment} className="ui button bg-secondary  fs-7 fw-400 text-white px-5">Continue</button>
                            </div>
                        </>
                        }
                    </Modal.Content>
                </Modal>
                <Modal
                    dimmer={creditScoreModal.dimmer}
                    open={creditScoreModal.open}
                    size='tiny'
                    onClose={() => SetCreditScoreModal({ open: false })}
                >
                    <Modal.Header className='header text-success-dark text-center fw-601 fs-5 border-0 pb-1 position-relative'>CREDIT SCORE CHECK
                        <svg onClick={() => SetCreditScoreModal({ open: false })} className='r-3 cursor-pointer position-absolute' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 17.473 17.47">
                            <path id="wrong-5" d="M978.609-438.353l-2.052-2.043-4.37-4.366a1.33,1.33,0,0,1-.4-1.425,1.3,1.3,0,0,1,.833-.843,1.3,1.3,0,0,1,1.171.183,3.019,3.019,0,0,1,.353.321q3.009,3,6.009,6.01c.088.088.159.193.254.309.127-.118.217-.2.3-.281l6.156-6.156a1.332,1.332,0,0,1,1.325-.431,1.3,1.3,0,0,1,.927.828,1.3,1.3,0,0,1-.188,1.228,3.412,3.412,0,0,1-.325.35q-3,3.009-6.011,6.009a3.233,3.233,0,0,1-.317.244c.132.14.213.23.3.316q3.052,3.053,6.108,6.1a1.36,1.36,0,0,1,.441,1.387,1.305,1.305,0,0,1-2.205.564c-.59-.568-1.163-1.157-1.74-1.736l-4.487-4.491a2.068,2.068,0,0,1-.183-.248l-.142-.051a1.52,1.52,0,0,1-.191.325q-3.047,3.059-6.1,6.111a1.341,1.341,0,0,1-1.45.419,1.3,1.3,0,0,1-.851-.866,1.3,1.3,0,0,1,.235-1.19,3.215,3.215,0,0,1,.257-.274l6.034-6.033C978.386-438.167,978.484-438.245,978.609-438.353Z" transform="translate(-971.716 447.116)" fill="#000000" />
                        </svg>
                    </Modal.Header>
                    <Modal.Content className='mh-400 overflow-y-auto text-center pt-2'>
                        <div className="d-flex justify-content-center mb-2">
                            <Image width='250' src="/assets/images/AAA-Check.png" alt='CreditScore' />
                        </div>
                        <>
                            <div className="mb-3 error">
                                Oops! The customer cannot complete the move-in with this credit score
                            </div>
                            <div className="">
                                <button onClick={() => SetCreditScoreModal({ open: false })} className="ui button bg-danger-light fs-7 fw-400 text-white px-5 mr-1 mb-sm-1">Cancel Move-In</button>
                                <button className="ui button bg-green fs-7 fw-400 text-white px-5 mb-sm-1">Contact Us</button>
                            </div>
                        </>

                    </Modal.Content>
                </Modal>
            </div>
        </div>
    )
}

export default TenantDetails