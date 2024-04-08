import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    console.log("🚀 ~ GifGrid ~ isLoading1:", isLoading)
      
    
    const addIem = async()=>{
      
      const items = await getGifs(category)
      
      setImages(items)
      setIsLoading(false)
      console.log("🚀 ~ GifGrid ~ isLoading2:", isLoading)
      
  
   }
    
  
    useEffect(() => {
  
      addIem()
     
    }, []);


  return {
    images: images,
    isLoading:isLoading

  }

  
}
