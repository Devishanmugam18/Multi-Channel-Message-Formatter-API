//formatter functions

function formatWhatsApp(message) {
  return `🔥 ${message}\nDon't miss out! 🎉`;
}

function formatEmail(message) {
  return `Subject: Exclusive Offer\n\nDear Customer,\n\n${message}\n\nBest regards,\nAgentz`;
}

function formatSMS(message) {
  // Keep it short (basic version)
  return message.length > 50 ? message.slice(0, 50) + "..." : message;
}

const formatters = {
  whatsapp: formatWhatsApp,
  email: formatEmail,
  sms: formatSMS,
};

function formatMessage(message, channel) {
  const formatter = formatters[channel.toLowerCase()];
  if (!formatter) {
    throw new Error(`Unsupported channel: ${channel}`);
  }
  return formatter(message.trim());
}

export { formatMessage, formatters };
