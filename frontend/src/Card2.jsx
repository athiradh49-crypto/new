import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card2(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.department}</Card.Title>
        <Card.Text>
          {props.description}
        
        </Card.Text>
        <Button variant="primary" onClick={()=>props.setSelcomplaint(props.item)}>view complaint </Button>
        <button variant="danger" onClick={()=>props.deleteComplaint(props.index)}>Delete</button>
      </Card.Body>
    </Card>
  );
}

export default Card2;