import React from "react";
import "./MovieCard.css";
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
function MovieCard(props) {
  return (
    <>
    
   
      <div className="movieCard">
        <div className="movieData">
          <div className="imgdata">
            <div>
              <img
                src={props.imgsrc}
                alt=""
                srcset=""
                width="150px"
                height="100%"
              />
            </div>
            <div>
              <h3>{props.moviename}</h3>
              <p className="year">{props.releaseYear},{props.actor}</p>
              <div>
                <p id="duration">{props.Runtime}</p>
                <p>{props.Genre}</p>
              </div>
            </div>
          </div>
          <div className="desc">
            <p>
             {props.Plot}
            </p>
            <p><b>Awards :</b> {props.Awards}</p>
          </div>
          <div className="icons">
            <p>
              <FaShareAlt />
            </p>
            <p>
              <AiFillLike />
            </p>
            <p>
              <FaCommentAlt />
            </p>
          </div>
        </div>
        <div style={{backgroundColor:"cyan", width:"40%"}} className="right">
            <img src={props.bgImage} alt="" srcset="" />
        </div>
      </div>
     
    
    </>
  );
}

export default MovieCard;
