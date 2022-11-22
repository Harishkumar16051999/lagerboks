export default function PreBookingBreadcrumb(props) {
  return (
  <div className="breadcrumb-wrapper py-1">
      <div className="breadcrumb-div text-center my-5">
          <div className="ui small breadcrumb">
            <div className='section mx-1 mb-1'>
              <span className={`breadcrumb-item ${props.activeStep.startsWith(1) ? 'text-white' : 'text-secondary'} ${props.activeStep.startsWith(1) ? 'bg-primary' : 'bg-secondary'}`}>1</span>
              <span className={`ml-1 ${props.activeStep.startsWith(1) ? ' text-white' : 'text-secondary'}`}> SELECT UNIT</span>
            </div>

            <div className={`section mx-1 mb-1 `}>
              <span className={`breadcrumb-item ${props.activeStep.startsWith(12) ? 'text-white' : 'text-secondary'} ${props.activeStep.startsWith(12) ? 'bg-primary' : 'bg-secondary'}`}>2</span>
              <span className={`ml-1 ${props.activeStep.startsWith(12) ? ' text-white' : 'text-secondary'}`}>TENANT DETAILS</span>
            </div>

            <div className={`section mx-1 mb-1 `}>
              <span className={`breadcrumb-item ${props.activeStep.startsWith(123) ? 'text-white' : 'text-secondary'} ${props.activeStep.startsWith(123) ? 'bg-primary' : 'bg-secondary'}`}>3</span>
              <span className={`ml-1 ${props.activeStep.startsWith(123) ? ' text-white' : 'text-secondary'}`}>SIGN & PAYMENT</span>
            </div>
          </div>
      </div>
  </div>
  )
}
