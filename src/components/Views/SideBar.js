import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Offcanvas, NavLink } from 'react-bootstrap';
import AddWeight from '../BodyMetrics/Weight/AddWeight';
import WaterSidebar from '../Water/WaterSidebar';
import ExerciseAddModal from '../Exercise/FormComponents/ExerciseAddModal';
import AddFoodModal from '../Food/FormComponents/AddFoodModal';

const SideBar = (props) => {
    const isAuthenticated = useSelector((state) => state.userState.isAuthenticated)
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false); //onHide={handleClose}
    // const handleShow = () => setShow(true);
    
    return(
        <>
            <Offcanvas show={true} backdrop={false} enforceFocus={false} className='side-bar'>
                <Offcanvas.Header>
                    <Offcanvas.Title><b>Health Tracker</b></Offcanvas.Title>
                </Offcanvas.Header>
            {isAuthenticated ? 
                <Offcanvas.Body>
                    <NavLink as={Link} to="/" className='sidebar-link'>
                        Dashboard Home
                    </NavLink>
                    <NavLink as={Link}  to="/exercise" className='sidebar-link'>
                        Exercise
                    </NavLink>
                        <ExerciseAddModal onSidebar={true}/>
                        <NavLink as={Link}  to="/exercise/byDate" className='sidebar-sub-link'>
                            View By Date
                        </NavLink>
                        <NavLink as={Link}  to="/exercise/exerciseGraph" className='sidebar-sub-link'>
                            Exercise Graph
                        </NavLink>
                    <NavLink as={Link}  to="/food" className='sidebar-link'>
                        Food
                    </NavLink>
                        <AddFoodModal onSidebar={true}/>
                        <NavLink as={Link}  to="/food/byDate" className='sidebar-sub-link'>
                            View By Date
                        </NavLink>
                        <NavLink as={Link}  to="/food/foodGraph" className='sidebar-sub-link'>
                            Food Graph
                        </NavLink>
                    <NavLink as={Link}  to="/water" className='sidebar-link'>
                        Water
                    </NavLink>
                        <WaterSidebar />
                    <NavLink as={Link}  to="/weight" className='sidebar-link'>
                        Weight
                    </NavLink>
                        <AddWeight onSidebar={true}/>
                        <NavLink as={Link}  to="/weight/weightGraph" className='sidebar-sub-link'>
                            Weight Graph
                        </NavLink>
                    <NavLink as={Link}  to="/healthGoals" className='sidebar-link'>
                        Health Goals
                    </NavLink>
                </Offcanvas.Body>
            : '' }
            </Offcanvas>
        </>
    )
}

export default (SideBar);