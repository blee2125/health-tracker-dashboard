import React from 'react'
import { Link } from 'react-router-dom';
import { Offcanvas, NavLink, Button, ButtonGroup } from 'react-bootstrap';

import { connect, useSelector } from "react-redux";
import { createWater, updateWater, getWaterByDate } from "../../reducers/waterSlice";
import DateFunctions from '../../functions/DateFunctions';

const SideBar = (props) => {

    const glasses = useSelector((state) => state.waterState.glasses)
    const id = useSelector((state) => state.waterState.id)
    const userToken = useSelector((state) => state.userState.user.token)
    const dateStringSplit = DateFunctions.createDateStringSplit()

    const handleAddGlasses = () => {
        if (id === null || undefined) {
          handlePostRequest()
        } else {
        props.updateWater({id: id, data: {glasses: glasses+1}, token: userToken})
          .unwrap()
          .then((data) => {
            
          })
          .catch((e) => {
            console.log(e);
          });
        }
    };

    const handleSubtractGlasses = () => {
        props.updateWater({id: id, data: {glasses: glasses-1}, token: userToken})
          .unwrap()
          .then((data) => {
            
          })
          .catch((e) => {
            console.log(e);
          });
    };
    
      const handlePostRequest = () => {
        props.createWater({data: {glasses: glasses + 1, date: dateStringSplit}, token: userToken})
          .unwrap()
          .then((data) => {
            
          })
          .catch((e) => {
            console.log(e);
          });
    }
    
    

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
                        <NavLink as={Link}  to="/exercise/exerciseGraph" className='sidebar-sub-link'>
                            Exercise Graph
                        </NavLink>
                    <NavLink as={Link}  to="/food" className='sidebar-link'>
                        Food
                    </NavLink>
                        <NavLink as={Link}  to="/food/add" className='sidebar-sub-link'>
                            Add Food
                        </NavLink>
                        <NavLink as={Link}  to="/food/byDate" className='sidebar-sub-link'>
                            View By Date
                        </NavLink>
                        <NavLink as={Link}  to="/food/foodGraph" className='sidebar-sub-link'>
                            Food Graph
                        </NavLink>
                    <NavLink as={Link}  to="/water" className='sidebar-link'>
                        Water 
                        
                    </NavLink>
                        <ButtonGroup>
                            {glasses > 0 ? <Button variant="danger"  onClick={handleSubtractGlasses}>-</Button> : <Button variant="secondary" onClick={handleSubtractGlasses} disabled>-</Button>}
                            <Button variant="secondary" disabled>{glasses}</Button>
                            <Button onClick={handleAddGlasses}>+</Button>
                        </ButtonGroup>
                    <NavLink as={Link}  to="/weight" className='sidebar-link'>
                        Weight
                    </NavLink>
                        <NavLink as={Link}  to="/weight/addWeight" className='sidebar-sub-link'>
                            Add Weight
                        </NavLink>
                        <NavLink as={Link}  to="/weight/weightGraph" className='sidebar-sub-link'>
                            Weight Graph
                        </NavLink>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default connect(null, { createWater, updateWater, getWaterByDate }) (SideBar);