/*
* create by leo on
* */
import React from 'react';
import style from './style.css'
class View extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={[style.wrap, style.grid1].join(' ')}>
          <div className={style.box1}>1</div>
          <div className={style.box2}>2</div>
          <div className={style.box3}>3</div>
          <div className={style.box4}>4</div>
          <div className={style.box5}>5</div>
          <div className={style.box6}>6</div>
          <div className={style.box7}>7</div>
          <div className={style.box8}>8</div>
          <div className={style.box9}>9</div>
        </div>
        <div className={[style.wrap, style.grid2].join(' ')}>
          <div className={style.box1}>1</div>
          <div className={style.box2}>2</div>
          <div className={style.box3}>3</div>
          <div className={style.box4}>4</div>
          <div className={style.box5}>5</div>
          <div className={style.box6}>6</div>
          <div className={style.box7}>7</div>
          <div className={style.box8}>8</div>
          <div className={style.box9}>9</div>
        </div>
      </div>
    );
  }
}

export default View;
