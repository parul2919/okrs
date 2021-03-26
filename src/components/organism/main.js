import React, {useEffect} from 'react';
import {Container,Row, Col } from 'react-bootstrap';
import { dataFetcher } from '../../common/js/dataFetcher';
import Filters from '../molecule/filters/filters'
import OkrsWrapper from '../molecule/okrsWrapper/okrsWrapper'
import { ContextApiConsumer } from '../../config/contextApi';

const Main = props => {
    useEffect(() => {
        onLoadApiCall();
    }, []);
    const { updateContextData } = props;
    /**
   * On load call
   * @Method : calling 'https://okrcentral.github.io/sample-okrs/db.json '  api
   * Printing data on load
   * passing props to child
   */
  
  const onLoadApiCall = () => new Promise((resolve, reject) => {
      const URL =  'https://okrcentral.github.io/sample-okrs/db.json ';
      dataFetcher(`${URL}`).then(
        res => {
          if (res.status === 200) {
            const response = res.data.data;
            updateContextData({
              okrsData: response,
            });
          } else {
            console.log('failed');
          }
        },
      ).catch((err) => {
        console.log('error', err);
    });
  });
  return (
    <div >
        <Container fluid>
            <Row> 
                <Col xs={12} lg={3}><Filters/></Col>
                <Col xs={12} lg={9}><OkrsWrapper/></Col>
            </Row>
        </Container>
    </div>
  );
};

const ConnectedMain = props => (
    <ContextApiConsumer>
      {({ updateContextData, okrsData}) => (
        <Main
          {...props}
          updateContextData={updateContextData}
          okrsData={okrsData}
        />
      )}
    </ContextApiConsumer>
  );
  
  export default ConnectedMain;
  export { Main as MainVanilla };