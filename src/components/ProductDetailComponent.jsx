import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { removeSelectedProductAction, selectedProductAction } from '../redux/actions/productAction';

export const ProductDetailComponent = () => {
    const product = useSelector((state)=>state.product);
    const dispatch = useDispatch();
    const {id} = useParams();
    const fetchProductDetail = async () => {
        const response = await axios.
        get(`https://dummyjson.com/products/${id}`)
        .catch((error) => {
            console.log(error);
        });
        dispatch(selectedProductAction(response.data));
    }
    useEffect(()=>{
        if(id && id !== '') fetchProductDetail();
        return ()=> {
            dispatch(removeSelectedProductAction());
        }
    }, [id]);
    console.log(product);
    return (
        <div>
            {
                Object.keys(product).length === 0 ? (
                    <div>Loading....</div>
                ) : (
                    <div className='d-flex'>
                        <div>
                            <img src={product.thumbnail} alt={product.title} />
                        </div>
                        <div>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p>{product.brand}</p>
                            <p>{product.discountPercentage}</p>
                            <p>{product.rating}</p>
                            <p>{product.stock}</p>
                            <p>{product.price}</p>
                            <p>{product.category}</p>
                            <div>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
