
import React from 'react';
import styled from 'styled-components';
import styles from './okrsRow.style';

const OkrsRow = props => {
  const {
    className,
    itemData,
  } = props;
  const {title,parent_objective_id} = itemData;
  return (

      <div className={`${className} ${parent_objective_id === "" ? 'objectives' : 'keys'}` }>
        {title}
      </div>


  );
};


export default styled(OkrsRow)`${styles}`;


