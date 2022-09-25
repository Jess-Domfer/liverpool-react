export const getProducts = async category => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=buOOHjlmXcXyW8zLmoiIoxhrAcJScE3T&q=${category}&limit=25`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const products = data.map(product => ({
		id: product.id,
		title: product.title,
		url: product.images.downsized_medium,
		date: product.import_datetime,
		user: product.username,
		price: { amount: Math.ceil(Math.random() * 100) },
		description: `${product.title} This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.`
	}));
	return products;
};
