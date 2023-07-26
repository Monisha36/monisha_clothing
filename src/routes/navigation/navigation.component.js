import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';
import { UserContext } from '../../contexts/users.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);


  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
              <span className='nav-link' onClick={signOutUser}>
                SIGN OUT
              </span>
            ) : (
              <Link className='nav-link' to='/auth'>
                SIGN IN
              </Link>
            )}

        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;