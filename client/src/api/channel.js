export async function fetchChannels() {
  const response = await fetch(`/api/channels`);
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  return result;
}

export async function postNewChannel(channel) {
  const response = await fetch(`/api/channels`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(channel),
  });

  console.log(response.ok);
  return response.ok;
}
