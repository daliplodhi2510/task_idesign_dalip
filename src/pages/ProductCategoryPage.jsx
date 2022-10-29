import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ProductCategoryComponent } from '../components';
import { allCategoriesAction, allProductAction } from '../redux/actions/productAction';

export const ProductCategoryPage = () => {
    const products = useSelector((state)=>state.allProducts.products);
    const dispatch = useDispatch();
        
    const fetchProducts = async () =>{
        const resp = await axios
        .get('https://dummyjson.com/products?limit=100')
        .catch(error => console.log(error));
        dispatch(allProductAction(resp.data.products));
    }
    useEffect(()=>{
        fetchProducts();
    }, []);

    const cats = [];
    products.forEach((item)=>{
        let i = cats.findIndex(x => x.category === item.category);
        if(i <= -1){
            cats.push({id: item.id, images: item.images, category: item.category});
        }
    });
    dispatch(allCategoriesAction(cats));

  return (
    <div className='container'>
        <ProductCategoryComponent />
    </div>
  )
}
