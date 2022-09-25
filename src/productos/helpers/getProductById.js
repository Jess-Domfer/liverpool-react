export const getProductById = async (id) => {
  const url = `https://api.giphy.com/v1/gifs/${id}?api_key=buOOHjlmXcXyW8zLmoiIoxhrAcJScE3T&`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  console.log(data);

  return {
    id: data.id,
    image: data.images.downsized_medium.url,
    product: data.title,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse massa eros, aliquam id posuere vitae, laoreet vel orci. Aliquam cursus augue eu erat facilisis venenatis. Ut erat arcu, laoreet vitae velit id, semper congue metus. Vivamus sed pulvinar odio. Fusce auctor ipsum non elit sodales, quis convallis nisl eleifend. Duis nec ornare arcu. Aliquam quis aliquet velit. Nullam lorem felis, ornare ultrices erat eu, placerat mollis nunc. Cras quis sagittis lacus. Mauris pretium enim pretium tellus placerat vulputate. Nam eu commodo arcu.",
    price: { amount: 1000 },
    unit: 122,
  };
};
