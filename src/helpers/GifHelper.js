export const getData = async (category) => {
    if (category) {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=E813qUR8a8ZJa0CE5bhG8LwYLLPhut6h&q=${encodeURI(category)}&offset=0&limit=10`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        const dataFormat = data.map(gif => {
            return {
                id: gif.id,
                title: gif.title,
                img: gif.images?.downsized_large.url
            }
        })

        return dataFormat;
    }
}
