import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import 'normalize.css'
import config from './rootConfig'
import Nav from './nav/view'
import  './global.scss'
console.log(config);
function asyncComponent(loadComponent){
    class AsyncComponent extends React.Component{
        // eslint-disable-next-line
        static defaultProps = {
            loading: <p>Loading</p>,
            error: <p>Error</p>
        };
        constructor(props){
            super(props);
            this.load = this.load.bind(this);
            this.state = {
                module: null
            }
        }
        componentWillMount(){
            this.load(this.props)
        }
        load(props){
            this.setState({
                module: props.loading
            });
            loadComponent()
                .then( m=> {
                    let Module = m.default ? m.default: m;
                    this.setState({
                        module: <Module {...props}/>
                    })
                }).catch((error)=>{
                this.setState({
                    module: props.error
                });
                console.log(error)
            })
        }
        render(){
            return this.state.module
        }
    }

    return AsyncComponent
}
export default  (
    <Router>
        <div className={'flex'}>
            <Nav></Nav>
            <div className={'padding-1'}>
                <Switch>
                    {
                        [...config].reverse().map(({path, view})=>{
                            let View = asyncComponent(view);
                            console.log(path, View);
                            return (
                              <Route path={path} key={path}>
                                  {<View></View>}
                              </Route>
                            )
                        })
                    }
                </Switch>
            </div>
        </div>
    </Router>
)


