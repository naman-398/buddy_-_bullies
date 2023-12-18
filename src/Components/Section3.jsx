import React from "react";
import card_img1 from "../Images/card-img1.png";
import card_img2 from "../Images/card-img2.png";
import card_img3 from "../Images/card-img3.png";
import card_img4 from "../Images/card-img4.png";
import card_img5 from "../Images/card-img5.png";
import card_img6 from "../Images/card-img6.png";
import { Col, Container, Row } from "react-bootstrap";
const myinfo = [
  {
    img: card_img1,
    para1: `ART COLLECTION`,
    para2: `Complete the art collection in full with +70 unique traits, and publish our
    rarity chart on
    our webpage.`,
  },
  {
    img: card_img2,
    para1: `SPECIAL BULLIES`,
    para2: `20 Buddybullies {out of 10k} will have a very special and ersonalized resembling of famous people who are into NFTs {those will be available after the minting}.`,
  },
  {
    img: card_img3,
    para1: `BREEDING`,
    para2: `Our BuddyBullies will not come alone, as we will announce the breeding function after the minting and you will be able to get a PuppyBully { for free}.`,
  },
  {
    img: card_img4,
    para1: `DIGITALMARKETS`,
    para2: `Communicate with all the 
    digital markets available in the Solana NFT world  for getting our collection successfully listed.`,
  },
  {
    img: card_img5,
    para1: `MERCH`,
    para2: `The team is working on the future merch thet will be available for the community members directly on our webpage.`,
  },
  {
    img: card_img6,
    para1: `CHARITY`,
    para2: `We will be giving 30% of the 
    royalties to charity permanently 
    and we will keep spending on marketing, promotions and partnership.50% of the riyalties will go back to the community as rewards.`,
  },
];
const Section3 = () => {
  const mydata = myinfo.map((myinfo) => (
    <Col lg={4} md={6} className="card-top-padding">
      <div className="page-card bg-card-color cursor-pointer">
        <img src={myinfo.img} alt="card-img1" />
        <h2 className="art ff-poppins fs-md color-light fw-6 mb-0">
          {myinfo.para1}
        </h2>
        <p className="card-para lh-150 fw-4 fs-3sm ff-poppins color-light opacity-7 mt-2 mt-md-3 mt-lg-4">
          {myinfo.para2}
        </p>
      </div>
    </Col>
  ));
  return (
    <div className="bg-color">
      <section>
        <Container className="container s3-top-padding position-relative z-1">
          <Row className="row">{mydata}</Row>
        </Container>
      </section>
    </div>
  );
};

export default Section3;
