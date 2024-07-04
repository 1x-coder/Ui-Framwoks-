import { Navbar, Nav } from 'rsuite';
import CogIcon from '@rsuite/icons/legacy/Cog';
import { Form, Button, ButtonToolbar, Schema, Panel } from 'rsuite';

const { StringType } = Schema.Types;
const model = Schema.Model({
  name: StringType().isRequired('This field is required.'),
  email: StringType()
    .isEmail('Please enter a valid email address.')
    .isRequired('This field is required.')
});

function TextField(props) {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-3`}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
}


function App() {
  

  return (
    <>
      <Navbar>
    <Navbar.Brand href="#">RSUITE</Navbar.Brand>
    <Nav>
      <Nav.Item>Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Menu title="About">
        <Nav.Item>Company</Nav.Item>
        <Nav.Item>Team</Nav.Item>
        <Nav.Menu title="Contact">
          <Nav.Item>Via email</Nav.Item>
          <Nav.Item>Via telephone</Nav.Item>
        </Nav.Menu>
      </Nav.Menu>
    </Nav>
    <Nav pullRight>
      <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
    </Nav>
  </Navbar>
  <br/>
  <Form model={model}>
      <TextField name="name" label="Username" />
      <TextField name="email" label="Email" />
      <ButtonToolbar>
        <Button appearance="primary" type="submit">
          Submit
        </Button>
      </ButtonToolbar>
    </Form>
    </>
  )
}

export default App
