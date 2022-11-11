import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { getNewsAPI } from "./api";
import axios from "axios";

export const NewsContext = createContext();

const Context = ({children})=>{

    const [news,setNews] = useState([]);
    const [category,setCategory] = useState('general');
    const [index,setIndex] = useState(1);
    const [source, setSource] = useState();

    const fetchNews = async()=>{
        try{
            const {data} = await axios.get(getNewsAPI(category))
            setNews(data);
            setIndex(1);
        }catch(e){
            console.log('Error in fetchNews => ',e.message)
        }
    }
    
    const fetchNewsfromSource = async () => {
        try {
          const { data } = await axios.get(getSourceAPI(source));
          setNews(data);
          setIndex(1);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        fetchNews();
      }, [category]);
    
      useEffect(() => {
        fetchNewsfromSource();
      }, [source]);
    

    return <NewsContext.Provider value={{news,index,setIndex,setCategory,setSource}}>{children}</NewsContext.Provider>
};

export default Context;