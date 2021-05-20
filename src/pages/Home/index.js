import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

//nivo
import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveLine } from "@nivo/line";

//template
import Panel from "../../templates";

//components
import Cards from "../../components/Cards";
import Table from "../../components/Table";

//services
import {useFetch} from "../../hooks/useFetch"
import { bar, pie, line } from "../../services/json";

//utils
import { configBar } from "../../utils/nivoBar";
import { configPie } from "../../utils/nivoPie";
import { configLine } from "../../utils/nivoLine";

export default function Home() {
  const [mockData] = useState([
    {
      title: "Monthly sales",
      value: 2362,
      icon: "lnr lnr-cart",
      textcolor: "text-success",
    },
    {
      title: "Monthly visits",
      value: 687.123,
      icon: "lnr lnr-earth",
      textcolor: "text-info",
    },
    {
      title: "Products",
      value: 985,
      icon: "lnr lnr-gift",
      textcolor: "text-warning",
    },
    {
      title: "Users",
      value: 105.652,
      icon: "lnr lnr-users",
      textcolor: "text-danger",
    },
  ]);

  //api
  const [data] = useFetch("posts")

  return (
    <Panel title="Dashboard">
      <Cards data={mockData} />

      <Row>
        <Col sm={12} md={12} lg={12} xl={12}>
          <Card>
            <Card.Header>BAR</Card.Header>
            <Card.Body>
              <div style={{ height: 350 }}>
                <ResponsiveBar data={bar} {...configBar} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col className="mt-3" sm={12} md={6} lg={6} xl={6}>
          <Card>
            <Card.Header>PIE</Card.Header>
            <Card.Body>
              <div style={{ height: 350 }}>
                <ResponsivePie data={pie} {...configPie} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-3" sm={12} md={6} lg={6} xl={6}>
          <Card>
            <Card.Header>LINE</Card.Header>
            <Card.Body>
              <div style={{ height: 350 }}>
                <ResponsiveLine data={line} {...configLine} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3"><Table data={data} /> </Row>
    </Panel>
  );
}
