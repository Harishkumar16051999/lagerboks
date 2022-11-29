import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Checkbox } from 'semantic-ui-react';
import PreBookingBreadcrumb from '../components/prebooking breadcrumb/PreBookingBreadcrumb';
import UnitsDetailsAccordion from '../components/unitsdetailsaccordion/UnitsDetailsAccordion';

const SignandPayment = () => {
    const navigate = useNavigate();
    const [showbankdiv, setShowBanDiv] = useState(false);
    const bankDivshowHanlder = () => {
        setShowBanDiv(!showbankdiv)
    }
    return (
        <div className='signandpayment-wrapper'>
            <div className='ui container fluid'>
                <div className='signandpayment-banner'>
                    <PreBookingBreadcrumb activeStep='123' />
                </div>
                <div className='row reverse-sm'>
                    <div className='col-lg-8 col-md-8 col-sm-12'>
                        <div className='bg-white card-boxshadow py-4 px-3 px-sm-2'>
                            <h5 className='sub-title fs-6 fw-600 mb-2 d-inline-block mb-4'>RENTAL AGREEMENT</h5>
                            <div className='bg-white card-boxShadow border-radius-15 mb-3'>
                                <div className='p-3 px-sm-1'>
                                    <div className='card-bg-secondary w-100 px-2 py-2'>
                                        <iframe className='w-100' height="400" title='Documents' />
                                        <div className="text-center mt-4">
                                            <button className="ui button bg-white text-success-dark border-success-dark-1 fs-7 fw-400 text-dark px-5 mr-2 mb-sm-1 mr-sm-0">Preview</button>
                                            <button className="ui button bg-white text-success-dark border-success-dark-1 fs-7 fw-400 text-dark px-5 mr-sm-0">Download</button>
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col-lg-6 col-md-12 col-sm-12'>
                                            <div className='card-border border-radius-5 mr-2 mr-md-0 mb-md-1'>
                                                <h6 className='card-bg-secondary p-2 text-success-dark fs-6'>INITIATOR</h6>
                                                <div className='py-2 px-1'>
                                                    <p className='fw-600 fs-6 mb-1'>Fountainlakestorage</p>
                                                    <p>Non Signatory Party</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-sm-12'>
                                            <div className='card-border border-radius-5 ml-2 ml-md-0'>
                                                <h6 className='card-bg-secondary p-2 text-success-dark fs-6'>SIGNING PARTY</h6>
                                                <div className='py-2 px-1'>
                                                    <p className='fw-600 fs-6 mb-1'>Karthick Ram</p>
                                                    <p>Signatory Party</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pt-1'>
                                            <div className='mt-2 mb-3'>
                                                <Checkbox onClick={bankDivshowHanlder} className='fs-7 mr-3' label='I have read and understood the contents of the documents listed and I am ready to sign' />
                                            </div>
                                            <div className='d-flex justify-content-between flex-wrap bg-primary-light p-1 border-success-dark-1 border-radius-5'>
                                                <p className='d-flex align-items-center'><img src='/assets/images/esign.svg' alt='Esign' /><span className='ml-1'>Great! You have successfully signed the documents</span></p>
                                                <button onClick={() => navigate('/viewDocuments')} className="ui button text-success-dark bg-white border-success-dark-1 fs-7 fw-400 text-dark px-2 px-sm-1 mr-2 mt-md-1">View Document</button>
                                            </div>
                                            <div className='pt-4 d-flex justify-content-center flex-wrap'>
                                                <button onClick={() => navigate('/linkExpired')} className="ui button bg-success-dark d-flex align-items-center border-radius-5 fs-6 fw-100 text-white px-5 px-md-2 mb-sm-1"><img src='/assets/images/executed-payment.svg' alt='Pay Now' /><span className='ml-1 fs-6 fw-400'>Pay Now</span></button>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            {showbankdiv && 
                            <div className='bg-white showbankid-div card-boxShadow border-radius-15'>
                                <div className='mt-1'>
                                        <h5 className='fw-600 dashed-bottom text-center px-3 py-1'>
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <img src="/assets/images/bankid.png" alt="Norwegian BankID" />
                                                <p className='ml-1'>Sign with Norweigan BankID</p>
                                            </div>
                                        </h5>
                                    <div className='py-4 px-3'>
                                        <p>Karthick Ram, you will sign with a Norwegian BankID. Once you have signed, your signature will be registered by the e-signature service Signicat.</p>
                                        <div className='text-center my-2'>
                                            <button onClick={() => navigate('/successfulMovein')} className='ui button bg-primary fs-7 text-white fw-400 px-4'>SIGN</button>
                                         </div>   
                                    </div>
                                </div>
                            </div>
                            }
                            <div className='pt-4 text-center'>
                                <button onClick={() => navigate('/tenantDetails')} className="ui button bg-white border-success-dark-light-1 text-dark fs-7 fw-400 px-5 mx-1 mb-1 mb-sm-1 px-sm-2">BACK</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 accordUnits'>
                        <div className='mx-2 my-3 mx-sm-0'>
                            <div className='card-border mb-3 bg-white border-radius-10 mx-sm-2'>
                            <UnitsDetailsAccordion />
                            </div>
                            <div className='bg-white card-boxShadow px-0 py-2 mx-sm-2 border-radius-10 border-top-success-4'>
                                <div className='row date-div'>
                                    <div className='col-lg-6 col-md-12 col-sm-12 mb-1 px-2'>
                                        <div className='card-border-primary text-center p-1'>
                                            <p>Your move in date</p>
                                            <p className='fw-500 fs-8 text-primary'>25 August, 2022</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-12 mb-1 px-2'>
                                        <div className='card-border-primary text-center p-1'>
                                            <p>Billing Period</p>
                                            <p className='fw-500 fs-8 text-primary'>18-06-2021 to 17-06-2022</p>
                                        </div>
                                    </div>
                                </div>
                                <h6 className='text-dark fw-500 fs-6 px-2 pt-2 mb-1 px-sm-2'>Recurring charges</h6>
                                <p className='text-dark px-2 mb-2 px-sm-2'>This will be your recurring charges until you decide to move out.</p>
                                <div className='mt-2 card-border border-radius-5 py-2 m-2'>
                                    <h6 className='fw-600 fs-6 mb-1 px-2'>Total Amount</h6>
                                    <div className='d-flex justify-content-between dashed-bottom py-1 px-2'>
                                        <p>Storage Unit - 5'x10'</p>
                                        <p>$90</p>
                                    </div>
                                    <div className='d-flex justify-content-between dashed-bottom py-1 px-2'>
                                        <p>Protection Plan: Standard</p>
                                        <p>$5</p>
                                    </div>
                                    <div className='d-flex justify-content-between py-1 px-2'>
                                        <p>NB HST (15%)</p>
                                        <p>$14.25</p>
                                    </div>
                                    <div className='d-flex justify-content-between border-top pt-1 px-2'>
                                        <p className='fw-600'>Net Amount</p>
                                        <p className='fw-600'>$109.25</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignandPayment