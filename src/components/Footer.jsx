import React, { useEffect } from "react";
import { Layout, Typography, Row, Col, Space, Divider } from "antd";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

const { Footer } = Layout;
const { Title, Text } = Typography;

export default function CustomFooter() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      easing: "ease-in-out", // Easing function for animations
    });
  }, []);

  return (
    <Footer
      style={{ backgroundColor: "#000", color: "#fff", padding: "2rem 0" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row justify="center" style={{ marginBottom: "1rem" }}>
          <Col>
            <Title
              level={3}
              style={{ color: "#fff", textAlign: "center" }}
              data-aos="fade-up"
            >
              MentorConnect
            </Title>
          </Col>
        </Row>
        <Row justify="center" style={{ marginBottom: "1rem" }}>
          <Col>
            <Text
              style={{ textAlign: "center" }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              © 2024 MentorConnect. All rights reserved.
            </Text>
          </Col>
        </Row>
        <Row justify="center" style={{ marginBottom: "1rem" }}>
          <Col>
            <Space size="large">
              <a
                href="/privacy-policy"
                style={{ color: "#fff", textDecoration: "none" }}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                style={{ color: "#fff", textDecoration: "none" }}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Terms of Service
              </a>
              <a
                href="/contact-us"
                style={{ color: "#fff", textDecoration: "none" }}
                data-aos="fade-up"
                data-aos-delay="800"
              >
                Contact Us
              </a>
            </Space>
          </Col>
        </Row>
        <Divider style={{ borderColor: "#444" }} />
        <Row justify="center" style={{ marginBottom: "1rem" }}>
          <Col>
            <Text
              style={{ color: "#ccc", textAlign: "center" }}
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              Follow us on:
            </Text>
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <Space size="large">
              <a
                href="#"
                style={{ color: "#fff", textDecoration: "none" }}
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                Facebook
              </a>
              <a
                href="#"
                style={{ color: "#fff", textDecoration: "none" }}
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                Twitter
              </a>
              <a
                href="#"
                style={{ color: "#fff", textDecoration: "none" }}
                data-aos="fade-up"
                data-aos-delay="1600"
              >
                LinkedIn
              </a>
            </Space>
          </Col>
        </Row>
      </div>
    </Footer>
  );
}
