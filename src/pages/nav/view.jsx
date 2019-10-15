/*
* create by leo on 2019-10-09
* */
import React from 'react';
import {Link} from 'react-router-dom'
import navConfig from '../rootConfig'

const View = (props) => {
  const {
    test = 'test',
  } = props;
  return (
    <div className={'padding-1'} style={{border: '1px solid #ccc', width: 200}}>
      <ul>
        {
          navConfig.map(
            (item)=>(
              <li key={item.path}><Link to={item.path}>{item.title}</Link></li>
            )
          )
        }
      </ul>
    </div>
  );
};
export default View;
