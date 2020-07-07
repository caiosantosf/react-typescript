import * as React from 'react';

import { Button, Container, Form, Grid, Header } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';

import CombustivelStore from './store';
import NewRouterStore from '../../mobx/router.store';

interface Props {
  router: NewRouterStore;
  combustivel: CombustivelStore;
}

@inject('router', 'combustivel')
@observer
export default class Combustivel extends React.Component<Props> {

  render() {

    const { etanol, gasolina, submit, handleForm } = this.props.combustivel;

    const submitForm = (e) => {
      e.preventDefault();
      submit();
    }

    return (
      <Container>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header color='blue' as='h2'>
                <Header.Content>
                  Combustível
                 <Header.Subheader>Etanol ou Gasolina?</Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Form onSubmit={submitForm}>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Preço da Gasolina</label>
              <input step="any" max="99" value={gasolina} name='gasolina' onChange={handleForm} 
              type='number' placeholder='ex: R$ 3.95' />
            </Form.Field>
            <Form.Field>
              <label>Preço do Etanol</label>
              <input step="any" max="99" value={etanol} name='etanol' onChange={handleForm} 
              type='number' placeholder='ex: R$ 2.85' />
            </Form.Field>
          </Form.Group>
          <Button type='submit'>Calcular</Button>
        </Form>
      </Container>
    );
  }
}