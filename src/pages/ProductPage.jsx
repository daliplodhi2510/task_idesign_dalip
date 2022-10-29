import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { ProductComponent } from '../components'
import { allProductAction } from '../redux/actions/productAction';


export const ProductPage = () => {
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
  return (
    <div className='container'>
      <ProductComponent />
    </div>
  )
}
