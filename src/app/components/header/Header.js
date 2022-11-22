import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import { useLocation } from 'react-router-dom'
export default function Header(props) {
  const location = useLocation()
  const openSidebar = (e) => {
    e.preventDefault();
    props.showSidebar(!props.sidebar)
  }
  const friendOptions = [
    {
      key: 'NORWEIGAN',
      text: 'NORWEIGAN',
      value: 'NORWEIGAN',
      image: { src: '/assets/images/Flag-Norway.png' },
    },
    {
      key: 'ENGLISH',
      text: 'ENGLISH',
      value: 'ENGLISH',
      image: { src: 'assets/images/Flag_United_States.png' },
    },
  ]
  return (
    <>
      <div className={`position-fixed w-100 ${location.pathname.startsWith('/postBooking') && `${props.width < 980 && 'pb-5'}`}`} id='mainHeader'>
        <div className='ui secondary pointing menu py-1 bg-white d-block  w-100'>
          <a href="/" className={`item d-inline-block ${props.width < 981 && 'w-50'}`}>
            <img className={`logo ${props.width > 980 && 'w-50'} ${props.width > 500 ? `${props.width < 980 && 'w-25'}` : `w-75`}`} src='/assets/images/logo_lagerboks.jpg' alt="Lagerboks" />
          </a>
          {
            props.width > 980
            &&
            <div className='right menu d-inline-block float-right'>
              <a href="https://www.lagerboks.no/" className="item fs-7 fw-700 mx-4 navtext py-3 d-inline-block">
                HOME
              </a>
              <NavLink to={'/home'} className="item fs-7 fw-700 mx-4 navtext py-3 d-inline-block">
                ORDER
              </NavLink>
              <NavLink to={'/login'} className="item fs-7 fw-700 mx-4 navtext py-3 d-inline-block">
                SIGNIN/PAYBILL
              </NavLink>
                <span>
                  <Dropdown
                    className="item fs-7 fw-700 mx-4 navtext py-3 d-inline-block"
                    inline
                    floating
                    options={friendOptions}
                    defaultValue={friendOptions[0].value}
                    icon={null}
                  />
                </span>
            </div>
          }
          {
            props.width < 980 &&
            <div className='d-inline-block float-right pr-3'>
              <Menu className='min-h-100' compact>
                <Dropdown className='fs-8' text='Menu' simple item direction='left'>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <a href="https://123minilager.no" className="item fs-7 fw-700 mx-4 navtext">
                        HOME
                      </a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink to={'/home'} className="item fs-7 fw-700 mx-4 navtext">
                        ORDER
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink to={'/login'} className="item fs-7 fw-700 mx-4 navtext">
                        SIGNIN/PAYBILL
                      </NavLink>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu>
              {location.pathname.startsWith('/postBooking') && <Icon className='position-fixed fs-4 l-2 t-9' onClick={(e) => openSidebar(e)} name='bars' />}
            </div>
          }
        </div>
      </div>
    </>
  )
}

