// src/components/FAQSection.js
import React from "react";
import { Collapse, Typography, Card } from "antd";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const { Panel } = Collapse;
const { Title, Paragraph } = Typography;

const faqs = [
  {
    question: "How does this platform work?",
    answer:
      "This platform connects candidates with experienced mentors who can provide guidance on career development, skill enhancement, and industry insights through scheduled virtual meetings.",
  },
  {
    question: "How do I book a session with a mentor?",
    answer:
      "To book a session, navigate to the mentor's profile and choose an available time slot that suits you. The system will automatically confirm the appointment and send you a reminder.",
  },
  {
    question: "Can I reschedule or cancel a booking?",
    answer:
      "Yes, you can reschedule or cancel a booking by accessing your appointments in the dashboard. Please make sure to do this at least 24 hours in advance to avoid any penalties.",
  },
  {
    question: "What are the technical requirements for video calls?",
    answer:
      "For the best experience, ensure you have a stable internet connection and a compatible device with a webcam and microphone. Most modern browsers support the video call feature.",
  },
  {
    question: "How do I provide feedback about a mentoring session?",
    answer:
      "After each session, you'll have the option to leave feedback directly through the platform. Your input helps us improve the quality of mentoring and ensures a better experience for everyone.",
  },
];

function FAQSection() {
  return (
    <div className="bg-[#F8F7F2] py-16 px-4 lg:px-16">
      <Title
        level={2}
        className="text-center mb-15 font-bold text-3xl lg:text-4xl"
      >
        Frequently Asked Questions
      </Title>
      <div className="max-w-4xl mx-auto mt-10">
        <Collapse
          accordion
          expandIconPosition="right"
          className="bg-white shadow-lg rounded-lg"
          expandIcon={({ isActive }) =>
            isActive ? (
              <FaChevronUp size={18} color="#333" />
            ) : (
              <FaChevronDown size={18} color="#333" />
            )
          }
          // Customize the Panel header styles
          headerClass="faq-panel-header"
          className="faq-collapse"
        >
          {faqs.map((faq, index) => (
            <Panel
              header={faq.question}
              key={index}
              className="faq-panel"
              style={{ borderRadius: "8px", marginBottom: "8px" }}
            >
              <Paragraph className="text-gray-700 leading-relaxed">
                {faq.answer}
              </Paragraph>
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
}

export default FAQSection;
