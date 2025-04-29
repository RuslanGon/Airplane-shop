import React from "react";
import css from "./Header.module.css";
import Content from "./Content.jsx";
import Wave from '/src/assets/wave.svg';

const Header = () => {
  return (
    <div className={css.header}>
        <Content className={css.content}>
            <h1 className={css.title}>{ `Путешествуйте с Комфортом` }</h1>
            <p className={css.desc}>{`C нашей компанией вы забудете обо всем кроме\n высокого уровня путешествий`}</p>
        </Content>
        <img src={ Wave } alt="" className={ css.wave }/>
    </div>
  );
};

export default Header;
