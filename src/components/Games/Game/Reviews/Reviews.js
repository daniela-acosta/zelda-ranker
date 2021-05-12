import React, { useState } from "react";
import Button from "../../../UI/Button/Button";
import Review from "./Review/Review";

import styles from "./Reviews.module.css";


const Reviews = (props) => {
const [userReview, setUserReview] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserReview(e.target.value)
  }

  return (
    <section className={styles.Reviews}>
      <h4>Reviews</h4>
      <Review
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        user="Daniela Acosta"
      />
      <Review
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        user="Fernanda Acosta"
      />
      <Review text={userReview}/>
      <form className={styles.Form} onSubmit={e => handleSubmit(e)}>
        <h4>Write a review</h4>
        <textarea value={userReview}></textarea>
        <Button text="Submit"/>
      </form>
    </section>
  );
};

export default Reviews;
