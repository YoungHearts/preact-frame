/*
 * @Author: yangj
 * @Date: 2019-12-05 17:50:35
 * @LastEditors: yangj
 */
import { h, Component } from 'preact';
import style from './style.scss';
import Header from '../Header'
class Index extends Component {
  constructor() {
      super();
      this.state = {
      };
  }
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render(props, state) {
      return <div className={style.layout}>
          <Header/>
          <div className={style.main}>{this.props.children}</div>
      </div>
  }
}

export default Index;