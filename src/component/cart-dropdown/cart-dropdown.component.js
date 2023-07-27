import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-item'>
                <Button>Go to Checkout</Button>
            </div>
        </div>
    )
}

export default CartDropdown;