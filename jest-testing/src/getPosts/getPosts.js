const axios = require('axios');

const getPosts = async () => {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
		return response.data.map(post => post.id);
	} catch (err) {
		console.log(err);
	}
}

module.exports = getPosts;
