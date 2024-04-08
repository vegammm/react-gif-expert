export const getGifs =  async(category) =>{
  
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ZonErRyfW782CAqFc31keksmO3oUrsQT&q=${category}&limit=10&lang=es`;
  
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    const gifs = data.map((item)=> ({
      id: item.id,
      title: item.title,
      url: item.images.downsized_medium.url
      
      
    }))
    
    
    return gifs;
}

