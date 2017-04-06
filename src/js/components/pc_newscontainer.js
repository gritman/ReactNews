import React from 'react';
import {Row, Col} from 'antd';
import {Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;
export default class PCNewsContainer extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} class="container">
            <div class="leftContainer">
              <div class="carousel">
                <Carousel {...settings}>
                  <div><img src="./src/images/carousel_1.png" /></div>
                  <div><img src="./src/images/carousel_2.png" /></div>
                  <div><img src="./src/images/carousel_3.png" /></div>
                  <div><img src="./src/images/carousel_4.png" /></div>
                </Carousel>
              </div>
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  };
}
