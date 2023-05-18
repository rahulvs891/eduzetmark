import { useState } from 'react'
import './App.css'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slides from './Slides';
import PopUp from './PopUp';
function App() {
  const [select, setSelect] = useState(1);
  const [avg, setAvg] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    input1: 0,
    input2: 0,
    input3: 0,
    input4: 0,
    input5: 0,
    input6: 0,
  });

  const handleValueChange = (event) => {
    const { name, value } = event.target;
    const parsedValue = Number(value);
    if(parsedValue < 0 || parsedValue > 100){
      setError(name);
      console.log(error);
    }
    else{
    setError('')
    setValues((prevState) => ({
      ...prevState,
      [name]: Number(value),
    }));
    }
  };
 const calculateTotalSum = () => {
    const sum = Object.values(values).reduce((acc, curr) => acc + curr, 0);
    return sum;
  };
const handleCalculateClick = () => {
    const totalSum = calculateTotalSum();
    const totalAvg = ((totalSum / 600) * 100).toFixed(2);
    setAvg(totalAvg);
    setModalShow(true);

  };
const handleBothCalculateClick = () => {
    const totalSum = calculateTotalSum();
    const totalAvg = ((totalSum / 1200) * 100).toFixed(2);
    setAvg(totalAvg);
    setModalShow(true);
  };
  const radioHandler = (choice) =>{
    setSelect(choice);
    setValues({
    input1: 0,
    input2: 0,
    input3: 0,
    input4: 0,
    input5: 0,
    input6: 0,
  })
    setAvg(0);
  }
  return (
    <>
      <div className='total-container px-0 px-md-5 p-md-4 position-relative'>
        <img src='./assets/eduzet-logo.png' className='logo my-3'/>
        <div className='main-container shadow-lg  mx-md-5 '>
          <div className='left-carousel d-none d-md-block'>
              <Slides/>
          </div>
          <div className='form-container py-4 px-2 p-md-3'>
            <div className='px-3'>
              <Form>
                <Form.Label>Name<span>*</span></Form.Label>
                <Form.Control placeholder='Enter your Name' required />
                <Form.Label>Phone Number<span>*</span></Form.Label>
                <Form.Control placeholder='Enter your Phone Number' required/>
                <Form.Label className='mt-2'>What is the selected class for this mark list ?</Form.Label>
                  <div className='d-flex flex-row justify-content-around mt-2'>
                    <div className='select-item' style={{border: select ===1 ? '#0059ff 1px solid':'1px solid #d9d9d9' }}>
                    <Form.Check type="radio" label="+1 Mark List" name="radioGroup" value="option1" defaultChecked onChange={()=>{
                      radioHandler(1)
                    }} checked={select===1}/>
                   </div>
                    <div className='select-item' style={{border: select ===2 ? '#0059ff 1px solid':'1px solid #d9d9d9' }}>
                    <Form.Check type="radio" label="+2 Mark List" name="radioGroup" value="option1" onChange={()=>{
                      radioHandler(2)
                    }}  checked={select===2}/>
                    </div>
                    <div className='select-item' style={{border: select ===3 ? '#0059ff 1px solid':'1px solid #d9d9d9' }}>
                    <Form.Check type="radio" label="Both" name="radioGroup" value="option1"  onChange={()=>{
                      radioHandler(3)
                    }} checked={select===3}/>
                    </div>
                  </div>
                  {
                    select ===1 && 
                    <div className='row '>
                      <div className='col-12 col-sm-6  mt-2'>
                      <Form.Label>Subject 1</Form.Label>
                      <Form.Control placeholder='Enter your marks here' onChange={handleValueChange} maxLength='3' style={{border:error === 'input1'?'1px solid red':'1px solid #D9D9D9'}}name='input1' />
                      {error === 'input1' && <div className='error-message'>Mark should be within 0 and 100</div>}
                      </div>
                      <div className='col-12 col-sm-6  mt-2'>
                      <Form.Label>Subject 2</Form.Label>
                      <Form.Control placeholder='Enter your marks here' onChange={handleValueChange} maxLength='3' style={{border:error === 'input2'?'1px solid red':'1px solid #D9D9D9'}}name='input2'/>
                      {error === 'input2' && <div className='error-message'>Mark should be within 0 and 100</div>}
                      </div>
                      <div className='col-12 col-sm-6  mt-2'>
                      <Form.Label>Subject 3</Form.Label>
                      <Form.Control placeholder='Enter your marks here' onChange={handleValueChange} maxLength='3' style={{border:error === 'input3'?'1px solid red':'1px solid #D9D9D9'}}name='input3'/>
                      {error === 'input3' && <div className='error-message'>Mark should be within 0 and 100</div>}
                      </div>
                      <div className='col-12 col-sm-6  mt-2'>
                      <Form.Label>Subject 4</Form.Label>
                      <Form.Control placeholder='Enter your marks here' onChange={handleValueChange} maxLength='3' style={{border:error === 'input4'?'1px solid red':'1px solid #D9D9D9'}}name='input4'/>
                      {error === 'input4' && <div className='error-message'>Mark should be within 0 and 100</div>}
                      </div>
                      <div className='col-12 col-sm-6  mt-2'>
                      <Form.Label>Subject 5</Form.Label>
                      <Form.Control placeholder='Enter your marks here' onChange={handleValueChange} maxLength='3' style={{border:error === 'input5'?'1px solid red':'1px solid #D9D9D9'}}name='input5'/>
                      {error === 'input5' && <div className='error-message'>Mark should be within 0 and 100</div>}
                      </div>
                      <div className='col-12 col-sm-6  mt-2'>
                      <Form.Label>Subject 6</Form.Label>
                      <Form.Control placeholder='Enter your marks here' onChange={handleValueChange} maxLength='3' style={{border:error === 'input6'?'1px solid red':'1px solid #D9D9D9'}}name='input6'/>
                      {error === 'input6' && <div className='error-message'>Mark should be within 0 and 100</div>}
                      </div>
                      <Button style={{width:"6rem",backgroundColor:"#676AB1"}} className='mx-3 mt-4 border-0' onClick={handleCalculateClick}>Submit</Button>
                      <PopUp show={modalShow} onHide={() => setModalShow(false)} percentage = {avg}/>
                    </div>
                  }
                  {
                    select ===2 && 
                    <div className='row '>
                      <div className='col-12 col-sm-6  mt-2'>
                      <Form.Label>Subject 1</Form.Label>
                      <Form.Control placeholder='Enter your marks here' onChange={handleValueChange} maxLength='3' style={{border:error === 'input1'?'1px solid red':'1px solid #D9D9D9'}}name='input1' />
                      {error === 'input1' && <div className='error-message'>Mark should be within 0 and 100</div>}
                      </div>
                      <div className='col-12 col-sm-6  mt-2'>
                      <Form.Label>Subject 2</Form.Label>
                      <Form.Control placeholder='Enter your marks here' onChange={handleValueChange} maxLength='3' style={{border:error === 'input2'?'1px solid red':'1px solid #D9D9D9'}}name='input2'/>
                      {error === 'input2' && <div className='error-message'>Mark should be within 0 and 100</div>}
                      </div>
                      <div className='col-12 col-sm-6  mt-2'>
                      <Form.Label>Subject 3</Form.Label>
                      <Form.Control placeholder='Enter your marks here' onChange={handleValueChange} maxLength='3' style={{border:error === 'input3'?'1px solid red':'1px solid #D9D9D9'}}name='input3'/>
                      {error === 'input3' && <div className='error-message'>Mark should be within 0 and 100</div>}
                      </div>
                      <div className='col-12 col-sm-6  mt-2'>
                      <Form.Label>Subject 4</Form.Label>
                      <Form.Control placeholder='Enter your marks here' onChange={handleValueChange} maxLength='3' style={{border:error === 'input4'?'1px solid red':'1px solid #D9D9D9'}}name='input4'/>
                      {error === 'input4' && <div className='error-message'>Mark should be within 0 and 100</div>}
                      </div>
                      <div className='col-12 col-sm-6  mt-2'>
                      <Form.Label>Subject 5</Form.Label>
                      <Form.Control placeholder='Enter your marks here' onChange={handleValueChange} maxLength='3' style={{border:error === 'input5'?'1px solid red':'1px solid #D9D9D9'}}name='input5'/>
                      {error === 'input5' && <div className='error-message'>Mark should be within 0 and 100</div>}
                      </div>
                      <div className='col-12 col-sm-6  mt-2'>
                      <Form.Label>Subject 6</Form.Label>
                      <Form.Control placeholder='Enter your marks here' onChange={handleValueChange} maxLength='3' style={{border:error === 'input6'?'1px solid red':'1px solid #D9D9D9'}}name='input6'/>
                      {error === 'input6' && <div className='error-message'>Mark should be within 0 and 100</div>}
                      </div>
                      <Button style={{width:"6rem",backgroundColor:"#676AB1"}} className='mx-3 mt-4 border-0' onClick={handleCalculateClick}>Submit</Button>
                      <PopUp show={modalShow} onHide={() => setModalShow(false)} percentage = {avg}/>
                    </div>
                  }
                  {
                    select ===3 && 
                    <div className='row '>
                      
                      <div className='col-12 col-sm-6  mt-2'>
                      <Form.Label>Subject 1</Form.Label>
                        <div className='d-flex gap-3'>
                          <div className='d-flex flex-column'>
                          <Form.Control placeholder='+1 Marks' onChange={handleValueChange} maxLength='3' style={{border:error === 'input1'?'1px solid red':'1px solid #D9D9D9'}}name='input1' />
                          {error === 'input1' && <div className='error-message'>Mark should be within 0 and 100</div>}
                          </div>
                          <div className='d-flex flex-column'>
                          <Form.Control placeholder='+2 Marks' onChange={handleValueChange} maxLength='3' style={{border:error === 'input2'?'1px solid red':'1px solid #D9D9D9'}}name='input2' />
                          {error === 'input2' && <div className='error-message'>Mark should be within 0 and 100</div>}
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-sm-6  mt-2'>
                      <Form.Label>Subject 2</Form.Label>
                        <div className='d-flex gap-3'>
                          <div className='d-flex flex-column'>
                          <Form.Control placeholder='+1 Marks' onChange={handleValueChange} maxLength='3' style={{border:error === 'input3'?'1px solid red':'1px solid #D9D9D9'}}name='input3' />
                          {error === 'input3' && <div className='error-message'>Mark should be within 0 and 100</div>}
                          </div>
                          <div className='d-flex flex-column'>
                          <Form.Control placeholder='+2 Marks' onChange={handleValueChange} maxLength='3' style={{border:error === 'input4'?'1px solid red':'1px solid #D9D9D9'}}name='input4' />
                          {error === 'input4' && <div className='error-message'>Mark should be within 0 and 100</div>}
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-sm-6  mt-2'>
                      <Form.Label>Subject 3</Form.Label>
                        <div className='d-flex gap-3'>
                          <div className='d-flex flex-column'>
                          <Form.Control placeholder='+1 Marks' onChange={handleValueChange} maxLength='3' style={{border:error === 'input5'?'1px solid red':'1px solid #D9D9D9'}}name='input5' />
                          {error === 'input5' && <div className='error-message'>Mark should be within 0 and 100</div>}
                          </div>
                          <div className='d-flex flex-column'>
                          <Form.Control placeholder='+2 Marks' onChange={handleValueChange} maxLength='3' style={{border:error === 'input6'?'1px solid red':'1px solid #D9D9D9'}}name='input6' />
                          {error === 'input6' && <div className='error-message'>Mark should be within 0 and 100</div>}
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-sm-6  mt-2'>
                      <Form.Label>Subject 4</Form.Label>
                        <div className='d-flex gap-3'>
                          <div className='d-flex flex-column'>
                          <Form.Control placeholder='+1 Marks' onChange={handleValueChange} maxLength='3' style={{border:error === 'input7'?'1px solid red':'1px solid #D9D9D9'}}name='input7' />
                          {error === 'input7' && <div className='error-message'>Mark should be within 0 and 100</div>}
                          </div>
                          <div className='d-flex flex-column'>
                          <Form.Control placeholder='+2 Marks' onChange={handleValueChange} maxLength='3' style={{border:error === 'input8'?'1px solid red':'1px solid #D9D9D9'}}name='input8' />
                          {error === 'input8' && <div className='error-message'>Mark should be within 0 and 100</div>}
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-sm-6  mt-2'>
                      <Form.Label>Subject 5</Form.Label>
                        <div className='d-flex gap-3'>
                          <div className='d-flex flex-column'>
                          <Form.Control placeholder='+1 Marks' onChange={handleValueChange} maxLength='3' style={{border:error === 'input9'?'1px solid red':'1px solid #D9D9D9'}}name='input9' />
                          {error === 'input9' && <div className='error-message'>Mark should be within 0 and 100</div>}
                          </div>
                          <div className='d-flex flex-column'>
                          <Form.Control placeholder='+2 Marks' onChange={handleValueChange} maxLength='3' style={{border:error === 'input10'?'1px solid red':'1px solid #D9D9D9'}}name='input10' />
                          {error === 'input10' && <div className='error-message'>Mark should be within 0 and 100</div>}
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-sm-6  mt-2'>
                      <Form.Label>Subject 6</Form.Label>
                        <div className='d-flex gap-3'>
                          <div className='d-flex flex-column'>
                          <Form.Control placeholder='+1 Marks' onChange={handleValueChange} maxLength='3' style={{border:error === 'input11'?'1px solid red':'1px solid #D9D9D9'}}name='input11' />
                          {error === 'input11' && <div className='error-message'>Mark should be within 0 and 100</div>}
                          </div>
                          <div className='d-flex flex-column'>
                          <Form.Control placeholder='+2 Marks' onChange={handleValueChange} maxLength='3' style={{border:error === 'input12'?'1px solid red':'1px solid #D9D9D9'}}name='input12' />
                          {error === 'input12' && <div className='error-message'>Mark should be within 0 and 100</div>}
                          </div>
                        </div>
                      </div>
                      
                      <Button style={{width:"6rem",backgroundColor:"#676AB1"}} className='mx-3 mt-4 border-0' onClick={handleBothCalculateClick}>Submit</Button>
                      <PopUp show={modalShow} onHide={() => setModalShow(false)} percentage = {avg}/>
                    </div>
                  }
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
