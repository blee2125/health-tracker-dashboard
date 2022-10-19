import React, {useState} from 'react'
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
                    <NavLink  href="/" className='sidebar-link'>
                        Dashboard Home
                    </NavLink>
                    <NavLink  href="/exercise" className='sidebar-link'>
                        Exercise
                    </NavLink>
                        <NavLink  href="/exercise/add" className='sidebar-sub-link'>
                            Add New
                        </NavLink>
                    <NavLink  href="/food" className='sidebar-link'>
                        Food
                    </NavLink>
                        <NavLink  href="/food/add" className='sidebar-sub-link'>
                            Add New
                        </NavLink>
                    <NavLink  href="/water" className='sidebar-link'>
                        Water
                    </NavLink>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    )
}

export default SideBar;