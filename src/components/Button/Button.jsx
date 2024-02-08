import React from 'react';

const Button = ({ onClick, label, style }) => (
    <button onClick={onClick} className={style}>
        {label}
    </button>
);

export default Button
