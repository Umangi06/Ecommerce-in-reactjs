import React from 'react';
import Data from"../products.json"

const ShopCategory = ({ filterItem, setItems, menuItems, setProducts, selectedCategory, data }) => {
  return (
    <>
      <div className='widget-header'>
        <h5 className='ms-2'>All Categories</h5>
      </div>
      <div>
        <button  onClick={() => setProducts(Data)} className={`m-2 ${selectedCategory === "All" 
        ? "bg-warning" : ""}`}>All</button>
        {menuItems.map((Val, id) => (
          <button 
           className={`m-2 ${selectedCategory === Val ? "bg-warning" : ""}`}
            key={id}
            onClick={() => filterItem(Val)}
          >
            {Val}
          </button>
        ))}
      </div>
      <div>
        {data && Array.isArray(data) && data.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </>
  );
};

export default ShopCategory;
