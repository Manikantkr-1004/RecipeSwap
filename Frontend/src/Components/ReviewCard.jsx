import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Rate from "./Rating";
import Cookies from "js-cookie";
import { commentOnpost } from "../Redux/receipeReducer/action";
import { useDispatch } from "react-redux";

const ratingComments = [
  "Couldn't eat it",
  "Didn't like it",
  "It was OK",
  "Liked it",
  "Loved it",
];

export const ReviewCard = ({ Recipename, Recipeobj }) => {
  const [rating, getRating] = useState(0);
  const [comment, setComment] = useState("");
  const [disabled, setDisabled] = useState(false);
  const username = Cookies.get("login_name");
  const useremail = Cookies.get("login_email");

  const dispatch = useDispatch();

  useEffect(() => {
    rating == 0 ? setDisabled(true) : setDisabled(false);
  }, [rating]);

  const submithandle = () => {
    const data = Recipeobj;
    let newComment = {
      useremail,
      username,
      rating,
      comment,
    };
    data.comments.push(newComment);
    const token = Cookies.get("token");
    dispatch(commentOnpost(data._id, newComment, token));
    getRating(0);
    setComment("");
    setDisabled(false);
  };

  console.log(Recipeobj)

  return (
    <div>
      <DIV className="Review-Container">
        <h1 className="review-heading">Reviews</h1>
        <p>Check out our Community Guidelines about reviews.</p>
        <div className="card-container">
          <div className="logo-name-container">
            <img
              className="logo-img"
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUU11Fpnngbp08D9U1wqKr93yoLrdnn-xYHddIehvaVsChCa-q"
              alt="error"
            />
            <p className="recipe-name">{Recipename}</p>
          </div>
          <div className="starts-container">
            <p className="main-head">
              Your Rating <label className="lable-head">(required)</label>
            </p>
            <div className="sec1-container">
              <div className="rating-container">
                <Rate getRating={getRating} />
              </div>
              <p>{ratingComments[rating - 1]}</p>
            </div>
          </div>
          <div className="your-review">
            <p className="main-head">
              Your Rating <label className="lable-head">(optional)</label>
            </p>
            <textarea
              className="textarea"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="What did you think about this recipe? Did you make any changes or notes?"
              cols="55"
              rows="4"
            ></textarea>
          </div>
          <div className="btnContainer">
            <button className="review-btn" onClick={() => getRating(0)}>
              CANCEL
            </button>
            <button
              disabled={disabled}
              style={
                disabled == false
                  ? { backgroundColor: "#f15025" }
                  : { backgroundColor: "#d9d9d9", color: "white" }
              }
              onClick={submithandle}
              className="review-btn"
            >
              SUBMIT
            </button>
          </div>
        </div>
        <div className="comments-container">
          {
            Recipeobj?.comments?.map((el,i)=>{
              return (
                <div className="comment">
                  <div>
                    <img src="" alt="error" />
                    <p>{el.username}</p>
                  </div>
                  <p>{el.comment}</p>
                </div>
              )
            })
          }
        </div>
      </DIV>
    </div>
  );
};

const DIV = styled.div`
  margin-top: 40px;

  .review-heading {
    font-size: 35px;
    font-weight: 900;
  }

  .card-container {
    border: solid #f5f6ea 20px;
    padding: 20px;
    width: 600px;
  }

  .logo-img {
    width: 70px;
    border-radius: 20%;
  }

  .logo-name-container {
    display: flex;
    align-items: center;
  }

  .recipe-name {
    margin-left: 20px;
    font-size: 18px;
    font-weight: 900;
  }

  .starts-container {
    margin-top: 40px;
  }

  .main-head {
    font-weight: 900;
    font-size: 18px;
  }

  .lable-head {
    font-size: 12px;
    font-weight: 400;
  }

  .sec1-container {
    display: flex;
    align-items: center;
  }

  .rating-container {
    border-right: solid lightgrey 1px;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .textarea {
    width: 100%;
    padding: 10px;
    border: solid lightgrey 1px;
    margin-top: 10px;
  }

  .review-btn {
    padding: 10px 20px;
    margin-right: 10px;
    font-weight: 900;
  }

  .btnContainer {
    margin-top: 10px;
  }
`;
