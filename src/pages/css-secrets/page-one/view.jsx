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
    <div className={'flex row wrap'} >
      <div className={Style.wrap}>
        <div className={Style["border-box"]}>
          半透明边框
        </div>
      </div>
      <div className={[Style.stripe, Style.box].join(' ')}>
        条纹
      </div>
      <div className={[Style.stripe2, Style.box].join(' ')}>
        斜条纹
      </div>
      <div className={[Style.stripe3, Style.box].join(' ')}>
        更自由的斜条纹
      </div>
      <div className={[Style.stripe4, Style.box].join(' ')}>
        深浅条纹
      </div>
      <div className={[Style.stripe5, Style.box].join(' ')}>
        格子
      </div>
      <div className={[Style.stripe6, Style.box].join(' ')}>
        网格线
      </div>
      <div className={[Style.stripe7, Style.box].join(' ')}>
        双层网格线
      </div>
      <div className={[Style.stripe8, Style.box].join(' ')}>
        border-image
      </div>
    </div>
  );
};

export default View;
