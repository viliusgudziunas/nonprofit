import React from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import './App.scss';

const App: React.FC = () => {
  return (
    <Container className='app'>
      <div className='header'>
        <div className='logo'>KITA || PERSPEKTYVA</div>
        <br />
        <div className='navigation'>
          <div>Pagrindinis</div>
          <div className='nav-gap'>|</div>
          <div>Apie mus</div>
          <div className='nav-gap'>|</div>
          <div>Straipsniai</div>
          <div className='nav-gap'>|</div>
          <div>Susisiek</div>
          <div className='nav-gap'>|</div>
          <div className='test'>Paremk mūsų veiklą</div>
        </div>
      </div>
      <hr />
      <div className='content'>
        <p>
          ‘Kita Perspektyva’- tai ne pelno siekianti organizacija. Mūsų misija
          yra skleisti tarpdisciplininę informaciją, potencialiai gerinančią
          Lietuvos gyventojų psichologinį gerbuvį.{' '}
        </p>
        <p>
          Ateityje tikimės, jog mūsų organizacija ne tik taps vienu esminių
          elementų Lietuvos visuomenės psichologinės sveikatos gerinimo
          mechanizme, bet taip pat ir prisidės prie bazinių psichologinių žinių
          ir savipagalbos paskaitų įtraukimo į švietimo sistemą.
        </p>
        <p>
          Šiame puslapyje dalinsimės informacija apie emocijų ir kūrybos svarbą,
          priklausomybes, psichoterapiją, savipagalbą bei teorines ir praktines
          žinias apie psichiką, protą ir jų ryšį su kūnu.
        </p>
        <p>Jei norite užsiprenumeruoti mūsų naujienlaiškį spauskite čia.</p>
        <div className='form'>
          <Form>
            <Form.Row className='align-items-center'>
              <Col xs='auto'>
                <Form.Label srOnly>Vardas</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Vardas'
                  className='mb-2'
                />
              </Col>
              <Col xs='auto'>
                <Form.Label srOnly>El. paštas</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='El. paštas'
                  className='mb-2'
                />
              </Col>

              <Col xs='auto'>
                <Button className='mb-2' variant='outline-secondary'>
                  Submit
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </div>
      </div>
      <hr />
      <div className='footer'>
        <div className='info'>Kiti resursai</div>
      </div>
    </Container>
  );
};

export default App;
