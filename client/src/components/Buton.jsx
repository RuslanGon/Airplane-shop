import React from 'react';
import css from './Button.module.css';

export const Button = ({
    containerClassName = '',
    className = '',
    onClick = () => null,
    children = '',
    isBackButton = false
}) => {
  return (
    <div className={ containerClassName }>
        <span
          className={ `${isBackButton ? css.backButton : css.button} ${className}` }
          onClick={ onClick }
        >
          { children }
        </span>
    </div>
  )
}