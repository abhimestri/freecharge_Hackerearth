import React, { Component } from 'react';
import classes from './mainPageDisplay.module.css';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionType from '../store/action'

class MainPage extends Component{

  state = {
    listOfRecipies : []
  }

  componentDidMount(){
    axios.get('http://starlord.hackerearth.com/recipe')
          .then(res => {
            this.setState({ listOfRecipies : this.state.listOfRecipies.concat(res.data) })
          })
          .catch(err => console.log(err));
  }

  navigateToPayments = (price) => {
    this.props.history.push('/payments');
    this.props.setPrice(price)
  }

  render(){
    let res = this.state.listOfRecipies.map(el => {
      return (
        <div onClick={() => this.navigateToPayments(el.price)}>
          <img className={classes.image} src={el.image} alt="img"/>
          <p className={classes.recipeName}>{el.name}</p>
          <p className={classes.price}>{el.price}$</p>
        </div>
      )
    });
    return (
        <div className={classes.container}>
          {res}
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPrice : price => dispatch({ type: actionType.PRICE, price:price})
  }
}

export default connect(null, mapDispatchToProps)(withRouter(MainPage));
