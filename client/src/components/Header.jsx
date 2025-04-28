import React from 'react'
import css from './Header.module.css'

const Header = () => {
  return (
    <div className={css.header}>
        <h1 className={css.title}>Путешествуйте с комфортном</h1>
        <p className={css.desc}>С нашей компанией Вы забудете обо всем, кроме высокого уровня путешествий</p>
    </div>
  )
}

export default Header