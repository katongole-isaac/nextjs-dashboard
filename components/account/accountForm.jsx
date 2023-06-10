/**
 * Account Form Component - Its used in the Account  Page
 *
 *
 */

import * as Yup from "yup";

import Form from "../common/form";
import { Card, CardBody, Col, Row, CardHeader } from "../common/card";

class AccountForm extends Form {
  state = {
    data: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      country: "",
      city: "",
    },
    errors: {},
  };

  schema = Yup.object().shape({
    firstname: Yup.string().min(3).required().label("First name"),
    lastname: Yup.string().min(3).required().label("Last name"),
    email: Yup.string().email().required().label("Email"),
    country: Yup.string().min(3).required().label("Country"),
    city: Yup.string().min(3).required().label("City"),
  });

  submitForm = (data) => {
    console.log(data);
  };

  render() {
    return (
      <Card>
        <CardHeader title="Profile" metaInfo="The Information can be edited " />

        <CardBody>
          <form autoComplete="off">
            <div className="">
              <Row>
                <Col>{this.renderInput("firstname", "First Name")} </Col>
                <Col> {this.renderInput("lastname", "Last Name")} </Col>
              </Row>
              <Row>
                <Col>{this.renderInput("email", "Email")} </Col>
                <Col> {this.renderInput("phone", "Phone")} </Col>
              </Row>
              <Row>
                <Col> {this.renderInput("country", "Country")} </Col>
                <Col> {this.renderInput("city", "City")} </Col>
              </Row>
            </div>
            <Row>
              <Col classes="p-0">
                <hr />
              </Col>
            </Row>
            <Row>
              <Col
                classes=" d-flex  justify-content-end"
                styles={{
                  marginTop: "-1em",
                }}
              >
                {this.renderButton("Save details")}
              </Col>
            </Row>
          </form>
        </CardBody>
      </Card>
    );
  }
}

export default AccountForm;
