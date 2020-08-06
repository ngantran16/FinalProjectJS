import React, {Component} from 'react';
import { MdSearch } from "react-icons/md";
import '../css/Detail.css';
import {withRouter} from 'react-router';
import { FiFacebook } from "react-icons/fi";
import Comment from './Comment';

class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            article:[]
        }
        this.id = this.props.match.params.id;
        this.getDetail(this.id);
        console.log(this.id);

        this.getDetail = this.getDetail.bind(this);
    }
    getDetail(id){
        fetch('http://127.0.0.1:8000/api/articles/' + id)
                .then(response => {
                    response.json().then((data) =>  {
                        this.setState({
                            article:data
                        })
                });
        });
    }
    render(){
        return(
            <div className="container">
                <div className="grid-item">
                    <div className="wrap">
                        <div className="search">
                            <input type="text" className="searchTerm-detail" placeholder="Tìm kiếm..."/>
                            <button type="submit" className="searchButton-detail">
                                <MdSearch />
                            </button>
                        </div>
                    </div>
                    <div className="vertical-menu-detail">
                        <a href="#" className="active"><b>BÀI VIẾT MỚI</b></a>
                        <a href="#">
                            <img 
                                src="https://i.pinimg.com/originals/e0/33/57/e0335723b38a3e62e89c893cc7de5fe3.jpg" 
                                className="img-circle"/>
                            <span className="text-new">Lịch tiêm phòng cho chó</span>
                        </a>
                        <a href="#">
                            <img 
                                src="https://i.pinimg.com/originals/e0/33/57/e0335723b38a3e62e89c893cc7de5fe3.jpg" 
                                className="img-circle"/>
                            <span className="text-new">Lịch tiêm phòng cho chó</span>
                        </a>
                        <a href="#">
                            <img 
                                src="https://i.pinimg.com/originals/e0/33/57/e0335723b38a3e62e89c893cc7de5fe3.jpg" 
                                className="img-circle"/>
                            <span className="text-new">Lịch tiêm phòng cho chó</span>
                        </a>
                        <a href="#">
                            <img 
                                src="https://i.pinimg.com/originals/e0/33/57/e0335723b38a3e62e89c893cc7de5fe3.jpg" 
                                className="img-circle"/>
                            <span className="text-new">Lịch tiêm phòng cho chó</span>
                        </a>
                    </div>
                </div>
                <div className="detail-container">
                    <div className="detail">
                        <p className="content-detail">News</p>
                        <h1 className="content-detail">{this.state.article.title}</h1>
                        <img 
                            src={"http://127.0.0.1:8000/storage/" +this.state.article.image}
                            alt=""
                            className="image-detail"
                        />
                        <h3 className="content-detail">{this.state.article.title}</h3>
                        <p className="content-detail">{this.state.article.content}</p>
                        <button className="content-detail btn-facebook"><FiFacebook />Facebook</button>
                        <button className="content-detail btn-google">Google+</button>
                        <button className="content-detail btn-pinterest">Pinterest</button>
                        <button className="content-detail btn-linkedin">LinkedIn</button>
                    </div>
                    <Comment />
                </div>
            </div>
        )
    }
}
export default withRouter(Detail);