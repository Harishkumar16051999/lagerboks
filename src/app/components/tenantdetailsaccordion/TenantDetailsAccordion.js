import React, { Component } from 'react'
import { Accordion } from 'semantic-ui-react'

export default class TenantDetailsAccordion extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return (
            <Accordion className='bg-transparent overflow-hidden border-radius-10 mx-2 my-2 mx-sm-2'>
                <Accordion.Title
                    className='fs-7 fw-600 bg-white py-2 px-2 card-border-bottom d-none'
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                >
                    <div className='d-flex justify-content-between align-items-center'>
                        <p>ORDER SUMMARY</p>
                        <img style={{ height: '1rem', width: '1rem', objectFit: 'contain' }} width='15' height="15" src='/assets/images/arrow-down.png' alt='Down Arrow' />
                    </div>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <div className='px-0 py-2'>
                        <h6 className='text-dark fw-600 fs-6 px-2 mb-1 px-sm-2'>TOTAL AMOUNT</h6>
                        <p className='px-2 mb-2 px-sm-2 fw-400 text-light-gray'>Please see the breakdown below</p>
                        <div className='px-2 px-md-2 px-sm-1'>
                            <div className="py-2 card-border-top">
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
                                                <span className='veritical-align-text-bottom ml-1 cursor-pointer' onClick={this.props.discountModal}>Use Promocode</span></p>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <p className='error cursor-pointer' onClick={this.props.discountModal}>Change</p>
                                        </div>
                                    </div>
                                    <div className='fw-600 d-flex justify-content-between px-1'>
                                        <span>Total</span><span >$134.25</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Accordion.Content>
            </Accordion>
        )
    }
}