import React from "react";
import "./CollegeTile.css";

export default function CollegeTile({ data, index }) {
  return (
    <>
      <div class="tile">
        {data.promoted && (
          <span class="featured_flag">
            <div class="featured">Promoted</div>
          </span>
        )}
        <span class="rating">
          <div class="rating-text">
            <span class="rating-given">{data[index].rating}</span>
            <span class="total-rating">/5</span>
            <br />
            <span class="quality">{data[index].rating_remarks}</span>
          </div>
        </span>
        <div class="pills">
          <div class="pill1">{data[index].tags[0]}</div>
          <div class="pill2">{data[index].tags[1]}</div>
          <div class="ranking">#{data[index].ranking}</div>
        </div>
        <div class="image">
          <img src="image.jpg" alt="college" width="700" height="300"></img>
        </div>
        <div class="college-name">{data[index].college_name}</div>
        <div class="stars">
          <span class="star-bg">☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </div>
        <div class="discount-percentage">{data[index].discount}</div>
        <div class="actual-price">₹{data[index].original_fees}</div>
        <div class="nearest_place">
          <span>{data[index].nearest_place[0]}</span>
          <span class="nearest-place1">|</span>
          <span class="nearest-place1">{data[index].nearest_place[1]}</span>
        </div>
        <div class="discounted_fees">₹{data[index].discounted_fees} </div>
        <div class="famous_nearest_places">
          <span class="match">93% Match :</span>
          <span class="km">2.5kms</span> from GTB Nagar,
          <span class="km">7 Kms</span> from Rajiv Chowk
        </div>
        <div class="fees_cycle">{data[index].fees_cycle}</div>
        <div class="offertext">
          Flat{" "}
          <span class="km">
            Rs<span class="match">2,000</span> off + upto Rs{" "}
            <span class="match">500</span> wallet! to avail...
            <span class="login">LOGIN </span>
          </span>
        </div>
        <div class="amenties">
          {data[index].amenties[0]}, {data[index].amenties[1]}
        </div>
      </div>
    </>
  );
}
