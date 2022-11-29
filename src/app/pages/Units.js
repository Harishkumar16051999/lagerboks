import React, { useState } from 'react'
import { Dropdown, Header, Pagination, Icon, Modal } from 'semantic-ui-react'
import UnitsCard from '../components/unitscard/UnitsCard'
import UnitsFilter from '../components/unitsfilter/UnitsFilter'

const Units = () => {
  const [unitTypeModal, SetunitTypeModal] = useState({
    open: false,
    dimmer: undefined,
    size: undefined
  })
  const locationOptions = [
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
  const storageTypeOptions = [
    {
      key: 1,
      text: 'All',
      value: 1
    },
    {
      key: 2,
      text: 'Units',
      value: 2,
    },
  ]
  const sortUnitOptions = [
    {
      key: 'popular',
      text: 'Popular',
      value: 'popular',
      content: 'Popular',
    },
    {
      key: 'Price High to Low',
      text: 'Price High to Low',
      value: 'Price High to Low',
      content: 'Price High to Low',
    },
    {
      key: 'Price Low to High',
      text: 'Price Low to High',
      value: 'Price Low to High',
      content: 'Price Low to High',
    }
  ]
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const close = () => {
    setClick(false)
  }

  return (
    <div className='units-wrapper'>
      <div className='ui container fluid'>
        <div className='units-banner position-relative mb-3'>
          <img className='w-100' src='/assets/images/units-bg.png' alt='Units' />
          <div className='units-top-content position-absolute l-0 r-0 mx-auto text-center'>
            <h5 className='text-white fs-4 mb-2'>FIND YOUR <span className='text-primary'>STORAGE PLACE</span></h5>
            <div className='dropdown-div px-3 py-4 bg-white card-boxShadow'>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <Dropdown className='border-radius-0 mb-sm-2' placeholder="Location" clearable fluid search selection options={locationOptions} />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <Dropdown className='border-radius-0' placeholder="Storage Type" clearable fluid search selection options={storageTypeOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='units-row-div py-5'>
          <div className='row'>
            <div className='col-lg-3 col-md-3 col-sm-12'>
              <div className='filters-div px-2 px-sm-1'>
                <div onClick={handleClick} className="d-inline-flex align-items-center px-1 py-3 cursor-pointer">
                  <img className='mr-1' width='15' height='15' src="/assets/images/filter.png" alt="" />
                  <span className='fw-500'>Filters</span>
                </div>
                <div className={click ? "filter-wrapper isMenu" : "filter-wrapper"}>
                  <div className='position-relative'>
                    <svg onClick={close} className='r-2 cursor-pointer position-absolute' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 17.473 17.47">
                      <path id="wrong-5" d="M978.609-438.353l-2.052-2.043-4.37-4.366a1.33,1.33,0,0,1-.4-1.425,1.3,1.3,0,0,1,.833-.843,1.3,1.3,0,0,1,1.171.183,3.019,3.019,0,0,1,.353.321q3.009,3,6.009,6.01c.088.088.159.193.254.309.127-.118.217-.2.3-.281l6.156-6.156a1.332,1.332,0,0,1,1.325-.431,1.3,1.3,0,0,1,.927.828,1.3,1.3,0,0,1-.188,1.228,3.412,3.412,0,0,1-.325.35q-3,3.009-6.011,6.009a3.233,3.233,0,0,1-.317.244c.132.14.213.23.3.316q3.052,3.053,6.108,6.1a1.36,1.36,0,0,1,.441,1.387,1.305,1.305,0,0,1-2.205.564c-.59-.568-1.163-1.157-1.74-1.736l-4.487-4.491a2.068,2.068,0,0,1-.183-.248l-.142-.051a1.52,1.52,0,0,1-.191.325q-3.047,3.059-6.1,6.111a1.341,1.341,0,0,1-1.45.419,1.3,1.3,0,0,1-.851-.866,1.3,1.3,0,0,1,.235-1.19,3.215,3.215,0,0,1,.257-.274l6.034-6.033C978.386-438.167,978.484-438.245,978.609-438.353Z" transform="translate(-971.716 447.116)" fill="#000000" />
                    </svg>
                  </div>
                  <UnitsFilter modal={() => SetunitTypeModal({ open: true, size: 'tiny', dimmer: 'blurring' })} />
                  <div className="text-center my-2">
                    <button className="ui button bg-white border-success-dark-light-1 text-dark fs-7 fw-400 px-5 mx-1 mb-1 mb-sm-1 px-sm-2">Clear All</button>
                    <button className="ui button bg-success-dark text-white fs-7 fw-400 px-5 mx-1 mb-1 mb-sm-1 px-sm-3">Apply</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12">
              <div className='units-container-div'>
                <div className='sort-div text-right px-2 py-3'>
                  <Header as='h4'>
                    <Header.Content>
                      Sort by:{' '}
                      <Dropdown
                        floating
                        inline
                        options={sortUnitOptions}
                        defaultValue={sortUnitOptions[0].value}
                      />
                    </Header.Content>
                  </Header>
                </div>
                <div className='row'>
                  <UnitsCard />
                  <UnitsCard />
                </div>
                <div className='pagination-div mt-2 mb-3 text-center'>
                  <Pagination ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                    firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                    lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                    prevItem={{ content: <Icon name='angle left' />, icon: true }}
                    nextItem={{ content: <Icon name='angle right' />, icon: true }} defaultActivePage={1} totalPages={10} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          dimmer={unitTypeModal.dimmer}
          open={unitTypeModal.open}
          size={unitTypeModal.size}
          onClose={() => SetunitTypeModal({ open: false })}
        >
          <Modal.Header className='bg-success-dark text-white text-center fs-6 py-2 fw-400 position-relative'>Choose Dimensions
            <svg onClick={() => SetunitTypeModal({ open: false })} className='r-3 cursor-pointer position-absolute' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 17.473 17.47">
              <path id="wrong-5" d="M978.609-438.353l-2.052-2.043-4.37-4.366a1.33,1.33,0,0,1-.4-1.425,1.3,1.3,0,0,1,.833-.843,1.3,1.3,0,0,1,1.171.183,3.019,3.019,0,0,1,.353.321q3.009,3,6.009,6.01c.088.088.159.193.254.309.127-.118.217-.2.3-.281l6.156-6.156a1.332,1.332,0,0,1,1.325-.431,1.3,1.3,0,0,1,.927.828,1.3,1.3,0,0,1-.188,1.228,3.412,3.412,0,0,1-.325.35q-3,3.009-6.011,6.009a3.233,3.233,0,0,1-.317.244c.132.14.213.23.3.316q3.052,3.053,6.108,6.1a1.36,1.36,0,0,1,.441,1.387,1.305,1.305,0,0,1-2.205.564c-.59-.568-1.163-1.157-1.74-1.736l-4.487-4.491a2.068,2.068,0,0,1-.183-.248l-.142-.051a1.52,1.52,0,0,1-.191.325q-3.047,3.059-6.1,6.111a1.341,1.341,0,0,1-1.45.419,1.3,1.3,0,0,1-.851-.866,1.3,1.3,0,0,1,.235-1.19,3.215,3.215,0,0,1,.257-.274l6.034-6.033C978.386-438.167,978.484-438.245,978.609-438.353Z" transform="translate(-971.716 447.116)" fill="#fff" />
            </svg>
          </Modal.Header>
          <Modal.Content className='mh-400 overflow-y-auto'>
            <div className='row mb-3'>
              <div className='col-lg-6 col-md-6 col-sm-6'>
                <p className='fw-600'>LARGE</p>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6 text-right'>
                <p className='text-success-dark'><a href='/'>CLEAR ALL</a></p>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-3 col-md-3 col-sm-6 mb-2'>
                <label><input className="mr-1 mb-1" type="checkbox" />10x8x8</label>
              </div>
              <div className='col-lg-3 col-md-3 col-sm-6 mb-2'>
                <label><input className="mr-1 mb-1" type="checkbox" />10x8x8</label>
              </div>
              <div className='col-lg-3 col-md-3 col-sm-6 mb-2'>
                <label><input className="mr-1 mb-1" type="checkbox" />10x8x8</label>
              </div>
              <div className='col-lg-3 col-md-3 col-sm-6 mb-2'>
                <label><input className="mr-1 mb-1" type="checkbox" />10x8x8</label>
              </div>
              <div className='col-lg-3 col-md-3 col-sm-6 mb-2'>
                <label><input className="mr-1 mb-1" type="checkbox" />10x8x8</label>
              </div>
              <div className='col-lg-3 col-md-3 col-sm-6 mb-2'>
                <label><input className="mr-1 mb-1" type="checkbox" />10x8x8</label>
              </div>
              <div className='col-lg-3 col-md-3 col-sm-6 mb-2'>
                <label><input className="mr-1 mb-1" type="checkbox" />10x8x8</label>
              </div>
              <div className='col-lg-3 col-md-3 col-sm-6 mb-2'>
                <label><input className="mr-1 mb-1" type="checkbox" />10x8x8</label>
              </div>

            </div>
            <div className='text-center mt-1'>
              <button className='ui button bg-success-dark text-white'>Apply</button>
            </div>
          </Modal.Content>
        </Modal>
      </div>
    </div>
  )
}

export default Units