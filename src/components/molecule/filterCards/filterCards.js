import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";
import CheckboxLabels from "../../atoms/checkbox";
import { CardContent, CardActions, Card } from "@material-ui/core";
import { ContextApiConsumer } from "./../../../config/contextApi";
import styles from './filterCards.style';
 
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    border: "1px solid #000",
    marginBottom: "10px",
  },
  checkWrapper: {
    display: "block",
  },
});
 
const FilterCards = (props) => {
  const { item, updateContextData, okrsData, className } = props;
  const classes = useStyles();
  const [displayData, setDisplayData] = useState(okrsData);
  useEffect(() => {
    setDisplayData(okrsData);
  }, [okrsData]);
  const handleChangeConfig = (evt) => {
  
    const categoryFilter = [
      ...document.querySelectorAll('input[value="Category"]:checked'),
    ];
    
    let categoryFilterArray = [];
    categoryFilter.forEach((item) => {
      categoryFilterArray.push(item.name);
      return categoryFilterArray;
    });
 
 
    const filterSelectionObj = {
      category: categoryFilterArray
    };
    let filteredCodes = getFilteredCodes(displayData, filterSelectionObj);

    updateContextData({
      okrsDisplayData:filteredCodes,
      filterSelectionObj:filterSelectionObj,
    });
  };
  const getFilteredCodes = (okrsData, filterSelectionObj) => {
    let filterData = [];
    filterData = okrsData.filter((data) => {
      let matched = true;
      for (let [key, value] of Object.entries(filterSelectionObj)) {
        let dataValueToBeMatched = data[key];

        if (value.length > 0 && value.indexOf(dataValueToBeMatched) == -1)
          matched = false;
      }
      if (matched) return data;
    });
    return filterData;
  };
 
  // console.log(activeFilter);
  return (
    <div id="filterWrapper" className={className}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <h4>{item.label}</h4>
        </CardContent>
        <CardActions className={classes.checkWrapper}>
          {item.categories.map((filterCat, index) => (
            <CheckboxLabels
              label={filterCat}
              key={index}
              onCheckBoxChnage={handleChangeConfig}
              type={item.label}
            />
          ))}
        </CardActions>
      </Card>
    </div>
  );
};
 
const ConnectedFilterCards = (props) => (
  <ContextApiConsumer>
    {({ updateContextData, checkedFilter, okrsData, okrsDisplayData,filterSelectionObj }) => (
      <FilterCards
        {...props}
        updateContextData={updateContextData}
        checkedFilter={checkedFilter}
        okrsData={okrsData}
        okrsDisplayData={okrsDisplayData}
        filterSelectionObj={filterSelectionObj}
      />
    )}
  </ContextApiConsumer>
);
 
export default styled(ConnectedFilterCards)`${styles}`;
export { FilterCards };
 
