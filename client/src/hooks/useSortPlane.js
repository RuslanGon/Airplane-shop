import { useMemo, useState } from "react";

export const useSortPlane = (planes = []) => {
  const [isDescSort, setIsDescSort] = useState(false);

  const sortedPlanes = useMemo(() => {
    const sortablePlanes = [...planes];
    return sortablePlanes.sort((a, b) => {
      return isDescSort ? b.price - a.price : a.price - b.price;
    });
  }, [isDescSort, planes]);

  const toggleSort = () => {
    setIsDescSort(prev => !prev);
  };

  return { sortedPlanes, isDescSort, toggleSort };
};
