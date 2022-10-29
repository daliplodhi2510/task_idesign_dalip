import { Link } from 'react-router-dom';
import React from 'react'
import { useSelector } from 'react-redux';
import './productPage.scss';
import { AttachMoney, Star } from '@mui/icons-material';

export const ProductComponent = () => {
    const products = useSelector((state)=>state.allProducts.products);
    return (
        <div className='row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2'>
            {
               products.map((item) =>  (
                <div className='productPage' key={item.id}>
                    <Link to={`/product/${item.id}`}>
                        <div className='ribbon d-flex flex-column align-items-end'>
                            <p className='rating d-flex align-items-center'>{item.rating} <Star /></p>
                            <p className='brand'>{item.brand}</p>
                        </div>
                        <div className='img'>
                            <img src={item.thumbnail} alt={item.title} className='img-fluid' />
                        </div>
                        <div className='content'>
                            <h2>{item.title}</h2>
                            <p className='desc'>{item.description}</p>
                            <div className='d-flex justify-content-between flex-end curr_dis'>
                                <h4><AttachMoney /> {item.price}</h4>
                                <p>Discount: {item.discountPercentage}</p>
                            </div>
                            <p className='cats'>category: {item.category}</p>
                        </div>
                    </Link>
                </div>
               ))
            }
        </div>
    )
}

// products.map((product)=>{
//     const {id, title, image, price, category} = product;
//     return (
//         <div className='four wide column' key={id}>
//             <Link to={`/product/${id}`}>
//                 <div className='ui link cards'>
//                     <div className='card'>
//                         <div className='image'>
//                             <img src={image} alt={title} />
//                         </div>
//                         <div className='content'>
//                             <div className='header'>{title}</div>
//                             <div className='meta price'>$ {price}</div>
//                             <div className='meta'>{category}</div>
//                         </div>
//                     </div>
//                 </div>
//             </Link>
//         </div>
//     );
// });