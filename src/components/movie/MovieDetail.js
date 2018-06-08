import React from 'react'
import { Spin, Alert, Button, Icon } from 'antd'
import '../../css/moviedetail.css'
export default class MovieDetail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {},
            isLoading: true
        }

        this.fetchData()
    }

    fetchData() {
        fetch(`api/movie/subject/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                data,
                isLoading: false
            })
        })
    }
    render() {
        const { data, isLoading } = this.state;

        if(isLoading) {
            return (
                <Spin tip="Loading...">
                    <Alert
                    message="友情提示："
                    description="数据正在疯狂加载中。。。"
                    type="info"
                    />
                </Spin>
            )
        }

        let castList = data.casts.map(item => (
            <li key={item.id}>
                <img src={item.avatars.small} alt=""/>
                <p>{ item.name }</p>
            </li>
        ))

        return (
            <div className="movie_detail">
                <Button type="primary">
                    <Icon type="left" />返回电影列表
                </Button>
                <div className="content">
                    <h2>{ data.title }</h2>
                    <img src={ data.images.large } alt=""/>
                </div> 
                <div className="casts">
                    <h4 className="title">主要演员：</h4>
                    <ul>
                        {castList}
                    </ul>
                </div>
                <div>
                    <h4 className="title">剧情介绍</h4>
                    <p>
                        { data.summary }
                    </p>
                </div>
            </div>
        )
    }
}