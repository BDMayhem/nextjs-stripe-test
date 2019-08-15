import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../components/CheckoutForm';
import Head from 'next/head'

class App extends Component {
  constructor() {
    super();
    this.state = {stripe: null};
  }
  componentDidMount() {
    if (window.Stripe) {
      this.setState({stripe: window.Stripe('pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')});
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        this.setState({stripe: window.Stripe('pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')});
      });
    }
  }

  render() {
    return (
      <>
      <Head>
        <script id="stripe-js" src="https://js.stripe.com/v3/" async></script>
      </Head>
      <StripeProvider stripe={this.state.stripe} >
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
      </>
    );
  }
}

export default App;
