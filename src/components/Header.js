import React, {Component} from 'react';
import '../css/Header.css';

class Header extends Component {
    render(){
        return(
            <div className="flex-row fixed-header">    
                <div className="flex-col flex-center">
                    <ul className="nav">
                        <li><a href="#" className = "text-menu">TRANG CHỦ</a></li>
                        <li><a href="#" className = "text-menu">GIỚI THIỆU</a></li>
                        <li><a href="#" className = "text-menu">CỬA HÀNG</a></li>
                        <li><a href="#" className = "text-menu">TIN TỨC</a></li>
                        <li><a href="#" className = "text-menu">LIÊN HỆ</a></li>
                    </ul>
                </div>
                <button className="Login">Đăng nhập</button>
                <button className="Register">Đăng ký</button>    
            </div>
        )
    }
}
export default Header;