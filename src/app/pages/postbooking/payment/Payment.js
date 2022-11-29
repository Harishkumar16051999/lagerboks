import React, { useState } from "react";
import { Image, Dropdown, Radio } from 'semantic-ui-react';

export default function Payment() {
  const [showcard, setShowCard] = useState(false);
  const [openAutopayDropdown, SetopenAutopayDropdown] = useState(false)
  const showCardHandler = () => {
    setShowCard(true);
  }
  const CreditFormHandler = () => {
    setShowCard(false);
  }
  const trigger = (
    <span>
      <Image avatar src="/assets/images/menu.svg" />
    </span>
  )
  const CardOptions = [
    { key: 'Make as primary', text: 'Make as primary', value: 'Make as primary', image: { src: '/assets/images/credit-cardd.svg' } },
    { key: 'Delete', text: 'Delete', value: 'Delete', image: { src: '/assets/images/delete.svg' }, },
  ]

  return (
    <div className="mx-2 mx-sm-1 wrapper my-2">
      <p className="my-1 p-1 text-right payment-alert-para"><span className="p-1 bg-white border-radius-5 payment-alert-msg d-inline-flex align-items-center"><svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 19.324 19.328">
        <path id="tick" d="M-84.794-492.834h-1.113a1.029,1.029,0,0,0-.143-.031,9.042,9.042,0,0,1-4.145-1.307A9.374,9.374,0,0,1-94.7-500.7c-.066-.356-.1-.718-.148-1.078v-1.113c.012-.066.024-.131.034-.2.058-.408.093-.823.18-1.226a9.225,9.225,0,0,1,3.526-5.557,9.221,9.221,0,0,1,7.753-1.741,9.165,9.165,0,0,1,5.531,3.5,9.237,9.237,0,0,1,1.921,6.726,9.174,9.174,0,0,1-2.317,5.309,9.328,9.328,0,0,1-5.494,3.09C-84.072-492.918-84.434-492.883-84.794-492.834Zm-2.038-7.931c-.349-.323-.7-.64-1.044-.955-.524-.479-1.037-.974-1.584-1.428a.908.908,0,0,0-1.449.488.98.98,0,0,0,.343,1.014q1.539,1.4,3.072,2.795a.949.949,0,0,0,1.456-.036q2.952-2.924,5.9-5.853a2.109,2.109,0,0,0,.152-.162.948.948,0,0,0,.207-.779.948.948,0,0,0-.467-.657.959.959,0,0,0-1.223.221q-2.6,2.6-5.208,5.206c-.047.047-.1.093-.154.148Z" transform="translate(103.768 510.431) rotate(-1)" fill="#34c28d" />
      </svg>The card is added for autopayment successfully</span></p>
      <div className="bg-white card-boxShadow border-radius-15 pb-2 mb-2 overflow-hidden">
        <div className="payment-tabs">
          <div className="row dashed-bottom px-4 py-2 px-sm-2">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h6 className="fs-6 fw-500"><svg id="credit_cardd" data-name="credit cardd" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 38.788 25.881">
                <path id="Path_19699" data-name="Path 19699" d="M0,3.544A10.1,10.1,0,0,1,.772,1.718,3.923,3.923,0,0,1,4.249,0Q9.476.006,14.7,0q9.9,0,19.807,0A4.03,4.03,0,0,1,38.57,2.795a4.5,4.5,0,0,1,.207,1.337q.02,8.808.007,17.614a4.038,4.038,0,0,1-4.16,4.128c-1.944.014-3.889,0-5.832,0H4.288A4.078,4.078,0,0,1,.2,23.061c-.078-.238-.133-.484-.2-.726Q0,12.938,0,3.544Zm1.61,7.8v.41q0,4.943,0,9.886a2.428,2.428,0,0,0,2.6,2.608q15.185,0,30.371,0a2.426,2.426,0,0,0,2.6-2.611q0-4.943,0-9.886c0-.133-.012-.265-.018-.408H1.61Zm.049-1.676H37.12V6.506H1.658ZM37.177,4.83V4.262a2.431,2.431,0,0,0-2.613-2.631q-15.185,0-30.37,0a2.519,2.519,0,0,0-2.533,3.2Z" transform="translate(0 0)" fill="#2cc5ff" />
                <path id="Path_19700" data-name="Path 19700" d="M277.977,146.972c0,.341.027.684-.005,1.022a2.345,2.345,0,0,1-2.072,2.131,11.533,11.533,0,0,1-2.227.011,2.343,2.343,0,0,1-2.14-2.381c-.012-.542-.011-1.086,0-1.628a2.351,2.351,0,0,1,2.171-2.393,11.375,11.375,0,0,1,2.227.021,2.354,2.354,0,0,1,2.053,2.308c.009.3,0,.606,0,.909Zm-3.22,1.571v0c.253,0,.5.006.757,0a.793.793,0,0,0,.855-.815c.022-.529.022-1.061,0-1.591a.778.778,0,0,0-.822-.806c-.542-.013-1.086-.014-1.628,0a.763.763,0,0,0-.774.771c-.018.554-.018,1.111,0,1.667a.772.772,0,0,0,.778.768c.277.014.555,0,.833,0Z" transform="translate(-244.049 -129.151)" fill="#2cc5ff" />
                <path id="Path_19701" data-name="Path 19701" d="M53.577,193.326q-2.289,0-4.579,0a1.906,1.906,0,0,1-.486-.052.793.793,0,0,1-.008-1.521,1.513,1.513,0,0,1,.41-.053q4.673,0,9.347,0c.584,0,.935.271.973.734.045.531-.316.888-.927.892-1.211.007-2.421,0-3.633,0Z" transform="translate(-43.089 -172.299)" fill="#2cc5ff" />
                <path id="Path_19702" data-name="Path 19702" d="M53.651,159.862c1.551,0,3.1,0,4.654,0a.88.88,0,0,1,.823.362.8.8,0,0,1-.645,1.245c-.3.02-.605.006-.908.006H49.063c-.113,0-.228.006-.34,0a.812.812,0,0,1-.766-.828.782.782,0,0,1,.777-.769c.605-.017,1.21-.008,1.816-.008h3.1Z" transform="translate(-43.104 -143.684)" fill="#2cc5ff" />
              </svg>
                {!showcard && <span className="veritical-align-text-top ml-1">Add New Card</span>}{showcard && <span className="veritical-align-text-top ml-1">Credit Card</span>}</h6>
            </div>
          </div>
          <div className="creditCardtab py-4 px-3 px-sm-1">
            {!showcard && <div className="ui form w-50 w-sm-100">
              <div className="field mb-3">
                <label className="fw-500 mb-2">Name on the Card<i className="text-danger ">*</i></label>
                <input placeholder='Name on the Card' />
              </div>
              <div className="field mb-3 position-relative">
                <label className="fw-500 mb-2">Card Number<i className="text-danger ">*</i></label>
                <input placeholder='Card Number' />
                <div className="mastercard-img position-absolute">
                  <img src="/assets/images/Mastercard-img.png" alt="Master Card" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9 col-md-12 col-sm-12">
                  <label className="fw-500 mb-2 d-block">Expire Date<i className="text-danger ">*</i></label>
                  <div className="row mb-md-3">
                    <div className="col-lg-6 col-md-6 col-sm-6 pr-3 pr-md-1">
                      <input placeholder='Month' />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 pr-3 pr-md-0">
                      <input placeholder='Year' />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12">
                  <div className="field mb-3 position-relative">
                    <label className="fw-500 mb-2">CVV<i className="text-danger ">*</i></label>
                    <input placeholder='CVV' />
                    <div className="cvv-img position-absolute">
                      <img src="/assets/images/cvv.png" alt="CVV" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-left">
                <button className="ui button text-dark fs-7 fw-400 px-5 mx-1 mb-sm-1 px-sm-2">CANCEL</button>
                <button onClick={showCardHandler} className="ui button bg-success-dark text-white fs-7 fw-400 px-5 mx-1 mb-sm-1 px-sm-2">SAVE</button>
              </div>
            </div>}

            {showcard && <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 px-1 mb-2">
                <div className="card p-2 border-radius-20">
                  <div className="card-dropdown-div text-right mb-1">
                    <Dropdown downward floating options={CardOptions} trigger={trigger} icon="null" />
                  </div>
                  <div className="card-title d-flex justify-content-between align-items-start mb-5">
                    <p className="fs-7 text-white-light">Primary Card</p>
                    <div className="card-master-img mr-2">
                      <img src="/assets/images/Mastercard-img.png" alt="Master Card" />
                    </div>
                  </div>
                  <div className="card-details">
                    <p className="fs-7 text-white-light">John</p>
                    <p className="fs-7 text-white">5142 - 8164 - 6526 - 2563</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 px-1 mb-2">
                <div className="card p-2 border-radius-20">
                  <div className="card-autopay-dropdown-div text-right mb-1">
                    <Dropdown
                      icon='filter'
                      floating

                      className='icon'
                      simple={openAutopayDropdown}
                      onClick={() => SetopenAutopayDropdown(true)}
                      item
                      trigger={trigger}
                    >
                      <Dropdown.Menu onMouseLeave={() => SetopenAutopayDropdown(false)}>
                        <Dropdown.Item><Radio className="autopayToggle" toggle label='Autopay' /> </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-title d-flex justify-content-between align-items-start mb-5">
                    <p className="fs-7 text-white-light">Primary Card</p>
                    <div className="card-master-img mr-2">
                      <img src="/assets/images/Mastercard-img.png" alt="Master Card" />
                    </div>
                  </div>
                  <div className="card-details">
                    <p className="fs-7 text-white-light">Peter</p>
                    <p className="fs-7 text-white">5142 - 8164 - 6526 - 2563</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 px-1 mb-2">
                <div className="card bgImg-none card-border-secondary-dashed p-2 border-radius-20 d-flex justify-content-center align-items-center text-center">
                  <div className="text-center cursor-pointer" onClick={CreditFormHandler}>
                    <p className="fs-1 fw-500">+</p>
                    <p>Add New Card</p>
                  </div>
                </div>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
}
