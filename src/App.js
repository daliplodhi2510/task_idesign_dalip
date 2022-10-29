import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductCategoryPage, ProductDetailPage, ProductPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductPage />} />
        <Route path='/product/:id' element={<ProductDetailPage />} />
        <Route path='/categories' element={<ProductCategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
