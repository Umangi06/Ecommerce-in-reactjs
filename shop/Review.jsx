import React, { useState } from 'react'
import Ratting from '../components/Ratting'; // If it’s a custom component

const reviewtitle = "Add a Review";

let ReviewList = [
    {
      imgUrl: "/src/assets/images/instructor/01.jpg",
      imgAlt: "Client thumb",
      name: "Ganelon Boileau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc:  "The product descriptions are detailed, and there are plenty of customer reviews to help make an informed decision. Very transparent.",
    },
    {
      imgUrl: "/src/assets/images/instructor/02.jpg",
      imgAlt: "Client thumb",
      name: "Morgana Cailot",
      date: "Posted on Aug 13, 2023 at 10:35 pm",
      desc: "Fast shipping! My order arrived earlier than expected and was well-packaged. I’m very satisfied with the delivery service.",
    },
    {
      imgUrl: "/src/assets/images/instructor/03.jpg",
      imgAlt: "Client thumb",
      name: "Telford Bois",
      date: "Posted on May 19, 2020 at 5:25 am",
      desc: "Great prices and lots of discounts available. I was able to use a coupon code and got a really good deal on my purchase.",
    },
    {
      imgUrl: "/src/assets/images/instructor/04.jpg",
      imgAlt: "Client thumb",
      name: "Cher Daviau",
      date: "Posted on Apr 22, 2021 at 1:33 pm",
      desc: "The website offers a wide variety of products with plenty of options to choose from. I found exactly what I was looking for.",
    },
  ];

const Review = () => {
    const[reviewShow, setReviewShow] = useState(true);
  return (
    <>
        <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
            <li className='rev' onClick={() => setReviewShow(!reviewShow)}>Reviews 4</li>
        </ul>
        {/* review content */}
        <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
          <div className="review-showing">
            <ul className="content lab-ul">
              {
                ReviewList.map((review, i) =>(
                  <li key={i}>
                    <div className='post-thumb'>
                      <img src={review.imgUrl} alt="" />
                    </div>
                    <div className="post-content">
                      <div className="entry-meta">
                        <div className="posted-on">
                          <a href="#">{review.name}</a>
                          <p>{review.date}</p>
                        </div>
                      </div>
                      <div className="entry-content">
                        <p>{review.desc}</p>
                      </div>
                    </div>
                  </li>
                ))
              }
            </ul>
            {/* add review field */}
            <div className="client-review">
              <div className="review-form">
                <div className="review-title">
                  <h5>{reviewtitle}</h5>
                </div>

                <form action="action" className='row'>
                  <div className="col-md-4 col-12">
                    <input type="text" name='name' id='name' placeholder='Full Name *' />
                  </div>
                  <div className="col-md-4 col-12">
                    <input type="email" name='email' id='name' placeholder='Your Email*' />
                  </div>
                  <div className="col-md-4 col-12">
                    <div className="rating">
                      <span className='me-2'>Your Rating</span>
                      <Ratting/>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <textarea name="message" id="message" rows="8" placeholder='Type Here Message'></textarea>
                  </div>
                  <div className="col-12">
                    <button type='submit' className='default-button'>
                      <span>Submit Review</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Review