
import React, {useState, useEffect} from 'react';
import {Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import styles from './okrsWrapper.style';
import OkrsRow from '../okrsRow/okrsRow';
import { ContextApiConsumer } from '../../../config/contextApi';

const OkrsWrapper = props => {
  const {
    className,
    okrsData,
    okrsDisplayData,
  } = props;
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    setDisplayData(okrsDisplayData.length ?  okrsDisplayData : okrsData);
  }, [okrsData, okrsDisplayData]);


  const getObjectivesAndKeys = (data) => {
    
    let arr = [];
    arr = data.map(item => {
      
    })
    
  }

  useEffect(() => {
    getObjectivesAndKeys(okrsData);
  })
  return (
    <div className={`okrsWrapper ${className}`}>
        <Row>
          <h3>Okrs Titles</h3>
          {
            displayData && displayData.map((item, index) => (
              <Col xs={12} key={index}>
                <OkrsRow itemData={item} />
              </Col>
            ))
          }
        </Row>
    </div>
  );
};

const ConnectedOkrsWrapper = props => (
  <ContextApiConsumer>
    {({ updateContextData, okrsData, sortType, inputVal, okrsDisplayData, filterSelectionObj}) => (
      <OkrsWrapper
        {...props}
        updateContextData={updateContextData}
        okrsData={okrsData}
        okrsDisplayData={okrsDisplayData}
      />
    )}
  </ContextApiConsumer>
);

export default styled(ConnectedOkrsWrapper)`${styles}`;
export { OkrsWrapper };



