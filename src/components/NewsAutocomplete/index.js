import React,{useState,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getTickersData } from '../../api/index';

export default function NewsAutocomplete({setTicker}) {
    const [tickersList, setTickersList] = useState([]);

    useEffect(() => {
        let mounted = true;
        getTickersData().then(items=>{
            if(mounted){
                setTickersList(items)
            }
        })
        return () => mounted = false;
    }, [])

    const selectTicker = (ticker)=>{
      setTicker(ticker.symbol)
    }

  return (
    <Autocomplete
      id="ticker-select"
      style={{ width: "80%", margin:"0 auto"}}
      options={tickersList}
      autoHighlight
      getOptionLabel={(option) => option.symbol}
      renderOption={(option) => (
        <React.Fragment>
          <img src={option.image} alt="token" style={{width:"30px", marginRight:"20px"}}></img>
          {option.symbol} | {option.name}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a ticker"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}

      onChange={(e,value)=>selectTicker(value)}
    />
  );
}