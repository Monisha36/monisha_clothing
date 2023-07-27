import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.contexts';
import ProductCard from '../../component/product-card/product-card.component';
import './shop.styles.scss';

const Shop = () => {
    const {products} = useContext(ProductsContext);
    return (
        <div className='products-container'>
            {products.map((product) => {
                return(
                <ProductCard ky={product.id} product={product} />
                );
            })}
        </div>
    )
}
export default Shop;
