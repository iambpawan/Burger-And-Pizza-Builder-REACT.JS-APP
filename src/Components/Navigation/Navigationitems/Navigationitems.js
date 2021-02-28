import React from 'react';
import classes from './Navigationitems.module.css';
import Navigationitem from '../Navigationitems/Navigationitem/Navigationitem';
const navigationitems = () => (
    <ul className={classes.Navigationitems}>
        <Navigationitem link="/" active>Burger Builder</Navigationitem>
        <Navigationitem link="/">Pizza Builder</Navigationitem>
        <Navigationitem link="/" >Check Out</Navigationitem>
        <Navigationitem link="/" >Login</Navigationitem>
    </ul>
);

export default navigationitems;