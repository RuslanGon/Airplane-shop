import { Link } from "react-router-dom";
import css from "./Planes.module.css";
import { Button } from "./Buton.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPlanes } from "../redux/planes/planesSlice.js";
import Spinner from "./Spinner.jsx";
import PlaneItem from "./PlaneItem.jsx";

export const Planes = () => {
  const dispatch = useDispatch();
  const { planes, isLoading } = useSelector((state) => state.planes);

  useEffect(() => {
    dispatch(getPlanes());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className={css.sort}>
        <div className={css.planesHeader}>
          <Button className={css.sortBtn}>Сортировать по цене</Button>
          <Link className={css.createPlaneBtn}>Добавить самолет</Link>
        </div>
      </div>

      <div className={css.planesGrid}>
        {planes &&
          planes.map((plane) => (
            <PlaneItem key={plane._id} plane={plane} />
          ))}
      </div>
    </div>
  );
};

export default Planes;
