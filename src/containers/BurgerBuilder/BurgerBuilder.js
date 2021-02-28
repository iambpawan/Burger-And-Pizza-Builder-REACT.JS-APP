import React, { Component } from 'react';
import Auxliary from '../../hoc/auxliary'
import Burger from '../../Components/burger/Burger';
import BuildControls from '../../Components/burger/buildControls/buildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummery from '../../Components/burger/OrderSummery/OrderSummery';

const Ingredients_Price = {
    salad: 30.00,
    bacon: 20.50,
    cheese: 50.00,
    meat: 80.99
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 120.00,
        purchaseable: false,
        purchasing:false
    }
    purchaseableHandler = (ingredients) => {
        console.log(Object.keys(ingredients));
        const sum = Object.keys(ingredients)
            .map(keys => { return ingredients[keys]; })
            .reduce((sum, el) => { return sum + el; }, 0);
        this.setState({ purchaseable: sum > 0 });
    }

    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const priceAddition = Ingredients_Price[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = priceAddition + oldPrice;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        this.purchaseableHandler(updatedIngredients);

    }
    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            // const updatedCount = 0;
            // const updatedIngredients = { ...this.state.ingredients };
            // updatedIngredients[type] = updatedCount;
            // const oldPrice = this.state.totalPrice;
            // const newPrice = oldPrice;
            // this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const priceAddition = Ingredients_Price[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        this.purchaseableHandler(updatedIngredients);
    }
    purchasingHandler =()=>{
        this.setState({purchasing:true});
    }
    modalClosedHandler=()=>{
        this.setState({purchasing:false});
    }
    purchasingContinueHandler=()=>{
        alert('You are Order is Preparing..... ');
    }
    render() {
        const disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return <Auxliary>
            <Modal show={this.state.purchasing} modalClosed={this.modalClosedHandler}>
                <OrderSummery 
                ingredients={this.state.ingredients}
                cancel={this.modalClosedHandler}
                continue={this.purchasingContinueHandler}
                orderPrice={this.state.totalPrice}
                />
            </Modal>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls
                addIngredient={this.addIngredientsHandler}
                removeIngredients={this.removeIngredientsHandler}
                disabled={disabledInfo}
                purchaseable={this.state.purchaseable}
                price={this.state.totalPrice}
                ordered={this.purchasingHandler}
            />
        </Auxliary>
    }
}
export default BurgerBuilder;