import React from 'react'
import { Link } from 'react-router-dom';
import { Offcanvas, NavLink } from 'react-bootstrap';

const SideBar = () => {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false); //onHide={handleClose}
    // const handleShow = () => setShow(true);
    
    return(
        <>
            <Offcanvas show={true} backdrop={false} enforceFocus={false} className='side-bar'>
                <Offcanvas.Header>
                    <Offcanvas.Title><b>Health Tracker</b></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <NavLink as={Link} to="/" className='sidebar-link'>
                        Dashboard Home
                    </NavLink>
                    <NavLink as={Link}  to="/exercise" className='sidebar-link'>
                        Exercise
                    </NavLink>
                        <NavLink as={Link}  to="/exercise/add" className='sidebar-sub-link'>
                            Add Exercise
                        </NavLink>
                        <NavLink as={Link}  to="/exercise/byDate" className='sidebar-sub-link'>
                            View By Date
                        </NavLink>
                    <NavLink as={Link}  to="/food" className='sidebar-link'>
                        Food
                    </NavLink>
                        <NavLink as={Link}  to="/food/add" className='sidebar-sub-link'>
                            Add Food
                        </NavLink>
                    <NavLink as={Link}  to="/water" className='sidebar-link'>
                        Water
                    </NavLink>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default SideBar;