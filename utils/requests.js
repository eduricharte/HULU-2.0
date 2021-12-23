const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_keys=${API_KEY}&language=en-US`
    } 
        
}