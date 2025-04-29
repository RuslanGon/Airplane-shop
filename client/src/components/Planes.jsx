import { Link } from "react-router-dom";
import css from "./Planes.module.css";
import { Button } from "./Buton.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPlanes } from "../redux/planes/planesSlice.js";
import Spinner from "./Spinner.jsx";
import PlaneItem from "./PlaneItem.jsx";
import { useSortPlane } from "../hooks/useSortPlane.js";

export const Planes = () => {
  const dispatch = useDispatch();
  const { planes, isLoading } = useSelector((state) => state.planes);
  const { sortedPlanes, toggleSort, sortBy, setSortBy, isDescSort } = useSortPlane(planes || []); // Передаем пустой массив, если planes нет
  
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
          <Button className={css.sortBtn} onClick={toggleSort}>
            Сортировать {isDescSort ? "↓" : "↑"}
          </Button>
          
          <select
            className={css.sortSelect}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="price">По цене</option>
            <option value="capacity">По вместимости</option>
            <option value="name">По названию</option>
          </select>

          <Link to="/create" className={css.createPlaneBtn}>
            Добавить самолет
          </Link>
        </div>
      </div>

      <div className={css.planesGrid}>
        {sortedPlanes &&
          sortedPlanes.map((plane) => (
            <PlaneItem key={plane._id} plane={plane} />
          ))}
      </div>
    </div>
  );
};

export default Planes;
