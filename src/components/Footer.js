import React,{Component} from 'react';
import '../css/Footer.css';

class Footer extends Component {
    render(){
        return(
            <footer className="site-footer">
                <div className="col-wrap">
                    <div className="col">
                        <h3>About</h3>
                        <img 
                            src="http://mauweb.monamedia.net/pethospital/wp-content/uploads/2019/11/Pet-Care-1.png" 
                            alt=""
                            className="img-logo"
                        />
                        <p className="text-justify">
                            Thú cưng của bạn đang ở trong tay tốt với đội ngũ bác sĩ thú y, 
                            chú rể và huấn luyện viên chuyên nghiệp của chúng tôi. Chúng tôi 
                            cung cấp động vật của bạn chỉ là một dịch vụ chất lượng hàng đầu.
                        </p>
                    </div>

                    <div className="col">
                        <h3>Hỗ trợ</h3>
                        <p>FAQ</p>
                        <p>Chăm sóc khách hàng</p>
                        <p>Vận chuyển và Đổi trả hàng</p>
                        <p>Liên hệ</p>
                    </div>
                    
                    <div className="col">
                        <h3>Liên hệ</h3>
                        <p>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
                        <p>(+84) 39 7739 302</p>
                        <p>tuyetngan.tran@gmail.com</p>
                        <p>tuyetngandethuong</p>
                    </div>

                    <div className="col">
                        <h3>Địa điểm</h3>
                        <p>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.112367475051!2d108.23930815016827!3d16.05965774390616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142177e16d75991%3A0x711c915f162f6505!2zMTAxQiBMw6ogSOG7r3UgVHLDoWMsIEFuIEjhuqNpIMSQw7RuZywgU8ahbiBUcsOgLCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1595302589497!5m2!1svi!2s"  
                                className="map" />
                        </p>
                    </div>
                </div>
            </footer>           
        )
    }
}
export default Footer;