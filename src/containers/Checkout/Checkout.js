import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    // componentWilMount() {
    //     this.props.onInitPurchase();
    // }

    checkoutCanceledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        let summary = <Redirect to="/"/>;
        const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
        if (this.props.ings) {
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        checkoutCanceled={this.checkoutCanceledHandler}
                        checkoutContinued={this.checkoutContinuedHandler}
                        ingredients={this.props.ings} />
                    <Route path={this.props.match.path + '/contact-data'}
                        component={ContactData} />
                </div>
            );
        }
        return summary;
    }

}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased,
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         onInitPurchase: () => dispatch(action.purchaseInit())
//     };
// };

export default connect(mapStateToProps)(Checkout);