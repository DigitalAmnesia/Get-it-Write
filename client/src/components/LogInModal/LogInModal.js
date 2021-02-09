import React, {setState, useState, state} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'


const LogInModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;
 
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [state, setState] = useState({
      email: "", password: "", username: ""
  });

  const handleEmailChange = (e) => {
     
      setState({email:e.target.value})
      
  }
  const handlePasswordChange = (e) => {
    
    setState({password:e.target.value})
}
const handleUsernameChange = (e) => {
    
    setState({username:e.target.value})
}
const submitForm = (e) => {
    e.preventDefault()
    let logIn= { password: state.password, username: state.username, email: state.email}
    
    axios.post("api/auth", logIn).then(res => {console.log(res)})
}
  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Log In</ModalHeader>
        <ModalBody>
        <form onSubmit={submitForm}>

        <label for="username" sm={2}>username</label>
     
     <input type="text" onChange={handleUsernameChange} value={state.username} name="username" id="username" placeholder="username" />
  
     
        <label for="exampleEmail" sm={2}>Email</label>
     
          <input type="email" onChange={handleEmailChange} value={state.email} name="email" id="exampleEmail" placeholder="with a placeholder" />
       
    
    
        <label for="examplePassword" sm={2}>Password</label>
       
          <input type="password" onChange={handlePasswordChange} value={state.password} name="password" id="examplePassword" placeholder="password placeholder" />
        <input type="submit" value="Submit" />
      
      </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default LogInModal;