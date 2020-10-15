import React, { Component } from 'react';
import classes from './otpSection.module.css';
import { withRouter } from 'react-router-dom'
class OTP extends Component{

    state = {
        otp : null,
        enteredOtp : null
    }

    onEntringOTP = () => {
        console.log(`entered = ${this.state.enteredOtp} generated = ${this.state.otp}`)
        if(this.state.enteredOtp == this.state.otp){
            this.props.history.push('/correctOtp')
        }else{
            this.props.history.push('/wrongOtp')
        }
    }

    componentDidMount(){
        this.setState({ otp : Math.floor(Math.random()*1000000) })
        setTimeout(() => {
            alert(`your one time password(OTP) is ${this.state.otp}`)
        },1000)
    }

  render(){
    return (
        <div className={classes.otpContainer}>
            <p>Enter OTP</p>
            <input type="number" onChange={(e) => { this.setState({enteredOtp : e.target.value}) }} placeholder="enter otp"/>
            <button onClick={this.onEntringOTP}>Submit</button>
        </div>
    );
  }
}

export default withRouter(OTP);
