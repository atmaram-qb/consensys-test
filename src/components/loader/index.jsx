'use strict';

import React from 'react';

import './styles';

const LOADER_DEFAULT_CLASS = 'csys-loader'
const Loader = (props) => {
    const loaderClassName = props.isLoading
                                ? `${ LOADER_DEFAULT_CLASS } show`
                                : LOADER_DEFAULT_CLASS;

    return (
        <div className={ loaderClassName }>
            <svg className="spinner" width="30px" height="30px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle className="circle" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
            </svg>
        </div>
    )
};

export default Loader;
