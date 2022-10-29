import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const ProductCategoryComponent = () => {
    const categories = useSelector((state)=>state.allCategories.products);
  return (
    <div className='row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2'>
        {
            categories.map((item) =>  (
            <div className='productPage' key={item.id}>
                <Link to={`/product/${item.id}`}>
                    <div className='img'>
                        <img src={item.images[0]} alt={item.title} className='img-fluid' />
                    </div>
                    <div className='content'>
                        <p className='cats'>category: {item.category}</p>
                    </div>
                </Link>
            </div>
            ))
        }
    </div>
  )
}
