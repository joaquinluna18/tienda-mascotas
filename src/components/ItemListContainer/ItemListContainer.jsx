import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemListContainer.scss';


 function BasicExample() {
       return (
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Titulo</Card.Title>
                <Card.Text> 
                  Informacion del producto
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        }
        
        export default BasicExample;

