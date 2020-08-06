import React, {Component} from 'react';
import '../css/New.css';
import { MdSearch } from "react-icons/md";
import NewItem from './NewItem';

class New extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        }
        this.getData();
    }

    getData(){
        fetch("http://127.0.0.1:8000/api/articles")
                .then(response => {
                        response.json().then((data) =>  {
                            this.updateUI(data);
                        });
        });
    }
    updateUI(data){
        this.setState({
            articles:data
        })
    }

    render(){
        return(
            <div className="container">
                <div className="grid-item">
                    <div className="wrap">
                        <div className="search">
                            <input type="text" className="searchTerm" placeholder="Tìm kiếm..."/>
                            <button type="submit" className="searchButton">
                                <MdSearch />
                            </button>
                        </div>
                    </div>
                    <div className="vertical-menu">
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
                <div className="grid-item">
                    <div className="grid-new">
                        {
                            this.state.articles.map((item,index) =>
                            <NewItem 
                                key = {index}
                                item = {item} 
                            />
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default New;