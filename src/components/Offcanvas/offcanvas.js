import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const OffCanvasBtn = (props) => {
    let description = props.data;
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2 buttonclass">
        Description
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Here is the breif description:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Loren Ipsum KJFJF bj dj jwenjwe jefjweej wec jeefjwe ejef jf je j e qej e jq nf2ejdo3nefnrvf nkqkwee.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

// function Example() {
//   return (
//     <>
//       {["start", "end", "top", "bottom"].map((placement, idx) => (
//         <OffCanvasBtn key={idx} placement={placement} name={placement} />
//       ))}
//     </>
//   );
// }

export default OffCanvasBtn;
