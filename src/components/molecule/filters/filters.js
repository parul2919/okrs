

import React from 'react';
import styled from 'styled-components';
import styles from './filters.style';
import FilterCards from './../filterCards/filterCards';
import filterData from '../../../config/filter.data';

const Filters = props => {
  const {
    className,
  } = props;
  return (
    <div className={`filters ${className}`}>
      <h3>{filterData.title}</h3>
      {
        filterData.fields.map((item, index ) => (<FilterCards item={item} key={index}/>))
      }
    </div>
  );
};


export default styled(Filters)`${styles}`;
