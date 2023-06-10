/**
 * Setting Card Component
 *
 */
import { Card, CardBody, Row, Col, CardHeader } from "@/components/common/card";
import CheckBox from "@/components/common/checkBox";

const SettingCard = () => {
  return (
    <Card
      classes="mb-4"
    >
      <CardHeader title="Notifications" metaInfo="Manage your notifications" />

      <CardBody>
        <Row>
          <Col>
            <h6> Notifications </h6>
          </Col>
          <Col>
            <h6> Messages </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <CheckBox label="Email" name="email" />
            <CheckBox label="Push Notifications" name="push_n" />
            <CheckBox label="Text Messages" name="txt-msg" />
            <CheckBox label="Phone Calls" name="phne" />
          </Col>
          <Col>
            <CheckBox label="Email" name="em" />
            <CheckBox label="Push Notifications" name="psh" />
            <CheckBox label="Phone Calls" name="phn" />
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col classes="d-flex justify-content-end">
            <button className=" btn btn-sm btn-primary"> Save</button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default SettingCard;
