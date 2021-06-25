  export const getGifs = async (category) => {

        const url = `https://api.giphy.com/v1/gifs/search?api_key=HIe6DRQYbpPhlSBf9teJst6oa0fD0jse&q=${encodeURI(category)}&limit=10`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {

            return {
                id: img.id,
                titel: img.title,
                url: img.images?.downsized_medium.url

            }
        });
        return gifs;
    }