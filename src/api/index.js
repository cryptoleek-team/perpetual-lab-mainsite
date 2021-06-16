import axios from "axios";
import moment from "moment";

const news_api_url = "https://cryptonews-api.com/api/v1"
const ticker_url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc"

const NEWSAPI_KEY = process.env.REACT_APP_NEWSAPI_KEY;

export const getNewsData = async(ticker)=>{
    try{
        let newsList = [];
        const {data} = await axios.get(news_api_url,{
            params:{
                tickers:ticker,
                sortby:"rank",
                items:"10",
                token: NEWSAPI_KEY
            }
        });

        if(data){
            let array_middleware = data.data;
            array_middleware.forEach(item=>{
                newsList.push({
                    "news_url":item.news_url,
                    "image_url":item.image_url,
                    "title":item.title,
                    "text":item.text.length > 150 ? item.text.substring(0,150) + "...": item.text,
                    "source_name":item.source_name,
                    "date":moment(item.date).format("MMMM Do YYYY, h:mm"),
                    "tickers":item.tickers,
                });
            })
            return newsList;
        }
    }catch(err){
        console.log(err)
    }
}

export const getTickersData = async()=>{
    try{
        let tickersList=[];
        let result = await axios.get(ticker_url);

        if(result){
            result.data.forEach(item =>{
                tickersList.push({
                    "id":item.id,
                    "symbol":item.symbol.toUpperCase(),
                    "name":item.name,
                    "image":item.image,
                })
            })
            return tickersList;
        }
    }catch(err){
        console.log(err)
    }
}
