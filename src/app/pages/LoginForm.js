import React, { Component } from "react";
import { Button, Tab } from "semantic-ui-react";
import SignupForm from '../components/signupform/SignupForm';
import SigninForm from '../components/signinform/SigninForm';
export default class LoginForm extends Component {
  state = { activeIndex: 0 };

  handleRangeChange = e => this.setState({ activeIndex: e.target.value });
  handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex });

  render() {
    const { activeIndex } = this.state;

    const panes = [
      {
        menuItem: "SIGN UP",
        render: () => <SignupForm onClick={this.handleRangeChange} value={1} />,
      },
      {
        menuItem: "SIGN IN",
        render: () => <SigninForm onClick={this.handleRangeChange} value={0} />,
      },
    ];

    return (
      <div className='loginform-wrapper'>
        <div className='ui container fluid'>
          <div className='position-relative'>
            <div className='loginform-bgImg'>
              <picture>
                <source media="(max-width:780px)" width='100%' height='100%' srcSet={activeIndex==0 ? "/assets/images/login-bg.jpg" : "/assets/images/login-bg.jpg"} />
                <img src={activeIndex==0 ? "/assets/images/signup-desk.jpg" : "/assets/images/signin-desk.jpg"} alt="Signup" />
              </picture>
            </div>
            <div className='loginform-tab pb-sm-2 position-absolute t-8 w-100'>
              <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                  {activeIndex == 0 ? <div className='logintab-content ml-5 ml-md-0 mb-md-4 mt-2 mt-sm-0'>
                    <h2 className='fs-3 fw-500 text-primary mb-1'>CREATE YOUR ACCOUNT</h2>
                    <p className='text-white'>Already a User? <Button className='bg-transparent fw-400 p-0 text-primary' onClick={this.handleRangeChange}
                      value={1}>Sign in</Button></p>
                  </div> : <div className='logintab-content ml-5 mt-2 ml-md-0 mb-md-4 mt-2 mt-sm-0'>
                  <h2 className='fs-3 fw-500 text-primary mb-1'>WELCOME</h2>
                  <p className='text-white'>Don't have an account? <Button className='bg-transparent fw-400 p-0 text-primary' onClick={this.handleRangeChange}
                    value={0}>Signup Now</Button></p>
                </div>}
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                  <div className='logintab-div bg-white border-radius-5 card-boxShadow'>
                    <Tab menu={{ secondary: true, pointing: true }} panes={panes} activeIndex={activeIndex}
                      onTabChange={this.handleTabChange} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
