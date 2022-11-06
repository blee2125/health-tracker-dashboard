import React, { useEffect} from 'react';
import { Alert } from 'react-bootstrap';

function DangerNotification(props) {      

  useEffect(() => {
    const timer = setTimeout(() => {
      props.setShowDangerNotification(false);
    }, 3000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [props.showDangerNotification])

  return (
    <>
      <Alert show={props.showDangerNotification} variant="danger" onClick={() => props.setShowDangerNotification(false)}>
          <b>{props.dangerNotification ? props.dangerNotification : ""}</b>
      </Alert>
    </>
  );
}

export default DangerNotification