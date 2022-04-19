import React from 'react';
import './Skeleton.css';

const SkeletonElement = ({ type }) => {
    //STATE & VARIALBES
    const classes = `skeleton ${type}`;
    return(
        <div className={classes}></div>
    );
}

export default SkeletonElement;