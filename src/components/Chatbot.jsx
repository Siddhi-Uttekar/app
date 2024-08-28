import React, { useState } from "react";
import { Input, Button, Card, List, Typography } from "antd";
import axios from "axios";
import { SendOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Text } = Typography;

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post("http://localhost:5000/api/chat", {
        message: input,
      });

      const botMessage = { sender: "bot", text: response.data.botMessage };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setInput("");
  };

  return (
    <Card
      title="Chatbot"
      style={{ width: 400, margin: "20px auto", borderRadius: 10 }}
    >
      <List
        dataSource={messages}
        renderItem={(message) => (
          <List.Item
            style={{
              justifyContent:
                message.sender === "user" ? "flex-end" : "flex-start",
            }}
          >
            <Card
              style={{
                backgroundColor:
                  message.sender === "user" ? "#1890ff" : "#f0f0f0",
                color: message.sender === "user" ? "#fff" : "#000",
                borderRadius: 10,
                maxWidth: "75%",
              }}
            >
              <Text>{message.text}</Text>
            </Card>
          </List.Item>
        )}
      />
      <div style={{ display: "flex", marginTop: 10 }}>
        <TextArea
          rows={2}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{ marginRight: 10, borderRadius: 10 }}
        />
        <Button
          type="primary"
          icon={<SendOutlined />}
          onClick={handleSendMessage}
          style={{ borderRadius: 10 }}
        >
          Send
        </Button>
      </div>
    </Card>
  );
};

export default Chatbot;
