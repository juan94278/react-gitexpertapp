export const getGifs = async ( categoria ) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( categoria ) }&limit=50&api_key=7P4wp4KDe44hU3mzaTycF5lIsEZzb4YI`;
    const respuesta = await fetch( url );
    const { data } = await respuesta.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;
}