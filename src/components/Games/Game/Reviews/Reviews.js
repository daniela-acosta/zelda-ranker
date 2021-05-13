import React, { useEffect, useState } from "react";
import Button from "../../../UI/Button/Button";
import Review from "./Review/Review";

import styles from "./Reviews.module.css";
import {
  getUserReviews,
  getInitialReviews,
  setReview,
} from "../../../../helpers/reviewsHelpers";
import gamesData from "../../../../data/data";
import Loading from "../../../UI/Loading/Loading";

const Reviews = (props) => {
  const [currentReview, setCurrentReview] = useState("");
  const [userReviews, setUserReviews] = useState([]);
  const [initialReviews, setInitialReviews] = useState([]);

  useEffect(() => {
    setInitialReviews(getInitialReviews(props.gameId, gamesData));
    setUserReviews(getUserReviews(props.gameId));
    // setReview(props.gameId, userReviews);
  }, [props]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userReviews) {
      setUserReviews((prevReviews) => {
        setReview(props.gameId, [...prevReviews, currentReview]);
        return [...prevReviews, currentReview];
      });
    } else {
      setUserReviews([currentReview]);
      setReview(props.gameId, [currentReview]);
    }
  };

  console.log("user reviews", userReviews);
  // console.log("initial reviews", initialReviews);

  let iReviews = <Loading />;
  let uReviews = null;

  if (initialReviews) {
    iReviews = initialReviews.map((review) => (
      <Review text={review} user="Some User" />
    ));
  }

  if (userReviews) {
    uReviews = userReviews.map((review) => (
      <Review text={review} user="Current User" />
    ));
  }

  return (
    <section className={styles.Reviews}>
      <h3>Reviews</h3>
      {iReviews}
      {uReviews}
      {/* <Review text={currentReview} /> */}
      <form className={styles.Form} onSubmit={(e) => handleSubmit(e)}>
        <h3>Add a review!</h3>
        <textarea
          placeholder="Start typing..."
          value={currentReview}
          onChange={(e) => setCurrentReview(e.target.value)}
        ></textarea>
        <Button text="Submit" clicked={() => {}} />
      </form>
    </section>
  );
};

export default Reviews;
