import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-itme.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const gotoCheckoutHandler = () => {
        navigate('/checkout')
    }
    
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-item'>
              {cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item}/>
              ))}
            </div>
            <Button onClick={gotoCheckoutHandler}>Go to Checkout</Button>
        </div>
    )
}

export default CartDropdown;