import React, { Component } from 'react';
import classes from './payments.module.css';
import  { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class Payments extends Component{

  OTPsection = () => {
      this.props.history.push('/OTP')
  }

  render(){
    return (
        <div className={classes.paymentsContainer}>
            <p> Price of your purchase : {this.props.price}$</p>
            <p>Enter your card Number </p>
            <input type="number" placeholder="enter card number"/>
            <button onClick={this.OTPsection}>Submit</button>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    price : state.price
  }
}

export default connect(mapStateToProps)(withRouter(Payments));
