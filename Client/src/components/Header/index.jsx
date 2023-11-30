import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faBars, faComment } from "@fortawesome/free-solid-svg-icons"
// import Auth from '../../utils/auth';
// import Searchbar from './Searchbar';
// import CartBtn from './CartBtn';

export default function Header () {
  // const logout = (e) => {
  //   e.preventDefault();
  //   Auth.logout();
  // };

  return (
    <Nav className='bg-dark d-flex justify-content-between'>
      <NavDropdown  title="Sweat Check" id="nav-dropdown" className='ps-2 d-flex align-items-center justify-content-center'>
        <NavDropdown.Item >Feed 1</NavDropdown.Item>
        <NavDropdown.Item >Feed 2</NavDropdown.Item>
        <NavDropdown.Item >Feed 3</NavDropdown.Item>
      </NavDropdown>
      <div className='d-flex'>
        <Nav.Item className='p-1'>
          <Link to={'/messages'}>
            <FontAwesomeIcon icon={faMessage} style={{color: "#ffffff",}} className='message-icon'/>
          </Link>
        </Nav.Item>
        <Nav.Item className='p-1'>
          <Nav.Link >
            <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} className='menu-icon'/>
          </Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};
