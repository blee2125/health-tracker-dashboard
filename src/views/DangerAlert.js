import React from 'react';
import { Alert } from 'react-bootstrap';

function DangerNotification(props) {

  return (
    <>
      <Alert show={props.showDangerNotification} variant="danger" onClick={() => props.setShowDangerNotification(false)}>
          {props.dangerNotification ? props.dangerNotification : "no message yet"}
      </Alert>
    </>
  );
}

export default DangerNotification