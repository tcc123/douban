import React from 'react'
//导入antd组件
import { Layout, Menu } from 'antd';
const {  Content, Sider } = Layout;
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'

import MovieCategory from './MovieCategory'
import MovieDetail from './MovieDetail'

class MovieList extends React.Component {
    render() {
        return (
            <Layout>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="1"><Link to="/movielist/in_theaters" >正在热映</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/movielist/coming_soon" >即将上映</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/movielist/top250" >top250</Link></Menu.Item>
                        </Menu>
                    </Sider>
                
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        {/*Switch组件 包裹的路由从上向下匹配，匹配到第一个对应的路由之后不再向下匹配*/}
                        <Switch>
                            <Route path="/movielist/detail/:id" component={ MovieDetail }></Route>                            
                            <Route path="/movielist/:movieType/:page?" component={ MovieCategory }></Route>
                        </Switch>
                    </Content>
 
                </Layout>
            </Layout>
        )
    }
}

export default MovieList