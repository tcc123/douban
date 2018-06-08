import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp'
import { Card, Spin, Alert, Rate, Pagination } from 'antd';

//导入自定义css
import '../../css/movielist.css'
export default class MovieCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            isLoading: true
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.match)
        
        this.fetchData(nextProps.match.params)
    }

    componentDidMount() {
        console.log(this.props.match)   
       
        this.fetchData(this.props.match.params)          
    }

    // 获取数据
    fetchData(params) {
        const {movieType, page} = params;

        //统一把需要的数据挂载到this上
        this.page = page - 0 || 1;
        this.movieType = movieType;
        //默认数据正在加载中
        this.setState({
            isLoading: true
        }) 

        // fetchJsonp('http://api.douban.com/v2/movie/' + movieType)
        //start 表示当前页开始的索引号
        //count 表示当前页的条数
        fetch(`/api/movie/${ this.movieType }?start=${(this.page - 1) * 5}&count=5`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            this.setState({
                data,
                isLoading: false
            })
        })
    }
    handlePage(page, pageSize) {
        this.props.history.push(`/movielist/${this.movieType}/${page}`)
    }

    goDetail(id) {
        this.props.history.push(`/movielist/detail/${id}`)
    }
    render() {
        const { isLoading, data } = this.state;
    
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

        const { subjects, total } = data
        const movieList = subjects.map(item => {
            return (
                    <Card
                        key={item.id}
                        hoverable
                        style={{ width: 220, textAlign: 'center',paddingTop: 20, margin:'0 20px 20px 0' }}
                        cover={
                            <img alt="example" src={item.images.small}
                            style={{ width: 100, margin: '0 auto' }}/>
                        }
                        onClick={() => this.goDetail(item.id)}
                    >
                        <h3>{item.title}</h3>
                        <p>电影类型：{item.genres.join('、')}</p>
                        <p>上映年份：{item.year}</p>
                        <Rate allowHalf disabled defaultValue={item.rating.average / 2} />
                    </Card>
            )
        })

        return (
            <div>
                <div className="movie-list">{movieList}</div>
                <Pagination defaultCurrent={1} current={ this.page } defaultPageSize={5} total={total} onChange={this.handlePage.bind(this)}/>
            </div>
        )
    }
}