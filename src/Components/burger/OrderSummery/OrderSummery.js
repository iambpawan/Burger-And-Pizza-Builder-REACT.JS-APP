import React from 'react';
import Aux from '../../../hoc/auxliary';
import Button from '../../UI/Button/Button';
const orderSummery=(props)=>{
    const ingredients=Object.keys(props.ingredients)
    .map(igkey => {
       return <li key={igkey}><span style={{textTransform:"capitalize"}}>{igkey}</span>:{props.ingredients[igkey]}</li>
    });
return <Aux>
    <h3>Order Summery</h3>
    <p>A delicious Buger with following ingredients</p>
    <ul>
       {ingredients}
    </ul>
    <p><strong>Total Price:{props.orderPrice.toFixed(2)}</strong></p>
    <Button btntype="Danger" clicked={props.cancel}>CANCEL</Button>
    <Button btntype="Success" clicked={props.continue}>CONTINUE</Button>
</Aux>
}

export default orderSummery;