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

    const fetchNews = async()=>{
        try{
            const {data} = await axios.get(getNewsAPI(category))

            setNews(data);
            setIndex(1);
        }catch(e){
            console.log('Error in fetchNews => ',e.message)
        }
        
    }

    useEffect(() => {
        fetchNews();
    }, [category])
    

    return <NewsContext.Provider value={{news,index,setIndex}}>{children}</NewsContext.Provider>
};

export default Context;