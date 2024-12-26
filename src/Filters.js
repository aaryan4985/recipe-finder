import React, { useState, useEffect } from "react";

const Filters = ({ setSelectedCategory, setSelectedArea }) => {
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const fetchFilters = async () => {
      const categoryRes = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
      );
      const areaRes = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );

      const categoryData = await categoryRes.json();
      const areaData = await areaRes.json();

      setCategories(categoryData.meals || []);
      setAreas(areaData.meals || []);
    };

    fetchFilters();
  }, []);

  return (
    <div className="flex gap-4 my-6">
      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="px-4 py-2 border rounded-lg shadow-sm text-gray-700"
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat.strCategory} value={cat.strCategory}>
            {cat.strCategory}
          </option>
        ))}
      </select>

      <select
        onChange={(e) => setSelectedArea(e.target.value)}
        className="px-4 py-2 border rounded-lg shadow-sm text-gray-700"
      >
        <option value="">Select Area</option>
        {areas.map((area) => (
          <option key={area.strArea} value={area.strArea}>
            {area.strArea}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
