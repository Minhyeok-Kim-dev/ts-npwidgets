import React, { createRef } from 'react';
import Cond from './CondContainer';
import { useDispatch } from 'react-redux';
import { getRetriveAsync } from '../modules/cond';
import Grid from './GridContainer';

function TestApp() {
  const dispatch = useDispatch();
  
  const gridRef:any = createRef();

  const retriveHandler = () => {
    dispatch(getRetriveAsync.request());  
  }

  const clearHandler = () => {
    gridRef.current.clear();
  }

  return (
    <>
      <Cond retrive={retriveHandler} clear={clearHandler}/>
      <hr />
      <Grid componentRef={gridRef} />
    </>
  )
}

export default TestApp;