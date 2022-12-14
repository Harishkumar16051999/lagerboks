import { useEffect, useState } from "react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import { Menu, Modal } from "semantic-ui-react";

export default function MyLeases() {
  const [activeUnit,SetActiveUnit]=useState('#18b');
  const [ScheduleMoveOutMOdal,SetScheduleMoveOutMOdal]=useState({
    open: false,
    dimmer: undefined,
  })
  const[ScheduleMovedOut,SetScheduleMovedOut]=useState(false)
  const [ScheduleMoveOutDate,SetScheduleMoveOutDate]=useState('')
  const ScheduleMOveOut=(e)=>{
    e.preventDefault();
    SetScheduleMovedOut(true);
    SetScheduleMoveOutMOdal(({
      open: false,
    }))
  }
  const CancelScheduleMOveOut=(e)=>{
    e.preventDefault();
    SetScheduleMovedOut(false)
  }
  useEffect(()=>{
    console.log(ScheduleMoveOutDate)
  },[ScheduleMoveOutDate])
  return (
   <div className="mx-2 mx-sm-1 wrapper my-2">
    <Menu secondary className="myLeaseUnitMenu overflow-x-auto pb-1">
      {
        ['#18b','#19A','#20C','#21A','30A','22S','24C','25N','26M'].map((unitnumber)=>(
          <Menu.Item className="py-1 px-4"
          name={unitnumber}
          active={activeUnit === unitnumber}
          onClick={()=>SetActiveUnit(unitnumber)}
        />
        ))
      } 
      </Menu>
      <div className="bg-white card-boxShadow border-radius-15  mb-2">
          <div className="row dashed-bottom px-4 py-1 px-sm-2">
            <div className="col-6">
              <h6 className="fs-6 fw-500 pt-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 21.698 27.198">
         <path id="building-svgrepo-com_1_" data-name="building-svgrepo-com (1)" d="M39.106,27.2h0L29,27.179H18.18a.386.386,0,0,1-.386-.386V9.412a.386.386,0,0,1,.386-.386h5.395V.386A.386.386,0,0,1,23.962,0H39.106a.386.386,0,0,1,.386.386V26.812a.386.386,0,0,1-.386.386Zm-9.722-.791,9.336.018V.773H24.348V9.025H29a.386.386,0,0,1,.386.386Zm-10.817,0H28.611V9.8H18.567Zm8.852-2.51H24.362a.386.386,0,0,1-.386-.386V21.721a.386.386,0,0,1,.386-.386h3.057a.386.386,0,0,1,.386.386V23.51A.386.386,0,0,1,27.419,23.9Zm-2.67-.773h2.284V22.108H24.749Zm-1.932.773H19.76a.386.386,0,0,1-.386-.386V21.721a.386.386,0,0,1,.386-.386h3.057a.386.386,0,0,1,.386.386V23.51A.386.386,0,0,1,22.816,23.9Zm-2.67-.773H22.43V22.108H20.146ZM36.48,23.7H35a.386.386,0,0,1-.386-.386V21.706A.386.386,0,0,1,35,21.319H36.48a.386.386,0,0,1,.386.386v1.606A.386.386,0,0,1,36.48,23.7Zm-1.091-.773h.705v-.833h-.705Zm-3.171.773H30.741a.386.386,0,0,1-.386-.386V21.706a.386.386,0,0,1,.386-.386h1.478a.386.386,0,0,1,.386.386v1.606A.386.386,0,0,1,32.218,23.7Zm-1.091-.773h.705v-.833h-.705ZM27.419,20.4H24.362a.386.386,0,0,1-.386-.386V18.226a.386.386,0,0,1,.386-.386h3.057a.386.386,0,0,1,.386.386v1.789A.386.386,0,0,1,27.419,20.4Zm-2.67-.773h2.284V18.612H24.749Zm-1.932.773H19.76a.386.386,0,0,1-.386-.386V18.226a.386.386,0,0,1,.386-.386h3.057a.386.386,0,0,1,.386.386v1.789A.386.386,0,0,1,22.816,20.4Zm-2.67-.773H22.43V18.612H20.146Zm16.334.22H35a.386.386,0,0,1-.386-.386V17.856A.386.386,0,0,1,35,17.47H36.48a.386.386,0,0,1,.386.386v1.606A.386.386,0,0,1,36.48,19.848Zm-1.091-.773h.705v-.833h-.705Zm-3.171.773H30.741a.386.386,0,0,1-.386-.386V17.856a.386.386,0,0,1,.386-.386h1.478a.386.386,0,0,1,.386.386v1.606A.386.386,0,0,1,32.218,19.848Zm-1.091-.773h.705v-.833h-.705Zm-3.708-2.17H24.362a.386.386,0,0,1-.386-.386V14.731a.386.386,0,0,1,.386-.386h3.057a.386.386,0,0,1,.386.386V16.52A.386.386,0,0,1,27.419,16.906Zm-2.67-.773h2.284V15.117H24.749Zm-1.932.773H19.76a.386.386,0,0,1-.386-.386V14.731a.386.386,0,0,1,.386-.386h3.057a.386.386,0,0,1,.386.386V16.52A.386.386,0,0,1,22.816,16.906Zm-2.67-.773H22.43V15.117H20.146ZM36.48,16H35a.386.386,0,0,1-.386-.386V14.007A.386.386,0,0,1,35,13.62H36.48a.386.386,0,0,1,.386.386v1.606A.386.386,0,0,1,36.48,16Zm-1.091-.773h.705v-.833h-.705ZM32.218,16H30.741a.386.386,0,0,1-.386-.386V14.007a.386.386,0,0,1,.386-.386h1.478a.386.386,0,0,1,.386.386v1.606A.386.386,0,0,1,32.218,16Zm-1.091-.773h.705v-.833h-.705Zm-3.708-1.815H24.362a.386.386,0,0,1-.386-.386V11.236a.386.386,0,0,1,.386-.386h3.057a.386.386,0,0,1,.386.386v1.789A.386.386,0,0,1,27.419,13.411Zm-2.67-.773h2.284V11.622H24.749Zm-1.932.773H19.76a.386.386,0,0,1-.386-.386V11.236a.386.386,0,0,1,.386-.386h3.057a.386.386,0,0,1,.386.386v1.789A.386.386,0,0,1,22.816,13.411Zm-2.67-.773H22.43V11.622H20.146Zm16.334-.489H35a.386.386,0,0,1-.386-.386V10.157A.386.386,0,0,1,35,9.771H36.48a.386.386,0,0,1,.386.386v1.606A.386.386,0,0,1,36.48,12.149Zm-1.091-.773h.705v-.833h-.705Zm-3.171.773H30.741a.386.386,0,0,1-.386-.386V10.157a.386.386,0,0,1,.386-.386h1.478a.386.386,0,0,1,.386.386v1.606A.386.386,0,0,1,32.218,12.149Zm-1.091-.773h.705v-.833h-.705ZM36.48,8.3H35a.386.386,0,0,1-.386-.386V6.307A.386.386,0,0,1,35,5.921H36.48a.386.386,0,0,1,.386.386V7.913A.386.386,0,0,1,36.48,8.3Zm-1.091-.773h.705V6.694h-.705ZM32.218,8.3H30.741a.386.386,0,0,1-.386-.386V6.307a.386.386,0,0,1,.386-.386h1.478a.386.386,0,0,1,.386.386V7.913A.386.386,0,0,1,32.218,8.3Zm-1.091-.773h.705V6.694h-.705ZM27.956,8.3H26.479a.386.386,0,0,1-.386-.386V6.307a.386.386,0,0,1,.386-.386h1.478a.386.386,0,0,1,.386.386V7.913A.386.386,0,0,1,27.956,8.3Zm-1.091-.773h.705V6.694h-.705ZM36.48,4.45H35a.386.386,0,0,1-.386-.386V2.458A.386.386,0,0,1,35,2.071H36.48a.386.386,0,0,1,.386.386V4.064A.386.386,0,0,1,36.48,4.45Zm-1.091-.773h.705V2.844h-.705Zm-3.171.773H30.741a.386.386,0,0,1-.386-.386V2.458a.386.386,0,0,1,.386-.386h1.478a.386.386,0,0,1,.386.386V4.064A.386.386,0,0,1,32.218,4.45Zm-1.091-.773h.705V2.844h-.705Zm-3.171.773H26.479a.386.386,0,0,1-.386-.386V2.458a.386.386,0,0,1,.386-.386h1.478a.386.386,0,0,1,.386.386V4.064A.386.386,0,0,1,27.956,4.45Zm-1.091-.773h.705V2.844h-.705Z" transform="translate(-17.794)" fill="#00aeef"/>
        </svg>
                <span className="veritical-align-text-top ml-1">Unit Details</span></h6>
            </div>
            {!ScheduleMovedOut &&
            <div className="col-6 text-right">
            <button  onClick={() => SetScheduleMoveOutMOdal({ open: true, dimmer: 'blurring' })} className="ui button basic box-shadow-none border-success-dark-light-1 fs-7 fw-400  px-1">
              <img height="16" width="16" src="/assets/images/calendar-new.svg" alt="calendar"/>
              <span className="text-success ml-1 veritical-align-text-top fw-600" >Schedule Move-Out</span></button>
            </div>
            }
            {
              ScheduleMovedOut&&
            <div className="col-12 col-md-6 text-right">                                                                                                                                                                                                                                                                                                                                                         
              <span className="text-secondary fw-500">Schedule Move-Out date:<span className="mx-1 text-success">26 March, 2022</span></span>
              <button className="ui button bg-success-dark   fs-7 fw-400 text-white px-3 py-1"onClick={e=>CancelScheduleMOveOut(e)}>Cancel</button>
             </div>
            }
          </div>
          <div className="py-4 px-3">
          <div className="row">
              <div className="col-lg-5 col-md-5 col-12 px-1">
              <div className='card-img border-radius-15 text-center p-2 unitDetails-card-image'>
                    <img height='190' width='190' src='/assets/images/units.png' alt='Units' />
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-12 px-1">
                <div className="card-desc  p-2 border-radius-10 mt-sm-2 mb-sm-2">
                <div className=""> <h2 className="fs-3 fw-600 mb-3 d-inline-block mr-1  ">#18B </h2>

                  {/* the code i have commented below is for overlock danger label */}
                  {/* <span className="danger-label-leases veritical-align-super py-1 px-2 fw-500">
                   Overlock
                  </span>  */}
                  </div> 
                  <div className="pb-1 mb-1 d-flex align-items-center"><img width='18' height='18' src='/assets/images/selfstorage.svg' alt='Self Storage' /><span className='ml-1'>Unit - <strong className="fw-700">5 X 10</strong> (large)</span></div>
                  <div className='d-flex align-items-center'><img width='18' height='18' src='/assets/images/location-new.svg' alt='Self Storage' /><span className='ml-1'>Warehouse, Crestline</span></div>
                  <div className='d-flex flex-wrap esign-amenitiy mt-2'>
                    <div className='d-flex align-items-center my-2 mr-2'>
                      <svg id="Fully_automated" data-name="Fully automated" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16.723 16.437">
                        <path id="Path_17536" data-name="Path 17536" d="M241.438,119.189c-.048.327-.082.658-.148.981a7.957,7.957,0,0,1-2.1,3.948,9.023,9.023,0,0,1-3.064,2.118l-.153.064c.155.07.286.127.415.188.178.083.234.21.168.366a.263.263,0,0,1-.381.129q-.509-.22-1.013-.448a.273.273,0,0,1-.131-.439q.3-.468.606-.929a.272.272,0,0,1,.394-.1.268.268,0,0,1,.058.389c-.049.081-.1.16-.153.24l.027.035c.311-.161.631-.308.932-.487a8,8,0,0,0,3.7-4.568,6.981,6.981,0,0,0-.136-4.484c-.021-.062-.046-.122-.065-.184a.273.273,0,0,1,.165-.371.269.269,0,0,1,.343.194,9.43,9.43,0,0,1,.3.98c.091.418.139.846.206,1.269.008.053.019.105.029.158v.947Z" transform="translate(-224.716 -110.581)" fill="#00aeef" />
                        <path id="Path_17537" data-name="Path 17537" d="M75.651,73.828c-.417.157-.783.291-1.146.434a.16.16,0,0,0-.078.116c-.01.13,0,.261,0,.391a.628.628,0,0,1-.668.661c-.321,0-.642-.005-.962-.027a.564.564,0,0,1-.521-.551c-.007-.152,0-.3-.008-.457a.177.177,0,0,0-.089-.122q-.49-.217-.988-.418a.16.16,0,0,0-.136.017c-.1.084-.187.182-.28.274a.617.617,0,0,1-.881.031,9.452,9.452,0,0,1-.671-.69.626.626,0,0,1,.033-.86c.12-.125.246-.245.343-.341-.148-.4-.285-.765-.429-1.133a.144.144,0,0,0-.107-.066c-.141-.008-.283,0-.424,0A.627.627,0,0,1,68,70.454q-.01-.449,0-.9a.625.625,0,0,1,.637-.626c.163,0,.325,0,.456,0,.17-.374.334-.727.489-1.084a.16.16,0,0,0-.032-.135c-.081-.095-.175-.178-.263-.268a.619.619,0,0,1-.025-.893c.216-.229.445-.448.681-.657a.62.62,0,0,1,.847.017c.113.1.214.218.328.318a.155.155,0,0,0,.134.025c.359-.151.716-.309,1.1-.478,0-.121,0-.284,0-.446a.634.634,0,0,1,.669-.681c.277,0,.555,0,.832,0a.616.616,0,0,1,.635.627c.006.141-.005.284.006.424a.174.174,0,0,0,.082.127c.355.147.713.287,1.115.446.08-.086.185-.21.3-.324a.621.621,0,0,1,.881-.016c.226.212.443.435.649.666a.629.629,0,0,1-.027.885c-.116.122-.3.229-.33.367s.126.286.185.436c.081.2.155.406.219.613.029.094.069.131.168.125.141-.008.283-.005.424,0a.621.621,0,0,1,.617.612q.011.457,0,.914a.623.623,0,0,1-.626.622c-.125,0-.25.006-.375,0a.152.152,0,0,0-.175.12q-.182.47-.394.928a.137.137,0,0,0,.034.194c.089.079.171.167.255.253a.612.612,0,0,1,.033.868,8.3,8.3,0,0,1-.716.691.617.617,0,0,1-.833-.04c-.129-.124-.243-.263-.329-.356ZM73.341,74.9c.12,0,.24,0,.359,0s.188-.04.182-.179c-.01-.206,0-.414,0-.62a.271.271,0,0,1,.252-.306,3.906,3.906,0,0,0,1.323-.534.283.283,0,0,1,.408.054c.144.141.29.28.426.428.09.1.162.1.257.007q.257-.262.528-.511c.09-.082.087-.148,0-.23-.142-.135-.279-.275-.417-.415a.283.283,0,0,1-.05-.42,3.94,3.94,0,0,0,.544-1.284.283.283,0,0,1,.323-.256c.2,0,.4,0,.6,0,.119,0,.168-.042.165-.162,0-.245-.006-.49,0-.735,0-.137-.055-.183-.186-.179-.218.006-.435,0-.653,0a.265.265,0,0,1-.291-.23,3.822,3.822,0,0,0-.536-1.339.277.277,0,0,1,.054-.407c.149-.151.3-.3.451-.449a.126.126,0,0,0,0-.208c-.18-.182-.359-.365-.533-.552-.084-.091-.151-.081-.231,0-.14.145-.283.287-.427.427a.269.269,0,0,1-.394.045,4.1,4.1,0,0,0-1.3-.553c-.2-.047-.257-.129-.259-.335s0-.425,0-.637c0-.1-.035-.139-.134-.138q-.384,0-.767,0c-.11,0-.155.045-.152.158.006.223,0,.446,0,.669a.276.276,0,0,1-.242.3,3.839,3.839,0,0,0-1.34.535.272.272,0,0,1-.394-.048c-.148-.144-.3-.289-.439-.439-.084-.088-.153-.1-.245-.01-.176.178-.357.351-.541.521a.127.127,0,0,0,0,.218c.141.135.279.275.416.415a.29.29,0,0,1,.051.434,3.914,3.914,0,0,0-.538,1.269c-.044.2-.128.261-.334.264s-.4,0-.6,0c-.11,0-.158.041-.156.154,0,.25.005.5,0,.751,0,.13.054.171.178.167.207-.007.414,0,.62,0,.188,0,.274.069.31.247a3.909,3.909,0,0,0,.535,1.323.281.281,0,0,1-.051.408c-.141.144-.281.289-.429.425-.1.089-.107.16-.008.256.175.171.346.347.512.527.082.089.148.089.231,0,.14-.145.283-.286.428-.427a.275.275,0,0,1,.394-.049,4.055,4.055,0,0,0,1.314.556c.178.041.239.128.24.316,0,.207,0,.414,0,.62,0,.1.044.15.147.148.13,0,.261,0,.392,0Z" transform="translate(-65.026 -61.824)" fill="#00aeef" />
                        <path id="Path_17538" data-name="Path 17538" d="M.819,109.062c-.159.078-.279.14-.4.2a.27.27,0,0,1-.387-.114.262.262,0,0,1,.147-.363q.5-.258,1-.506a.269.269,0,0,1,.4.141q.248.532.483,1.07a.253.253,0,0,1-.134.366.26.26,0,0,1-.36-.154c-.038-.078-.071-.159-.107-.238s-.069-.147-.112-.242c-.024.051-.044.086-.058.122a8.655,8.655,0,0,0-.517,1.832,5.315,5.315,0,0,0,.089,1.85,7.558,7.558,0,0,0,5.282,5.893,7.244,7.244,0,0,0,2.508.353.691.691,0,0,1,.211.01.265.265,0,0,1-.086.518c-.435-.011-.873,0-1.3-.05A8.248,8.248,0,0,1,.252,112.6a6.7,6.7,0,0,1,.486-3.3c.024-.065.045-.13.081-.234Z" transform="translate(-0.002 -103.512)" fill="#00aeef" />
                        <path id="Path_17539" data-name="Path 17539" d="M56.178,3.159c0-.14,0-.237,0-.334a.275.275,0,0,1,.262-.28.264.264,0,0,1,.275.265c.011.391.014.783.009,1.175a.28.28,0,0,1-.294.271q-.612.009-1.224,0a.264.264,0,0,1-.284-.272.27.27,0,0,1,.3-.269c.221,0,.442,0,.7,0-.133-.157-.236-.288-.348-.409A8.23,8.23,0,0,0,50.352.594,7.542,7.542,0,0,0,43.51,3.316c-.043.049-.081.1-.124.151a.274.274,0,0,1-.39.061.268.268,0,0,1-.024-.4c.126-.157.253-.314.391-.459A8.047,8.047,0,0,1,50.01.022a8.831,8.831,0,0,1,6.03,2.985l.137.151Z" transform="translate(-41.021 0)" fill="#00aeef" />
                        <path id="Path_17540" data-name="Path 17540" d="M135.92,136.414a2.421,2.421,0,0,1,2.437-2.388.9.9,0,0,1,.24.037.226.226,0,0,1,.173.246.221.221,0,0,1-.193.229c-.171.026-.346.028-.517.055a1.851,1.851,0,0,0-1.566,2.15,1.9,1.9,0,0,0,2.191,1.494,1.844,1.844,0,0,0,1.388-2.631c-.082-.181-.042-.335.1-.4s.291-.007.383.173a2.388,2.388,0,0,1-1.638,3.368,2.435,2.435,0,0,1-2.968-1.972c-.021-.117-.022-.238-.032-.357Z" transform="translate(-129.989 -128.178)" fill="#00aeef" />
                        <path id="Path_17541" data-name="Path 17541" d="M210.129,140.148a.274.274,0,0,1-.391.284,2.226,2.226,0,0,1-.29-.182.259.259,0,0,1-.072-.348.239.239,0,0,1,.321-.112,1.787,1.787,0,0,1,.345.213A.4.4,0,0,1,210.129,140.148Z" transform="translate(-200.204 -133.666)" fill="#00aeef" />
                      </svg>
                      <span className="ml-1">Fully automated</span>
                    </div>

                    <div className='d-flex align-items-center my-2 mr-2'>
                      <svg id="Variety_of_sizes" data-name="Variety of sizes" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16.416 16.415">
                        <path id="Path_17562" data-name="Path 17562" d="M0,8.206Q0,5.172,0,2.138A2.049,2.049,0,0,1,1.6.063,2.475,2.475,0,0,1,2.156.007q6.047,0,12.1,0A2.062,2.062,0,0,1,16.415,2.17q0,6.038,0,12.076a2.064,2.064,0,0,1-2.176,2.173q-6.027,0-12.055,0A2.067,2.067,0,0,1,0,14.234Q0,11.22,0,8.206Zm.827.011c0,2,.018,4.005-.009,6.008A1.316,1.316,0,0,0,2.2,15.6q6.008-.029,12.016,0A1.313,1.313,0,0,0,15.6,14.236c-.018-4.019-.007-8.038-.009-12.056A1.228,1.228,0,0,0,14.251.832q-6.048,0-12.1,0a1.675,1.675,0,0,0-.377.032,1.218,1.218,0,0,0-.95,1.265q0,3.044,0,6.088Z" transform="translate(0.001 -0.005)" fill="#00aeef" />
                        <path id="Path_17563" data-name="Path 17563" d="M47.5,187.3h.235c.66,0,1.321,0,1.982,0,.287,0,.469.161.471.4s-.176.408-.465.408q-1.582,0-3.163,0c-.321,0-.467-.144-.468-.464q0-1.582,0-3.163c0-.291.159-.468.406-.468a.413.413,0,0,1,.408.467c0,.66,0,1.321,0,1.982v.238c.081-.074.134-.119.183-.168l2.293-2.293a1.413,1.413,0,0,1,.162-.149.405.405,0,0,1,.569.561,1.242,1.242,0,0,1-.147.163l-2.293,2.293c-.05.05-.1.1-.175.187Z" transform="translate(-43.626 -174.172)" fill="#00aeef" />
                        <path id="Path_17564" data-name="Path 17564" d="M186.7,46.928h-1.576c-.207,0-.414,0-.62,0a.41.41,0,0,1-.444-.411.4.4,0,0,1,.451-.4c.34,0,.681,0,1.021,0q1.06,0,2.122,0c.362,0,.5.135.5.49q0,1.561,0,3.122c0,.306-.158.486-.412.483s-.4-.187-.4-.493q0-.981,0-1.962v-.235c-.086.08-.138.127-.187.177l-2.293,2.292a.955.955,0,0,1-.2.168.38.38,0,0,1-.478-.064.389.389,0,0,1-.068-.494,1.042,1.042,0,0,1,.156-.181q1.146-1.147,2.293-2.292a1.349,1.349,0,0,1,.178-.129l-.044-.068Z" transform="translate(-174.206 -43.645)" fill="#00aeef" />
                      </svg>
                      <span className="ml-1">Variety of sizes</span>
                    </div>

                    <div className='d-flex align-items-center my-2 mr-2'>
                      <svg id="Insurance" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 14.509 18.124">
                        <path id="Path_17559" data-name="Path 17559" d="M7.413,0c.706.318,1.41.642,2.119.954,1.512.665,3.024,1.33,4.541,1.982a.64.64,0,0,1,.436.67c-.009,2.265,0,4.53,0,6.8a4.987,4.987,0,0,1-2.181,4.259q-2.239,1.613-4.475,3.229a.863.863,0,0,1-1.187,0q-2.249-1.621-4.5-3.244A4.926,4.926,0,0,1,.006,10.48C-.006,8.17,0,5.861,0,3.552a.573.573,0,0,1,.388-.591Q3.645,1.547,6.894.115A2.091,2.091,0,0,0,7.094,0ZM13.6,7.433c0-1.15,0-2.3,0-3.451a.328.328,0,0,0-.22-.362c-1.985-.861-3.966-1.732-5.952-2.594a.445.445,0,0,0-.318-.007c-2,.868-4,1.746-6,2.617a.277.277,0,0,0-.2.294c0,2.2-.006,4.407.008,6.61a3.981,3.981,0,0,0,1.747,3.345c1.46,1.059,2.929,2.108,4.386,3.171a.286.286,0,0,0,.408,0q2.156-1.569,4.323-3.122a4.1,4.1,0,0,0,1.814-3.528c0-.991,0-1.982,0-2.973Z" fill="#00aeef" />
                        <path id="Path_17560" data-name="Path 17560" d="M36.5,33.885c0,.894,0,1.787,0,2.681A3.18,3.18,0,0,1,35.1,39.3q-1.819,1.31-3.637,2.622c-.335.242-.45.241-.782,0Q28.837,40.6,27,39.274a3.088,3.088,0,0,1-1.362-2.6c-.01-1.946,0-3.893-.006-5.84a.536.536,0,0,1,.36-.553q2.407-1.044,4.807-2.1a.64.64,0,0,1,.558.006q2.389,1.051,4.783,2.091a.556.556,0,0,1,.365.579c-.009,1.009,0,2.017,0,3.026Zm-.907.181c0-.929-.006-1.858,0-2.787a.323.323,0,0,0-.233-.35c-1.37-.592-2.735-1.2-4.106-1.785a.515.515,0,0,0-.365-.006c-1.379.593-2.751,1.2-4.13,1.8a.321.321,0,0,0-.227.352q.011,2.641,0,5.281a2.307,2.307,0,0,0,1.015,1.991q1.668,1.2,3.333,2.407a.259.259,0,0,0,.367,0q1.661-1.211,3.333-2.407a2.285,2.285,0,0,0,1.008-1.968c0-.841,0-1.681,0-2.521Z" transform="translate(-23.812 -26.128)" fill="#00aeef" />
                        <path id="Path_17561" data-name="Path 17561" d="M59.677,81.878c.067-.1.127-.184.185-.27Q61.4,79.3,62.936,77a1.158,1.158,0,0,1,.176-.231.42.42,0,0,1,.559-.039.411.411,0,0,1,.165.512,1.238,1.238,0,0,1-.143.252q-1.711,2.57-3.424,5.139c-.284.426-.482.46-.887.157-.538-.4-1.076-.8-1.611-1.209a.456.456,0,1,1,.536-.727c.455.334.9.675,1.371,1.025Z" transform="translate(-53.444 -71.206)" fill="#00aeef" />
                      </svg>
                      <span className="ml-1">Insurance</span>
                    </div>

                    <div className='d-flex align-items-center my-2 mr-2'>
                      <svg id="CCTV_Security" data-name="CCTV &amp; Security" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 19.786 14.616">
                        <path id="Path_17555" data-name="Path 17555" d="M19.788,3.216a3.907,3.907,0,0,1-.372.683,1.183,1.183,0,0,1-.966.4c-.116,0-.231,0-.37,0,0,.081-.012.155-.012.228,0,.721.011,1.443-.012,2.163a7.923,7.923,0,0,1-2.686,5.8A7.869,7.869,0,0,1,9.444,14.6,7.9,7.9,0,0,1,3.9,11.978,7.988,7.988,0,0,1,1.73,6.359q0-.917,0-1.835V4.3c-.157,0-.291,0-.425,0A1.271,1.271,0,0,1,.016,3.049C-.007,2.187.005,1.324.011.461A.429.429,0,0,1,.475,0C.52,0,.565,0,.61,0Q9.9,0,19.19,0a.575.575,0,0,1,.6.318ZM2.593,4.309c0,.74-.026,1.462.008,2.18A9.8,9.8,0,0,0,2.8,8.15a6.94,6.94,0,0,0,1.967,3.5A7.31,7.31,0,0,0,12.14,13.4,7.166,7.166,0,0,0,15.4,11.25a6.966,6.966,0,0,0,1.763-4.13c.067-.9.032-1.814.042-2.721a.437.437,0,0,0-.02-.09H2.593ZM.864.867c0,.69,0,1.358,0,2.027,0,.385.167.548.556.549.5,0,1-.005,1.506,0l15.411.005c.441,0,.593-.151.594-.589q0-.888,0-1.777V.867H.864Z" transform="translate(-0.003)" fill="#00aeef" />
                        <path id="Path_17556" data-name="Path 17556" d="M123.162,109.823a3.872,3.872,0,1,1,3.862-3.876A3.882,3.882,0,0,1,123.162,109.823Zm.005-6.878a3.006,3.006,0,1,0,3,3.016,3.015,3.015,0,0,0-3-3.016Z" transform="translate(-113.261 -96.92)" fill="#00aeef" />
                        <path id="Path_17557" data-name="Path 17557" d="M289.53,119.711a.42.42,0,0,1,.429-.421.427.427,0,0,1,.42.414.44.44,0,0,1-.422.437.433.433,0,0,1-.427-.43Z" transform="translate(-274.898 -113.261)" fill="#00aeef" />
                        <path id="Path_17558" data-name="Path 17558" d="M155.376,140.5a2.147,2.147,0,1,1,2.157-2.142A2.155,2.155,0,0,1,155.376,140.5Zm1.29-2.149a1.285,1.285,0,1,0-1.287,1.292,1.3,1.3,0,0,0,1.287-1.292Z" transform="translate(-145.486 -129.326)" fill="#00aeef" />
                      </svg>
                      <span className="ml-1">CCTV & Security 24/7</span>
                    </div>

                    <div className='d-flex align-items-center my-2 mr-2'>
                      <svg id="On-site_assistance" data-name="On-site assistance" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20.067 20.128">
                        <path id="Path_17580" data-name="Path 17580" d="M5.339,78.3a1.963,1.963,0,0,1-1-.659c-.182-.2-.381-.379-.568-.572a.4.4,0,1,1,.556-.558c.267.26.527.529.794.79a.541.541,0,0,0,.857,0c.192-.188.381-.379.57-.569a.524.524,0,0,0-.007-.869c-.706-.711-1.405-1.427-2.111-2.139q-.928-.934-1.864-1.861a3.35,3.35,0,0,0-.293-.259.491.491,0,0,0-.6.042c-.264.245-.522.5-.765.763a.511.511,0,0,0,.053.74c.274.282.556.556.832.835a.376.376,0,0,1,.088.45.349.349,0,0,1-.377.225.518.518,0,0,1-.274-.129c-.3-.289-.6-.583-.891-.888a1.3,1.3,0,0,1-.006-1.784c.249-.269.508-.53.779-.777A1.3,1.3,0,0,1,2.433,70.8a.255.255,0,0,0,.206-.015c.416-.406.824-.821,1.234-1.234A1.411,1.411,0,0,1,4.331,67.2a1.405,1.405,0,0,1,.861-2.12A1.417,1.417,0,0,1,5.343,64a1.369,1.369,0,0,1,.851-.636,4.187,4.187,0,0,1,.038-.715,1.364,1.364,0,0,1,1.656-1.015.34.34,0,0,0,.239-.049,1.373,1.373,0,0,1,1.1-.138c.85.153,1.7.323,2.547.478.16.029.328.012.488.038a1.357,1.357,0,0,1,1.146,1.6c-.006.039-.008.078-.015.135a1.4,1.4,0,0,1,1.032,1.714A1.437,1.437,0,0,1,15.47,67.16a1.389,1.389,0,0,1,.607,2.383l.964.963a.941.941,0,0,1,.1.1.409.409,0,0,0,.543.152,1.18,1.18,0,0,1,1.223.277c.276.251.541.515.794.79a1.286,1.286,0,0,1-.02,1.8q-2.13,2.151-4.282,4.279a1.3,1.3,0,0,1-1.842-.013c-.236-.227-.47-.457-.7-.695a1.278,1.278,0,0,1-.286-1.448.183.183,0,0,0-.055-.235c-.475-.47-.946-.944-1.422-1.413a.307.307,0,0,0-.181-.088c-.425-.017-.85-.026-1.276-.034a1.782,1.782,0,0,0-.431.011.92.92,0,0,0-.412.189c-.447.423-.874.867-1.314,1.3a.181.181,0,0,0-.045.249,1.29,1.29,0,0,1-.244,1.489,7.145,7.145,0,0,1-.714.7,4.8,4.8,0,0,1-.709.393H5.337ZM3.232,71.32l3.636,3.655c.451-.452.916-.912,1.373-1.381a1.249,1.249,0,0,1,.889-.4,9.814,9.814,0,0,1,1.1.021,1.671,1.671,0,0,0,1.635-.579.379.379,0,0,1,.587-.038.4.4,0,0,1-.03.593c-.169.191-.327.393-.472.568l1.2,1.217,3.575-3.588-1.242-1.253c-.081.077-.17.174-.272.255a.384.384,0,0,1-.569-.079.4.4,0,0,1,.071-.533c.289-.295.589-.579.872-.879a.568.568,0,0,0-.006-.8.574.574,0,0,0-.8-.025c-.114.1-.215.211-.324.315a.4.4,0,0,1-.607.045.411.411,0,0,1,.051-.607c.216-.22.441-.431.649-.657a.578.578,0,0,0-.821-.812c-.122.109-.233.23-.35.345a.414.414,0,0,1-.621.051.408.408,0,0,1,.058-.606c.234-.238.478-.467.7-.713a.567.567,0,0,0-.03-.811.577.577,0,0,0-.8.012c-.125.116-.24.242-.363.359a.4.4,0,1,1-.553-.567c.225-.228.454-.453.681-.681a.568.568,0,0,0,.179-.5.579.579,0,0,0-.986-.336c-.338.329-.666.668-1,1a.2.2,0,0,0-.054.281,1.361,1.361,0,0,1-.81,1.865,4.056,4.056,0,0,1-.429.091c-.007.032-.019.068-.024.106A1.336,1.336,0,0,1,8.078,67.5c-.117.016-.129.075-.139.168a1.347,1.347,0,0,1-1.2,1.212c-.056.007-.112.02-.154.028a4.23,4.23,0,0,1-.088.42,1.377,1.377,0,0,1-1.88.823c-.059-.026-.166-.04-.2-.008-.409.4-.809.8-1.185,1.178ZM19.3,72.708a2.361,2.361,0,0,0-.233-.4c-.2-.224-.42-.431-.637-.64a.53.53,0,0,0-.815,0q-2.086,2.079-4.167,4.163a.53.53,0,0,0-.009.814q.314.324.64.638a.523.523,0,0,0,.8.009q2.1-2.091,4.193-4.193a1.847,1.847,0,0,0,.23-.4ZM7.879,66.719c.336-.018.519-.127.612-.357a.554.554,0,0,0-.122-.635c-.474-.48-.95-.958-1.433-1.428a.578.578,0,1,0-.807.827c.463.472.929.942,1.406,1.4a1.3,1.3,0,0,0,.344.194Zm1.436-1.351a.627.627,0,0,0,.606-.616.38.38,0,0,0-.258-.385,3.219,3.219,0,0,1-1.75-1.761.364.364,0,0,0-.2-.182.553.553,0,0,0-.647.242.569.569,0,0,0,.084.721c.588.6,1.179,1.189,1.78,1.772a1.633,1.633,0,0,0,.382.21ZM7.179,67.5a1.111,1.111,0,0,0-.149-.33c-.389-.407-.783-.81-1.194-1.194a.555.555,0,0,0-.753.038.541.541,0,0,0-.062.748c.39.423.8.829,1.221,1.222a.51.51,0,0,0,.609.043.619.619,0,0,0,.327-.525Zm-1.4,1.36a.51.51,0,0,0-.07-.218A4.892,4.892,0,0,0,5.058,68a.531.531,0,0,0-.7.132.568.568,0,0,0-.013.723,4.2,4.2,0,0,0,.515.507.528.528,0,0,0,.608.047.583.583,0,0,0,.312-.55Zm2.894-6.7-.036.089A2.491,2.491,0,0,0,9.8,63.57l1.021-1.02L8.67,62.163Z" transform="translate(0.015 -58.176)" fill="#00aeef" />
                        <path id="Path_17581" data-name="Path 17581" d="M59.511,3.023c.105-.124.174-.273.285-.317a.613.613,0,0,1,.4.034c.1.036.165.143.244.222q.6.595,1.193,1.191a.408.408,0,0,1,.055.607.412.412,0,0,1-.62-.053c-.445-.442-.892-.883-1.33-1.332a2.235,2.235,0,0,1-.226-.353Z" transform="translate(-56.384 -2.543)" fill="#00aeef" />
                        <path id="Path_17582" data-name="Path 17582" d="M279.4,2.1a.4.4,0,0,1,.423.231.386.386,0,0,1-.088.452c-.3.3-.592.593-.889.89-.171.171-.34.346-.515.513a.4.4,0,0,1-.579.027.394.394,0,0,1,.014-.578q.7-.707,1.406-1.4A.915.915,0,0,1,279.4,2.1Z" transform="translate(-263.051 -1.989)" fill="#00aeef" />
                        <path id="Path_17583" data-name="Path 17583" d="M183.559,1.266c0,.282,0,.563,0,.844a.39.39,0,0,1-.383.431.4.4,0,0,1-.4-.433q-.006-.845,0-1.688a.4.4,0,0,1,.406-.432.4.4,0,0,1,.382.434c0,.282,0,.563,0,.844Z" transform="translate(-173.168 0.013)" fill="#00aeef" />
                        <path id="Path_17584" data-name="Path 17584" d="M44.7,322.775a.387.387,0,0,1-.4-.393.393.393,0,1,1,.787.005.386.386,0,0,1-.386.388Z" transform="translate(-41.972 -305.077)" fill="#00aeef" />
                        <path id="Path_17585" data-name="Path 17585" d="M248.772,249.356a.385.385,0,0,1-.4-.375.4.4,0,0,1,.386-.412.405.405,0,0,1,.4.4A.4.4,0,0,1,248.772,249.356Z" transform="translate(-235.329 -235.513)" fill="#00aeef" />
                      </svg>
                      <span className="ml-1">On-site assistance</span>
                    </div>
                  </div>
                </div>
              </div>
       
            </div>
          </div>
        </div>
        <div className="bg-white card-boxShadow border-radius-15  mb-2">
          <div className=" dashed-bottom px-4 py-1 px-sm-2">
        
              <h6 className="fs-6 fw-500 pt-1">
              <svg id="E-sign" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 39.948 40.031">
                    <path id="Path_15973" data-name="Path 15973" d="M0,20.026V2.192A1.994,1.994,0,0,1,2.155,0q13.151,0,26.3,0A1.966,1.966,0,0,1,30.664,2.2q.006,5.91,0,11.819c0,.494.143,1.137-.642,1.145-.827.008-.7-.681-.7-1.185-.015-3.754-.008-7.506-.008-11.26,0-.232.067-.513-.038-.687A2.071,2.071,0,0,0,28.6,1.4c-.134-.084-.364-.02-.551-.02H2.587c-1.162,0-1.211.05-1.211,1.236v34.83c0,1.136.055,1.19,1.183,1.19H28.093c1.133,0,1.218-.087,1.22-1.241q0-2.658,0-5.316c0-.232.017-.466.031-.7.027-.436.241-.722.7-.7s.629.32.628.761c-.007,1.445,0,2.891,0,4.336,0,.79.017,1.582-.011,2.372a2.1,2.1,0,0,1-2.112,1.884c-8.79-.041-17.581-.024-26.373-.024A1.983,1.983,0,0,1,0,37.86Q0,28.944,0,20.026Z" transform="translate(0 -0.003)" fill="#00aeef" />
                    <path id="Path_15974" data-name="Path 15974" d="M131.408,63.064c-.413-.407-1.158-.55-.738-1.285.436-.765.969-.123,1.5-.039.484-.818.936-1.66,1.469-2.445.193-.284.59-.427.88-.652a2.454,2.454,0,0,0,.52-.492,2.047,2.047,0,0,1,2.28-.957,1.873,1.873,0,0,1,1.3,2.638c-.131.449-.4.855-.116,1.379.1.182-.106.572-.246.828-.446.814-.926,1.61-1.385,2.4.041.07.053.123.087.147,1.636,1.117,1.818,1.887.832,3.614-.692,1.213-1.394,2.421-2.094,3.629-.263.456-.558.992-1.176.627-.634-.375-.248-.9,0-1.336.734-1.3,1.494-2.578,2.227-3.875.466-.824.364-1.062-.622-1.471l-1.489,2.571c-1.235,2.136-2.392,4.322-3.727,6.391a64.667,64.667,0,0,1-3.889,5.281c-.33.413-1.028.53-1.554.789a3.528,3.528,0,0,0-.912.487,14.608,14.608,0,0,0-.969,1.19c-.934,1.112-2,.957-2.6-.373-.085-.19-.165-.385-.248-.576-.05.008-.109,0-.126.024a1.475,1.475,0,0,1-1.787.724c-.778-.252-.838-.9-.888-1.576a6.249,6.249,0,0,0-.341-1.729l-1.162,3.443a2.781,2.781,0,0,1-.337.906c-.185.221-.6.471-.8.4a1.026,1.026,0,0,1-.431-.8,3,3,0,0,1,.287-1c.418-1.257.832-2.516,1.262-3.768a1.324,1.324,0,0,1,1.5-1.069c.685.069,1.094.547,1.187,1.41.077.709.14,1.42.215,2.182,1.415-1.275,1.954-1.092,3.075,1.011.41-.5.825-.969,1.179-1.477a.8.8,0,0,0,.024-.631,2.147,2.147,0,0,1,.176-1.874,9.475,9.475,0,0,0,.814-1.772,36.355,36.355,0,0,1,3.6-7.309c1.081-1.848,2.143-3.706,3.22-5.571Zm1.255.642c-1.776,3.075-3.526,6.108-5.3,9.189l2.263,1.312c1.783-3.091,3.534-6.126,5.3-9.193Zm2-3.46c-.45.778-.867,1.5-1.309,2.261l2.267,1.3c.457-.794.87-1.509,1.3-2.257l-2.259-1.3Zm-7.878,13.917c-.176.462-.331.87-.487,1.278a1.362,1.362,0,0,0,.862,1.908c.536-.648,1.078-1.3,1.66-2.008l-2.036-1.178Zm10.372-14.1a4.531,4.531,0,0,0,.176-1.159.706.706,0,0,0-.592-.333,4.711,4.711,0,0,0-.919.755ZM125.165,77.866a4.943,4.943,0,0,0-.158,1.187c.015.134.467.375.6.312a4.378,4.378,0,0,0,.87-.74l-1.31-.761Z" transform="translate(-98.799 -49.134)" fill="#00aeef" />
                    <path id="Path_15975" data-name="Path 15975" d="M44.265,29.863v1.3h.849q7.45,0,14.9,0a2.218,2.218,0,0,1,.9.073,1.079,1.079,0,0,1,.552.634c.092.418-.213.627-.628.639-.164,0-.326.006-.49.006H43.976c-1.039,0-1.134-.092-1.143-1.1-.006-.653-.011-1.306,0-1.958.017-.766.19-.943.968-.947,2.1-.01,4.2,0,6.295,0q5.037,0,10.073,0a2.145,2.145,0,0,1,.891.092.805.805,0,0,1,.39.618.871.871,0,0,1-.443.59,1.771,1.771,0,0,1-.757.048q-7.554,0-15.109,0h-.877Z" transform="translate(-36.838 -24.522)" fill="#00aeef" />
                    <path id="Path_15976" data-name="Path 15976" d="M24.717,197.271a5.676,5.676,0,1,1,2.807-10.565,2.4,2.4,0,0,1,.238.145c.355.278.765.568.443,1.087s-.776.327-1.159.081a4.329,4.329,0,0,0-6.666,4.324,4.4,4.4,0,0,0,4.536,3.552,4.3,4.3,0,0,0,4-3.88c.017-.185-.014-.424.09-.54.192-.217.478-.513.7-.492a.841.841,0,0,1,.569.61,6.124,6.124,0,0,1-.262,1.845,5.639,5.639,0,0,1-5.3,3.833Z" transform="translate(-16.309 -159.92)" fill="#00aeef" />
                    <path id="Path_15977" data-name="Path 15977" d="M84.493,101.3H77.782c-.186,0-.42.063-.548-.024-.257-.176-.629-.432-.634-.663s.373-.48.624-.666c.106-.08.316-.021.48-.021h13.7c.186,0,.422-.06.548.029.239.169.573.427.575.649s-.324.492-.566.655c-.148.1-.407.041-.617.041q-3.426,0-6.852,0Z" transform="translate(-65.887 -85.93)" fill="#00aeef" />
                    <path id="Path_15978" data-name="Path 15978" d="M40.753,129.926q-3.21,0-6.421,0c-.474,0-.945-.1-.952-.681s.459-.7.936-.7q6.357-.006,12.714,0c.092,0,.185.014.278.022.452.041.765.221.724.737-.038.487-.369.589-.785.592-1.536.011-3.071.032-4.608.046-.628.006-1.257,0-1.887,0Z" transform="translate(-28.711 -110.564)" fill="#00aeef" />
                    <path id="Path_15979" data-name="Path 15979" d="M64.831,66.77h6.145a1.505,1.505,0,0,1,.685.053.9.9,0,0,1,.459.579.821.821,0,0,1-.411.613,2.12,2.12,0,0,1-.889.1q-6.006.008-12.012,0a1.574,1.574,0,0,1-.752-.073c-.235-.141-.536-.446-.519-.656a.86.86,0,0,1,.594-.587,18.288,18.288,0,0,1,2.092-.034h4.61Z" transform="translate(-49.488 -57.419)" fill="#00aeef" />
                    <path id="Path_15980" data-name="Path 15980" d="M37.373,153.9H34.3c-.484,0-.931-.112-.913-.7.017-.537.435-.65.9-.649,2.073,0,4.144,0,6.217,0,.452,0,.87.087.869.662,0,.554-.386.687-.853.687H37.374Z" transform="translate(-28.717 -131.215)" fill="#00aeef" />
                    <path id="Path_15981" data-name="Path 15981" d="M42.479,215.175c.723-.744,1.386-1.431,2.057-2.11.331-.336.726-.608,1.151-.208s.148.817-.169,1.148c-.66.689-1.322,1.38-2.018,2.034a1.317,1.317,0,0,1-2.041,0c-.449-.406-.87-.843-1.289-1.28-.315-.327-.434-.764-.024-1.018a1.269,1.269,0,0,1,.979.067c.257.108.436.407.648.625s.414.434.708.741Z" transform="translate(-34.306 -182.916)" fill="#00aeef" />
                    <path id="Path_15982" data-name="Path 15982" d="M150.912,130.038c-.743,0-1.487,0-2.231,0-.432,0-.726-.155-.748-.629s.273-.687.694-.689c1.534-.014,3.067-.008,4.6,0a.624.624,0,0,1,.685.706c-.024.452-.336.62-.772.613-.743-.011-1.487,0-2.231,0Z" transform="translate(-127.242 -110.71)" fill="#00aeef" />
                    <path id="Path_15983" data-name="Path 15983" d="M103.106,152.536c.745,0,1.491-.007,2.235,0,.413.006.745.154.765.629.022.517-.317.7-.761.7q-2.234.019-4.47,0c-.448,0-.787-.193-.769-.7.017-.467.348-.631.764-.636.745-.01,1.491,0,2.235,0Z" transform="translate(-86.105 -131.2)" fill="#00aeef" />
              </svg>
                <span className="veritical-align-super ml-1">Rental Agreement</span></h6>
          </div>
          <div className="py-1 px-3">
          <div className='bg-layout'>
                    <div className=' overflow-auto'>
                      <div className="rentalAgreementContainer">
                        {/* for document preview */}

                      </div>
                    </div>
                    <div className='text-center'>
                    <button   className="ui button basic box-shadow-none border-success-dark-light-1 fs-8 px-2 py-1 my-2" ><span className='text-success'>Download</span></button>
                        </div>
                    
               </div>
          </div>
        </div>
        <Modal
        dimmer={ScheduleMoveOutMOdal.dimmer}
        open={ScheduleMoveOutMOdal.open}
        size='tiny' 
        onClose={() => SetScheduleMoveOutMOdal({ open: false })}
      >
        <Modal.Header className='bg-success-dark text-white text-center fs-6 py-2 fw-400 position-relative'>Schedule Move-Out
     
     <svg onClick={()=>SetScheduleMoveOutMOdal({ open: false })} className='r-3 cursor-pointer position-absolute' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 17.473 17.47">
      <path id="wrong-5" d="M978.609-438.353l-2.052-2.043-4.37-4.366a1.33,1.33,0,0,1-.4-1.425,1.3,1.3,0,0,1,.833-.843,1.3,1.3,0,0,1,1.171.183,3.019,3.019,0,0,1,.353.321q3.009,3,6.009,6.01c.088.088.159.193.254.309.127-.118.217-.2.3-.281l6.156-6.156a1.332,1.332,0,0,1,1.325-.431,1.3,1.3,0,0,1,.927.828,1.3,1.3,0,0,1-.188,1.228,3.412,3.412,0,0,1-.325.35q-3,3.009-6.011,6.009a3.233,3.233,0,0,1-.317.244c.132.14.213.23.3.316q3.052,3.053,6.108,6.1a1.36,1.36,0,0,1,.441,1.387,1.305,1.305,0,0,1-2.205.564c-.59-.568-1.163-1.157-1.74-1.736l-4.487-4.491a2.068,2.068,0,0,1-.183-.248l-.142-.051a1.52,1.52,0,0,1-.191.325q-3.047,3.059-6.1,6.111a1.341,1.341,0,0,1-1.45.419,1.3,1.3,0,0,1-.851-.866,1.3,1.3,0,0,1,.235-1.19,3.215,3.215,0,0,1,.257-.274l6.034-6.033C978.386-438.167,978.484-438.245,978.609-438.353Z" transform="translate(-971.716 447.116)" fill="#fff"/>
    </svg>


        </Modal.Header>
        <Modal.Content className=' p-1'>
               <div className="ui form px-4 px-sm-2">
                  <div className="field w-100 datePicker my-3">
                    <label className='fw-500 fs-7 mb-1' >Schedule Move-Out Date</label>
                    <SemanticDatepicker value={ScheduleMoveOutDate} onChange={(e,data)=>SetScheduleMoveOutDate(data.value)} placeholder='Select date' className='w-100' />
                  </div>
                  <div className="field w-100  my-3">
                    <label className='fw-500 fs-7 mb-1' >Reason</label>
                    <textarea rows='5'></textarea>
                  </div>
               <div className='text-center my-2'>
                <button className="ui button bg-success-dark   fs-7 fw-400 text-white px-3 py-1"onClick={e=>ScheduleMOveOut(e)}>Schedule</button>
              </div>
                  </div>
        </Modal.Content>
      </Modal>
   </div>
  )
}
