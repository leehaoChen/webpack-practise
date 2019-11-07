/*
* create by leo on
* */
import React from 'react';
import style from './style.css'
class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      overPop: true,
    };
    this.myRef = React.createRef();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.myRef.current.scrollWidth > this.myRef.current.clientWidth && !this.state.overPop) {
      console.log(this.myRef.current.clientWidth);
      console.log(this.myRef.current.scrollWidth);
      console.log(this.state.overPop);
      this.setState({
        overPop: true
      })
    } else if (!(this.myRef.current.scrollWidth > this.myRef.current.clientWidth) && this.state.overPop) {
      this.setState({
        overPop: false
      })
    }
  }
  render() {
    const {
      text,
      overPop,
    } = this.state;
    const title = overPop ? text : '';
    console.log(title);
    return (
      <div>
        <div ref={this.myRef} title={title } className={style.box}>{text}</div>
        <input
          type="text"
          value={text}
          onChange={
            (e)=>{
              this.setState({
                text: e.target.value
              })
            }
          }
        />
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      text: ''
    })
  }
}

export default View;
