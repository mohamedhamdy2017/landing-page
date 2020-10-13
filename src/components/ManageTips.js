import React from "react";
import { Row, Col } from "reactstrap";

export const ManageTips = ({ num, title, description }) => {
  return (
    <div className="tipsContainer">
      <Row className="tipsHead">
        <Col className="Num">
          <label className="Num-Text">{num}</label>
        </Col>

        <Col>
          <label className="tipsTitle">{title}</label>
        </Col>
      </Row>

      <Col className="tipsDescription">
        <label className="description">{description}</label>
      </Col>
    </div>
  );
};
