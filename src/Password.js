import { Form ,Row,Col, Button } from "react-bootstrap";



export default function PasswordScreen(){




    const HandleP = () =>{
        console.log('click')
    }


    return <Form onSubmit={HandleP}>
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
        Email
      </Form.Label>
      <Col sm="10">
        <Form.Control plaintext readOnly defaultValue="email@example.com" />
      </Col>
    </Form.Group>
  
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
      <Form.Label column sm="2">
        Password
      </Form.Label>
      <Col sm="10">
        <Form.Control type="password" autoComplete="username" />
      </Col>
    </Form.Group>

    <Button variant="danger">Danger</Button> 
  </Form>
}