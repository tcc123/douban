import React, { Component } from 'react'
//导入antd的组件
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'
//导入自定义样式
import '../css/app.css'
//导入对应的组件
import Home from './home/Home'
import MovieList from './movie/MovieList'
import About from './about/About'

class MovieContainer extends Component {
    render() {
        return (
            <Router>
                <Layout className="layout">
                    <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/movielist">电影列表</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/about">关于</Link></Menu.Item>
                    </Menu>
                    </Header>
                    <Content>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        {/* exact 表示完全匹配，也就是说：只有Link的to属性的值 与path的值完全相同，那么这一项才会匹配 */}
                            <Route path="/" exact component={ Home }></Route>
                            <Route path="/movielist" component={ MovieList }></Route>
                            <Route path="/about" component={ About }></Route>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                    </Footer>
            </Layout>
        </Router>
        )
    }
}

export default MovieContainer