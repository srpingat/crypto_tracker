import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./styles.css";
import "../List/styles.css"
import Grid from "../Grid/Grid";
import List from "../List/List";
import { convertNumber } from "../../../functions/convertNumber";
import Button from "../../Common/Button/Button";
import { motion } from "framer-motion";


const TabsComponent = ({ coins, setSearch }) => {
    const [value, setValue] = React.useState("grid");

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const style = {
      color: "var(--white)",
      "& .Mui-selected": {
        color: "var(--blue) !important",
      },
      fontFamily: "Inter,sans-serif",
      fontWeight: 600,
      textTransform: "capitalize",
    };
    return (
        <TabContext value={value}>
          <div style={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} variant="fullWidth">
              <Tab label="Grid" value="grid" sx={style} />
              <Tab label="List" value="list" sx={style} />
            </TabList>
          </div>
          <TabPanel value="grid">
            <div className="grid-flex">
              {coins.length > 0 ? (
                coins.map((coin, i) => (
                  <Grid coin={coin} key={i} delay={(i % 4) * 0.2} />
                ))
              ) : (
                <div>
                  <h1 style={{ textAlign: "center" }}>
                    Sorry, No Data Found
                  </h1>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "2rem",
                    }}
                  >
                    <Button text="Clear Search" onClick={() => setSearch("")} />
                  </div>
                </div>
              )}
            </div>
          </TabPanel>
          <TabPanel value="list">
            <table className="list-flex">
            <motion.tr
          className="list-row"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
            <td className="td-img">
             
            </td>

            <td className="td-info" style={{fontSize:'15px',fontWeight:'bolder',color:'#888888'}}>
               Name
              
            </td>
        
              <td>
                <div className="chip-flex"  style={{fontSize:'15px',fontWeight:'bolder',color:'#888888'}} >
                  Price change % in last 24hrs
                </div>
              </td>
            

              <td className="current-price  td-current-price" style={{fontSize:'15px',fontWeight:'bolder',color:'#888888'}}>
                Current Price
              </td>
           
          
            <td className="coin-name td-totalVolume"style={{fontSize:'15px',fontWeight:'bolder',color:'#888888'}}>
              Total Volume
            </td>
         
            <td className="coin-name td-marketCap"style={{fontSize:'15px',fontWeight:'bolder',color:'#888888'}}>
Market Capital
            </td>
       
        </motion.tr>

              {coins.length > 0 ? (
                coins.map((coin, i) => (
                  <List coin={coin} key={i} delay={(i % 8) * 0.2} />
                ))
              ) : (
                <div>
                  <h1 style={{ textAlign: "center" }}>
                  Sorry, No Data Found
                  </h1>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "2rem",
                    }}
                  >
                    <Button text="Clear Search" onClick={() => setSearch("")} />
                  </div>
                </div>
              )}
            </table>
          </TabPanel>
        </TabContext>
      );
}

export default TabsComponent