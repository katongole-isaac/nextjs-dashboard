/**
 * Password Card for the Settings
 *
 */

import React from "react";
import * as Yup from "yup";

import Form from "../common/form";
import { Card, CardBody, Row, Col, CardHeader } from "../common/card";

class PasswordCard extends Form {
  state = {
    data: {
      passwd: "",
      confirm_passwd: "",
    },
    errors: {},
  };

  schema = Yup.object().shape({
    passwd: Yup.string().required().label("Password"),
    confirm_passwd: Yup.string()
      .required()
      .oneOf([Yup.ref("passwd")], "Password must match")
      .label("Confirm Password"),
  });

  submitForm() {}

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader title="Password" metaInfo="Update Password" />
          <CardBody>
            <Row>
              <Col classes="col-md-4">
                {this.renderInput("passwd", "Password", "password")}
              </Col>
            </Row>
            <Row>
              <Col classes="col-md-4">
                {this.renderInput(
                  "confirm_passwd",
                  "Confirm Password",
                  "password"
                )}
              </Col>
            </Row>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col classes="d-flex justify-content-end">
                {this.renderButton("Update")}
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default PasswordCard;
