/*
 * @Author: yangj
 * @Date: 2019-12-05 17:50:35
 * @LastEditors: yangj
 */
import { h, Component } from 'preact';
import style from './style.scss';

class Index extends Component {
    constructor() {
        super();
        // set initial time:
        this.state = {
            time: Date.now(),
            show: true,
            actionList:[
                { positionX: '0', positionY: '-788px', name: 'Friend Requests'},
                { positionX: '0', positionY: '-838px', name: 'Messages'},
                { positionX: '0', positionY: '-738px', name: 'Notifications'},
            ]
        };
    }
    componentDidMount() {
        // update time every second
    }

    componentWillUnmount() {
        // stop when not renderable
    }

    render(props, state) {
        const {actionList=[]}=this.state;
        return <div className={style.parent}>
            <div className={style.box}>
                <div className={style.left}>
                    <a href="#" title="Go to Facebook Home"><span className={style._2md}></span></a>
                    <div className={style.search}>
                        <input type="text" name="q" value="" autocomplete="off" placeholder="Search" role="combobox" aria-label="search" aria-autocomplete="list" aria-expanded="true" aria-controls="typeahead_list_u_f_1" dir="ltr" style="direction: ltr;"/>
                        <button aria-label="search" tabindex="-1" type="submit"><i class="_585_"></i></button>
                    </div>
                </div>
                <div className={style.right}>
                    <ul className={style.leftUl}>
                        <li><img src="https://scontent-hkg3-1.xx.fbcdn.net/v/t31.0-1/c7.0.24.24a/p24x24/10506738_10150004552801856_220367501106153455_o.jpg?_nc_cat=1&_nc_ohc=TPPeUMjSRz4AQnO6huq8kBbpQ9EhGdt_612F2YoUpND2YXYBniMuaSugg&_nc_ht=scontent-hkg3-1.xx&oh=eb88c71c2d8f3b76830440e45ce1ac96&oe=5E3E7A84" alt=""/><span>键</span></li>
                        <li>Home</li>
                        <li>Find Friends</li>
                        <li>Create</li>
                    </ul>
                    <ul>
                        {actionList.map((item,index)=>{
                            return <li key={index} title={item.name}><i style={{backgroundPosition:`${item.positionX||0} ${item.positionY||0}`}}/></li>
                        })}
                        <li className={style.more} title='more'><i/></li>
                    </ul>
                </div>
            </div>
        </div>
    }
}

export default Index;