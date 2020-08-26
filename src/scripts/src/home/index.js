/*
 * @Author: yangj
 * @Date: 2019-12-06 09:22:49
 * @LastEditors: yangj
 */
import { h, Component } from 'preact';
import style from './style.scss';
// import {} from '../../components';

class Index extends Component {
    constructor() {
        super();
        // set initial time:
        this.state = {
            loading:process.env.NODE_ENV=='production'
        };
    }
    componentDidMount() {
        //解决开发环境中刷新回出现css加载闪屏问题
        if(process.env.NODE_ENV!='production'){
            setTimeout(()=>{
              this.setState({loading:true})
            },10)
        }
    }

    componentWillUnmount() {
        // stop when not renderable
    }
    render(props, state) {
        const {loading } = this.state;
        return loading?<div className={style.home}>main</div>:null
    }
}

export default Index;