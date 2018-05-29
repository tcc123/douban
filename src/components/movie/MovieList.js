import React from 'react'
//导入antd组件
import { Layout, Menu } from 'antd';
const {  Content, Sider } = Layout;
import {
    Route,
    Link
} from 'react-router-dom'
import MovieCategory from './MovieCategory'
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
                            <Menu.Item key="1"><Link to="/movielist/in_theaters" replace>正在热映</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/movielist/coming_soon" replace>即将上映</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/movielist/top250" replace>top250</Link></Menu.Item>
                        </Menu>
                    </Sider>
                
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        <Route path="/movielist/:movieType/:page?" component={ MovieCategory }></Route>
                    </Content>
 
                </Layout>
            </Layout>
        )
    }
}

export default MovieList