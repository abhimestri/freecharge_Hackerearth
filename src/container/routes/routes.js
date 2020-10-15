import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom'
import Mainpage from '../mainPageDisplay/mainPageDiaplay'
import Payments from '../payments/payments'
import OTP from '../otpSection/otpSection'
import CorrectOtp from '../otpSection/otpStateCheck/otpCorrect/correctOtp'
import WrongOtp from '../otpSection/otpStateCheck/otpWrong/wrongOtp'

class Routes extends Component{

    render(){
        return (
                    <Switch>
                        <Route exact path="/payments"  component={Payments}/>
                        <Route exact path="/correctOtp"  component={CorrectOtp}/>
                        <Route exact path="/wrongOtp"  component={WrongOtp}/>
                        <Route exact path="/OTP"  component={OTP}/>
                        <Route path="/" exact component={Mainpage}/>
                    </Switch>
        )
    }
}

export default Routes