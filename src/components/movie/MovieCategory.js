import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp'

export default class MovieCategory extends Component {
    componentWillReceiveProps(nextProps) {
        const movieType = nextProps.match.params.movieType; 
        // fetchJsonp('http://api.douban.com/v2/movie/' + movieType)
        
        fetch('/api/movie/' + movieType)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    render() {

        return (
            <div>
                这是电影分类
            </div>
        )
    }
}