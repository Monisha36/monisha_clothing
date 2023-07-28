import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} aria-colcount={`${name}`} />
            <div className='item-details'>
                <span className='name'>{name}</span>
            </div>
            <span className='price'>
                {quantity} * ₹{price}
            </span>
        </div>
    );
};

export default CartItem;