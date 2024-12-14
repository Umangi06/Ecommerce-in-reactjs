import React from "react";
import PageHeader from "../components/PageHeader";
const subTitle = "About Our Brand";
const title = "Good Products And Better Experiences";
const desc =
  "At ShopCart, we believe fashion should be both stylish and sustainable. Our mission is to create high-quality, eco-friendly clothing that not only makes you look good but also feels good to wear, knowing it was made with respect for our planet and the people on it.";

// const year = "30+"; const expareance = "Years Of Experiences";

const aboutList = [
  {
    imgUrl: "/src/assets/images/about/icon/01.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Sustainability",
    desc: "We are dedicated to reducing our environmental footprint by using eco-friendly materials and processes.",
  },
  {
    imgUrl: "/src/assets/images/about/icon/02.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Quality",
    desc: "We prioritize high-quality craftsmanship to ensure our clothes are durable and long-lasting.",
  },
  {
    imgUrl: "/src/assets/images/about/icon/03.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Transparency",
    desc: "We maintain open and honest communication with our customers about our sourcing and manufacturing practices.",
  },
];

const About = () => {
  return (
    <div>
      <PageHeader title={"About Our Brand"} curPage={"About"} />
      <div className="about-section srtyle-3 padaing-tb section-bg">
        <div className="container">
          <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
            <div className="col">
              <div className="about-left">
                <div className="about-thumb">
                  <img src="/src/assets/images/about/01.jpeg" alt="" />
                </div>
                {/* <div className="abs-thumb" >
                  <img src="/src/assets/images/about/02.jpeg" alt="" width="200" height="200"/>
                </div> */}
                {/* <div className="about-left-content">
                  <h3>{year}</h3>
                  <p>{expareance}</p>
                </div> */}
              </div>
            </div>

            {/* 2nd col */}
            <div className="col">
              <div className="about-right">
                <div className="section-header">
                  <span className="subtitle">{subTitle}</span>
                  <h2 className="title">{title}</h2>
                  <p>{desc}</p>
                </div>

                <div className="section-wrapper">
                  <ul className="lab-ul">
                    {aboutList.map((val, i) => (
                      <li key={i}>
                        <div className="sr-left">
                          <img src={val.imgUrl} alt="" />
                        </div>
                        <div className="sr-right">
                          <h5>{val.title}</h5>
                          <p>{val.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
