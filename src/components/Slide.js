import React, {Component} from 'react';
import '../css/Slide.css';

class Slide extends Component {
  render() {
    return (
      <div>
        <img 
          src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/03/15/17/pixel-dogsofinstagram-3-15-19.jpg" 
          className="image-title"
        />
        <div className="text dark">    
            <div className="mona-sliderbanner">
              <h2>Yêu thú cưng của bạn</h2>
              <h3>Hãy chăm sóc chúng</h3>
              <p className="online">Vì thời gian bạn dành cho chúng là</p>
              <p className="online">Không bao giờ thừa thải</p>
            </div>
            <br></br>
            <a className="appointment">
            <span>ĐẶT CUỘC HẸN</span>
            </a>
        </div>
        
        <div className="form-ct">
          <div className="form-pet-title">
            <h1>Tư vấn miễn phí</h1>
          </div>
          <div className="form-pet">
            <input type="text" name="text-name" value="" placeholder="Họ và tên" className="input"/>
          </div>
          <div className="form-pet">
            <input type="email" name="email-contact" value="" placeholder="Email" className="input"/>
          </div>
          <div className="form-pet">
            <textarea name="textarea-noidung" cols="40" rows="10" placeholder="Lời nhắn" className="textarea"></textarea>
          </div>
          <div className="form-pet-btn">
            <button className="button-send">Gửi</button>
          </div>
      </div>
      </div>
    )
}
}
export default Slide;