import React, {Component} from 'react';
import '../css/Detail.css';

class Comment extends Component {
    constructor(){
        super();
        this.state = {
            comments: []
        }
        this.comment = this.comment.bind(this);
    }
    comment(event) {
        event.preventDefault();
        let user_id = localStorage.getItem("user_id");
        if (user_id) {
            let article_id = this.id;
            let name = event.target['name'].value;
            let email = event.target['email'].value;
            let content = event.target['content'].value;

            let comment = {
                user_id: user_id,
                article_id: article_id,
                name:name,
                email:email,
                content:content
            }

            console.log(comment);
            let commentInJson = JSON.stringify(comment);

            fetch("http://127.0.0.1:8000/api/user/comment", {
                method: "post",
                headers: {
                    "Content-Type":"application/json"
                },
                body: commentInJson
            })
            .then((response) => {
                console.log(response);
                alert("Add comment successfully!")
            });
        }
    }
    render(){
        return(
            <div className="form-comment">
                <h3>Leave a commments</h3>
                <form onSubmit={this.comment}>
                    <div className="row">
                        <div className="col-25">
                            <label>Your Name</label>
                        </div>
                        <div className="col-75">
                            <input className="comment-input" type="text" name="name" placeholder="Your name.."/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Email</label>
                        </div>
                        <div className="col-75">
                            <input className="comment-input" type="text" name="email" placeholder="Your email.."/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Comment</label>
                        </div>
                        <div className="col-75">
                        <textarea className="comment-input" name="content" placeholder="Write something.." height={300}></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn-submit" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Comment;