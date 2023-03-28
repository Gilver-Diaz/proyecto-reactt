import Nav from 'react-bootstrap/Nav';
import './nav.css'



function BasicExample() {
  return (
    <Nav className='navbar'
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='./navbar/logo-de-app.jpeg' >
         Logo
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default BasicExample;