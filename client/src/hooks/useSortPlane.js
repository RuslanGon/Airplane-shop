import { useState, useMemo } from "react";

export const useSortPlane = (planes = []) => {
  const [isDescSort, setIsDescSort] = useState(false);
  const [sortBy, setSortBy] = useState("price"); // Начальный критерий сортировки

  // Убедитесь, что planes - это массив
  const sortedPlanes = useMemo(() => {
    if (!Array.isArray(planes)) {
      return []; // Если planes не массив, возвращаем пустой массив
    }

    const sortablePlanes = [...planes];

    // Сортировка по выбранному критерию
    sortablePlanes.sort((a, b) => {
      if (sortBy === "price") {
        return isDescSort ? b.price - a.price : a.price - b.price;
      } else if (sortBy === "capacity") {
        return isDescSort ? b.capacity - a.capacity : a.capacity - b.capacity;
      } else if (sortBy === "name") {
        return isDescSort ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name);
      }
      return 0;
    });

    return sortablePlanes;
  }, [planes, isDescSort, sortBy]);

  const toggleSort = () => {
    setIsDescSort((prev) => !prev);
  };

  return {
    sortedPlanes,
    toggleSort,
    sortBy,
    setSortBy,
    isDescSort,
  };
};
