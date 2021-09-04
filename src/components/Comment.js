import React, { Component } from "react";
import "../styles/comment.css";
import SampleComment from "./SampleComment";

class Comment extends Component {
  state = {
    commentList: [],
    text: "",
    type: true,
    img: "",
    fullname: "",
  };
  formValidation = (e) => {
    let myName = document.getElementsByClassName("flex-user-fullname")[0].value;
    let mytext = document.getElementsByClassName("text-area")[0].value;
    let myNameValue = myName.replace(/\s\s+/g, " ").trim();
    let mytextValue = mytext.replace(/\s\s+/g, " ").trim();
    if (!myNameValue) {
      e.preventDefault();
      alert("Please write your name");
      return;
    }
    if (!mytextValue) {
      e.preventDefault();
      alert("Comment can not be empty");
      return;
    }
    this.commentSubmit(e);
  };

  commentSubmit = (e) => {
    e.preventDefault();
    let today = new Date();
    let date =
      today.getDate() +
      " / " +
      (today.getMonth() + 1) +
      " / " +
      today.getFullYear() +
      " _ " +
      today.getHours() +
      ":" +
      (today.getMinutes() < 10 ? "0" : "") +
      today.getMinutes();

    e.target.value = " ";
    let sample = this.state.commentList.slice();
    let newcomment = {
      id: sample.length + 1,
      comment: this.state.text.replace(/\s\s+/g, " ", " ").trim(),
      display: this.state.type,
      date: date,
      img: this.state.img,
      fullname: this.state.fullname.replace(/\s\s+/g, " ", " ").trim(),
    };
    sample.push(newcomment);
    this.setState({
      commentList: sample,
      text: "",
      fullname: "",
    });
  };
  nameChange = (event) => {
    let text = event.target.value;

    this.setState({
      fullname: text,
    });
  };
  textChange = (event) => {
    let text = event.target.value;
    if (text.length > 150) {
      event.preventDefault();
      alert(text.length);
    } else {
      this.setState({
        text: text,
      });
    }
  };
  srcChange = (e) => {
    let myImage = URL.createObjectURL(e.target.files[0]);
    this.setState({ img: myImage });
  };

  handleCommentDelete = (comment) => {
    this.setState({
      commentList: this.state.commentList.filter((c) => c.id !== comment.id),
    });
  };

  render() {
    return (
      <>
        <div className="comment-component">
          <div id="writingContainer">
            <form onSubmit={this.formValidation}>
              <div className="writing-div">
                <textarea
                  placeholder="write here..."
                  className="text-area flex-item"
                  cols="40"
                  rows="6"
                  onChange={this.textChange}
                  value={this.state.text}
                ></textarea>
                <input
                  className="flex-item flex-user-fullname"
                  type="text"
                  placeholder="Full Name"
                  onChange={this.nameChange}
                  value={this.state.fullname}
                ></input>
                <label>
                  Upload your image
                  <input
                    type="file"
                    accept=".jpg"
                    className="flex-item flex-img-src"
                    onChange={this.srcChange}
                  ></input>
                </label>

                <button className="sub-button  flex-item" type="submit">
                  Write
                </button>
              </div>
            </form>
          </div>
          <div className="comments-container">
            {this.state.commentList.map((comment) => {
              return (
                <SampleComment
                  text={comment.comment}
                  date={comment.date}
                  type={comment.display}
                  src={comment.img}
                  onDelete={(e) => {
                    this.handleCommentDelete(comment);
                  }}
                  fullname={comment.fullname}
                  key={comment.id}
                ></SampleComment>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Comment;
