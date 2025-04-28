import { Link } from "react-router-dom";
import css from "./Planes.module.css";
import { Button } from "./Buton.jsx";

export const Planes = () => {
  return (
    <div>
      <div className={css.sort}>
        <div className={css.planesHeader}> 
          <Button className={css.sortBtn}>
            Сортировать по цене
          </Button>
          <Link className={css.createPlaneBtn}>
            Добавить самолет
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Planes;
