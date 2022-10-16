import React, {useState} from 'react'
import { Offcanvas, NavLink } from 'react-bootstrap';

const SideBar = () => {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false); //onHide={handleClose}
    // const handleShow = () => setShow(true);
    
    return(
        <>
            <Offcanvas show={true} backdrop={false} className='side-bar'>
                <Offcanvas.Header>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <NavLink  href="/home" className='sidebar-link'>
                        Dashboard Home
                    </NavLink>
                    <NavLink  href="/exercise" className='sidebar-link'>
                        Exercise
                    </NavLink>
                    <NavLink  href="/food" className='sidebar-link'>
                        Food
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