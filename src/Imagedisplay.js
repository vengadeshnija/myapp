import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImageSearch from "./ImageSearch"

function Imagedisplay(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.des}</Card.Title>
        
         
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Imagedisplay;