import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
function PopUp(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='d-flex justify-content-center'>
        <div className='d-flex justify-content-center'>
        <h2 style={{color:"#052460"}}>You have secured</h2>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex flex-column justify-content-center align-items-center gap-4'>
            
            <div className='d-flex justify-content-center align-items-center' style={{width:"10rem", height:"10rem" , backgroundColor:"#600557",borderRadius:"50%"}}>
                <div className='d-flex justify-content-center align-items-center' style={{width:"8rem", height:"8rem" , backgroundColor:"#CC5990",borderRadius:"50%"}}>
                    <h1 className='text-white'>{props.percentage}%</h1>
                </div>
            </div>
        <Button onClick={props.onHide} style={{backgroundColor:"#676AB1"}}>Close</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default PopUp