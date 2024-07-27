import axios from "axios";
import React, { useEffect, useState } from "react";


import Loader from "../components/Common/Loader/Loader";
import Search from "../components/Dashboard/Search/Search";
import TabsComponent from "../components/Dashboard/Tabs/TabsComponent";

import PaginationComponent from "../components/Dashboard/Pagination/PaginationComponent";
import TopButton from "../components/Common/TopButton/TopButton";


const Dashboard = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [paginatedCoins, setPaginatedCoins] = useState([]);
  
    useEffect(() => {
      // Get 100 Coins
      getData();
    }, []);
    
  
    const getData = () => {
      setLoading(true);


const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': '	CG-2EnW2UDSrf1ojSjEpc5opkLs'
  }
};


fetch(url, options)
  .then(res => res.json())
  .then((json) =>{console.log(json);
     setCoins(json);
          setPaginatedCoins(json.slice(0, 10));
          setLoading(false);}
     )
  .catch(err => console.error('error:' + err));





    };
  
    const handleChange = (e) => {
      setSearch(e.target.value);
      console.log(e.target.value);
    };
  
    
  
    var filteredCoins = coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
    );
  
    const handlePageChange = (event, value) => {
      setPage(value);
      // Value = new page number
      var initialCount = (value - 1) * 10;
      setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
    };
  
  return (
    <>
    {loading ? (
      <Loader />
    ) : (
      <>
        <Search search={search} handleChange={handleChange} />
        <TabsComponent
          coins={search ? filteredCoins : paginatedCoins}
          setSearch={setSearch}
        />
        {!search && (
          <PaginationComponent
            page={page}
            handlePageChange={handlePageChange}
          />
        )}
      </>
    )}
    <TopButton />
  </>
  )
}

export default Dashboard