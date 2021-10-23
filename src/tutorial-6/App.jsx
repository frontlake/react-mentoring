import { Nav, Navbar, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.module.css';

export default function App() {
  const { pathname } = window.location;

  const postId = pathname.split('/');

  return (
    <div className="App">
      <header>
        <h2>
          <a href="/">React Blog</a>
        </h2>
        <Nav variant="pills" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link eventKey="/home" href="/">
              Главная
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/about" href="/about">
              Обо мне
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/profile" href="/profile">
              Профиль
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
      {pathname === '/' && (
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150x150" />
              <Card.Body>
                <Card.Title>
                  <a href="/post/1">Card title</a>
                </Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
      {pathname.includes('/post/') && (
        <Row md={1} className="justify-content-md-center">
          <Col>
            <Card>
              <Card.Header>
                <h1>Статья № {postId[postId.length - 1]}</h1>
              </Card.Header>
              <Card.Img variant="top" src="https://via.placeholder.com/100x20" />
              <Card.Body>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto libero
                  dignissimos impedit. Consectetur a eligendi at deserunt nam eveniet aliquid, vel
                  harum sunt cum? Similique ab eligendi dicta architecto placeat illo suscipit
                  dolore repellendus tempore distinctio, aperiam cumque molestiae nisi quas
                  incidunt! Optio provident iste corrupti, exercitationem, iusto atque amet, iure
                  voluptates porro molestiae quo dolorum repellat vel? Totam autem, impedit
                  molestias aliquam esse cumque. Praesentium aliquid quidem laboriosam minus quas
                  enim est odit. Quasi, nisi ratione rerum voluptatem tenetur molestias! Perferendis
                  est dicta deleniti iusto architecto illo, tempore quisquam blanditiis molestiae
                  ad, perspiciatis corporis repellat, magnam ipsum consectetur?
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a href="/">
                  <Button variatn="link">Назад</Button>
                </a>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      )}
      {pathname === '/about' && (
        <Card>
          <Card.Body>Это мой личный сайт!</Card.Body>
        </Card>
      )}
      <br />
      <Navbar bg="light" style={{ paddingLeft: 20 }} fixed="bottom">
        <Navbar.Brand href="#home">My site (c) 2021</Navbar.Brand>
      </Navbar>
    </div>
  );
}
