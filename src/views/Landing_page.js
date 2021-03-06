import "../assets/scss/app.scss";
import React from "react";
import { Button, Row, Col } from "reactstrap";
import { ManageTips } from "../components/ManageTips";
import { commentsList } from "./commentsData";
import logo from "../assets/svg/logo.svg";
import menu from "../assets/svg/icon-hamburger.svg";
import rightPhoto from "../assets/svg/bg-tablet-pattern.svg";
import illustration from "../assets/svg/illustration-intro.svg";
import facebook from "../assets/svg/icon-facebook.svg";
import instagram from "../assets/svg/icon-instagram.svg";
import pinterest from "../assets/svg/icon-pinterest.svg";
import twitter from "../assets/svg/icon-twitter.svg";
import youtube from "../assets/svg/icon-youtube.svg";
import { useForm } from "react-hook-form";

const Landing_page = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log("Data", data);
  };
  return (
    <div className="container-fluid Container">
      <img src={rightPhoto} className="tablet-pattern" />

      <div className="row">
        <Col md={12} className="head">
          <img src={logo} className="logo" />
          <div className="row navBar">
            <label className="headTitles">Pricing</label>
            <label className="headTitles">Product</label>
            <label className="headTitles">About Us</label>
            <label className="headTitles">Carrers</label>
            <label className="headTitles">Community</label>
          </div>
          <Button className="get-Start-btn">
            <label className="get-Start-txt">Get Started</label>
          </Button>
        </Col>
        <img src={menu} className="menu" />
      </div>
      <Row md={12} className="bringContainerView">
        <Col className="bringContent">
          <Col className="bringTextCo">
            <label className="bringText">
              {"Bring every one together to build better products"}
            </label>
          </Col>
          <Col className="manageTextCo">
            <label className="manageText">
              {
                "Manage Makes it simple for software team to plan day-to-day tasks while keeping the larger team goals in view"
              }
            </label>
          </Col>
          <Button className="bringSectionBtn">
            <label className="get-Start-txt">Get Started</label>
          </Button>
        </Col>

        <img src={illustration} className="illustration" />
      </Row>

      <Row md={12} className="manageSection">
        <Col xs="auto" md={6} className="tipsContent">
          <Col className="bringTextCo">
            <label className="bringText">
              {"What's different about Managing?"}
            </label>
          </Col>
          <Col className="manageTextCo">
            <label className="manageText">
              {
                "Manage provides all functionality your tam need,without complexity.Our software is tailor-made for modern digital product teams"
              }
            </label>
          </Col>
          <Col className="photoContainer">
            <img src={rightPhoto} className="photo" />
          </Col>
        </Col>
        <Col xs="auto" md={4}>
          <ManageTips
            num={"01"}
            title={"Track company-wide progress"}
            description={
              "Manage provides all functionality your tam need,without complexity.Our software is tailor-made for modern digital product teams"
            }
          />
          <ManageTips
            num={"02"}
            title={"Track company-wide progress"}
            description={
              "Manage provides all functionality your tam need,without complexity.Our software is tailor-made for modern digital product teams"
            }
          />
          <ManageTips
            num={"03"}
            title={"Track company-wide progress"}
            description={
              "Manage provides all functionality your tam need,without complexity.Our software is tailor-made for modern digital product teams"
            }
          />
        </Col>
      </Row>

      <Col md={12} xs="auto" className="commentsSection">
        <h2 className="commentsHeadText">What they 've said?</h2>

        <Row xs="auto" className="commentsList">
          {commentsList.map((comment) => {
            return (
              <Col className="commentContainer ">
                <Col className="commentImgContainer">
                  <img src={comment.image} className="commentImg" />
                </Col>

                <label className="commentName">{comment.name}</label>

                <Col className="comment">
                  <label className="commentTxt">{comment.comment}</label>
                </Col>
              </Col>
            );
          })}
        </Row>

        <Col className="commentBtn">
          <Button
            className="get-Start-btn"
            onClick={() => alert("Get Started")}
          >
            <label className="get-Start-txt">Get Started</label>
          </Button>
        </Col>
      </Col>

      <Col md={12} xs="auto" className="simplifySection">
        <label className="simplifyTxt">
          Simplify how your team works today.
        </label>

        <img src={rightPhoto} className="simplifyPhoto" />

        <Button className="simplifyBtn">
          <label className="get-Start-txt simplifyBtnLabel">Get Started</label>
        </Button>
      </Col>

      <Col className="footerSection">
        <Col className="socialContent">
          <Col className="footerLogo">
            <img src={logo} />
          </Col>
          <Row className="socialContainer">
            <img src={facebook} className="socialIcon" />
            <img src={youtube} className="socialIcon" />
            <img src={twitter} className="socialIcon" />
            <img src={pinterest} className="socialIcon" />
            <img src={instagram} className="socialIcon" />
          </Row>
        </Col>

        <Row className="linksContainer">
          <Col className="links">
            <label className="linkTxt">Home</label>
            <label className="linkTxt">Pricing</label>
            <label className="linkTxt">Product</label>
            <label className="linkTxt">About Us</label>
          </Col>
          <Col className="links">
            <label className="linkTxt">Carrers</label>
            <label className="linkTxt">Community</label>
            <label className="linkTxt">Privacy policy</label>
          </Col>
        </Row>
        <Row className="inputContent">
          <Col className="inputContainer">
            <input
              className="input"
              placeholder="Updates in your inbox..."
              name="email"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            <Button className="goBtn" onClick={handleSubmit(onSubmit)}>
              <label className="goBtnLabel">Go</label>
            </Button>
          </Col>
          <Col className="errorMsgContainer">
            <label className="errorMsg">
              {errors.email && errors.email.message}
            </label>
          </Col>

          <label className="copyright">
            Copyright 2020.All Rights Reserved
          </label>
        </Row>
      </Col>
    </div>
  );
};

export default Landing_page;
