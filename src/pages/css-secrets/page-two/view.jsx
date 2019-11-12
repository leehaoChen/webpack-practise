/*
* create by leo on 2019-10-07
* */
import React from 'react';
import Style from './style.css';
import pandaSrc from '../../../assets/imgs/panda.jpg'

const View = (props) => {
  const {
    test = 'test',
  } = props;
  return (
    <div className={['grid-wrap', Style.wrap].join(' ')} >
      <div className={Style.半椭圆1}> 半椭圆 </div>
      <div className={Style.半椭圆2}> 半椭圆</div>
      <div className={Style.半椭圆3}> 半椭圆</div>
      <div className={Style.半椭圆4}> 半椭圆</div>
      <div className={Style.四分之一椭圆1}> 四分之一椭圆</div>
      <div className={Style.四分之一椭圆2}> 四分之一椭圆</div>
      <div className={Style.四分之一椭圆3}> 四分之一椭圆</div>
      <div className={Style.四分之一椭圆4}> 四分之一椭圆</div>
      <div>
        <div className={Style.平行四边形按钮}> 平行四边形</div>
      </div>
      <div>
        <img src={pandaSrc} className={Style.截取}/>
      </div>
    </div>
  );
};

export default View;
