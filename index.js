import ReactDOM from 'react-dom';
import React, { useState,useEffect} from 'react'
import axios from 'axios'
import SampleTable from './table'
import './index.css';
import { Table, Tag, Space,Input } from "antd";
import Cards from './cards';
function Tracker() {
  const[coinsData,setcoinsData]=useState([])
  const[search,setsearch]=useState('')
  const handlechange=e=>{
    setsearch(e.target.value)
    
  }
  const { Search } = Input
  const filteredcoins=coinsData.filter(x=>x.name.toLowerCase().includes(search.toLowerCase()))
  console.log(filteredcoins)
  useEffect(() => {
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
     .then(res=>{
         setcoinsData(res.data)
         console.log(res.data)
     }).catch(error=>console.log(error))
  },[])
  return (
      <div>
        <div style={{backgroundColor:'#35496B',color:'#039ED9',fontWeight:'normal',fontSize:'20px',paddingTop:'1em',paddingLeft:'1em'}}>Quikie<div style={{color:'#000000',fontSize:'13px',paddingLeft:'2.5em'}}>Apps</div></div>
        
        <Cards ></Cards>
        <div style={{paddingTop:'1em',paddingLeft:'5em'}}>
        <Search placeholder="input search text" onChange={handlechange} style={{ width: 200 }} />
        </div>
          <SampleTable list={filteredcoins}></SampleTable>
      </div>
  )
}

ReactDOM.render(
  <Tracker></Tracker>,
  document.getElementById('root')
);


