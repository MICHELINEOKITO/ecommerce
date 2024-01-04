import './Navbar.css';
import logo from '../assets/logo.png'
import cart from '../assets/cart-icone.png'

const navbar = () =>{


    return(
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li>Shop</li>
                <li>Men</li>
                <li>Woman</li>
                <li>Kids</li>
            </ul>
            <div className='nav-login-cart'>
                <button>Login</button>
                <img src={cart} alt="" />

            </div>
        </div>
    )
}

export default navbar;
