import React from 'react';
import classes from './buildControls.module.css';
import BuildControl from './buildControl/buildControl'

const controls = [
   { label: 'Cheese', type: 'cheese' },
   { label: 'Salad', type: 'salad' },
   { label: 'Bacon', type: 'bacon' },
   { label: 'Meat', type: 'meat' }
]
const buildControls = (props) => {
   return <div className={classes.BuildControls}>
      <p>Burger Price : <strong>{props.price.toFixed(2)}/- RS</strong></p>
      {controls.map(ctrl => (
         <BuildControl
            key={ctrl.label}
            labl={ctrl.label}
            added={() => props.addIngredient(ctrl.type)}
            remove={() => props.removeIngredients(ctrl.type)}
            disabled={props.disabled[ctrl.type]} />
      ))}
      <button className={classes.OrderButton}
         disabled={!props.purchaseable}
         onClick={props.ordered}>ORDER NOW</button>
   </div>
};

export default buildControls;