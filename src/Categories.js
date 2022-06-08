import React from 'react';

const Categories = ({categories, filterItems}) => {
  return <div className='btn-container'>
    {
      categories.map((category, i) => <button key={i} className='filter-btn' onClick={() => filterItems(category)}>{category}</button>)
    }
  </div>;
};

export default Categories;
