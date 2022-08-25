import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemListContainer.scss';
import Hola from './Hola/Hola';

 function ItemListContainer() {
       return (
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>
                <Hola></Hola>
                  </Card.Title>
                <Card.Text> 
                  Informacion del producto
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        }

 export default ItemListContainer;
        

