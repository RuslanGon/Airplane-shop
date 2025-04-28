// Spinner.jsx
import React from "react";
import css from './Spinner.module.css'

const Spinner = () => {
  return (
    <div className={css.spinner_container}>
      <div className={css.spinner}>Загрузка ...</div>
    </div>
  );
};

export default Spinner;
