const axios = require('axios');
module.exports = class {
    async search(keyword) {
        const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://deezerdevs-deezer.p.rapidapi.com/infos',
  headers: {
    'X-RapidAPI-Key': 'a880fcaaa9msh034b23eaf4af26ap13b79ajsnc29f9c0f5a73',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
    }
}