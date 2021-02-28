import React from 'react';
import classes from './buildControl.module.css';
const buildControl=(props)=>{
    return <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.labl}</div>
        <button className={classes.Less} onClick={props.remove} disabled={props.disabled}>Less</button>
        <button className={classes.More} onClick={props.added} >More</button>
    </div>
}

export default buildControl;