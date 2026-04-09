import { formatMessage as formatMessageService } from "../services/formatterService.js";

const formatMessage = (req, res) => {
  try {
    const { message, channel } = req.body;

    // Basic validation
    if (!message || message.trim() === "") {
      return res.status(400).json({ error: "Message is required" });
    }

    if (!channel) {
      return res.status(400).json({ error: "Channel is required" });
    }

    const formattedMessage = formatMessageService(message, channel);

    res.json({ formatted_message: formattedMessage });
  } catch (error) {
    if (error.message.includes("Unsupported channel")) {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

export { formatMessage };
