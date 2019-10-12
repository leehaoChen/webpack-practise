/*
* create by leo on 2019-10-07
* */
import React from 'react';
import Style from './style.css';

const View = (props) => {
  const {
    test = 'test',
  } = props;
  return (
    <div className={Style.wrap}>
      <div className={Style.box1}>
          半透明边框
      </div>
    </div>
  );
};

export default View;
