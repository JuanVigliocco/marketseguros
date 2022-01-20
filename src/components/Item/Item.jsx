import { Card, Button }  from "react-bootstrap"



const Item = ({ item }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://segurosypensionesparatodos.fundacionmapfre.org/media/seguros/seguros-personales-700x335-1.png" />
            <Card.Body>
                <Card.Title>Seguros</Card.Title>
                <Card.Text>
                Podras encontrar una gran variedad de seguros para autos y contratar el que mejor se adapte a tus necesidades.
                </Card.Text>
                
                <Button variant="primary">Mas Información</Button>
            </Card.Body>
            
        </Card>
        
    );
}

export default Item