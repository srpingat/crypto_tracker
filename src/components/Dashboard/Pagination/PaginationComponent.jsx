import React, { useState } from "react";
import "./styles.css";

import Pagination from "@mui/material/Pagination";
const PaginationComponent = ({ page, handlePageChange }) => {
    return (
        <div className="pagination-div">
          {localStorage.getItem("theme") == "dark"? <Pagination
            sx={{
              "& .MuiPaginationItem-text": {
                color: "#fff !important",
                border: "1px solid var(--grey)",
              },
              "& .MuiPaginationItem-text:hover": {
                backgroundColor: "transparent !important",
              },
              "& .Mui-selected  ": {
                backgroundColor: "var(--blue)",
                borderColor: "var(--blue)",
              },
              "& .MuiPaginationItem-ellipsis": {
                border: "none",
              },
            }}
            count={10}
            page={page}
            onChange={handlePageChange}
          />: <Pagination
          sx={{
            "& .MuiPaginationItem-text": {
              color: "#000000 !important",
              border: "1px solid var(--grey)",
            },
            "& .MuiPaginationItem-text:hover": {
              backgroundColor: "transparent !important",
            },
            "& .Mui-selected  ": {
              backgroundColor: "var(--blue)",
              borderColor: "var(--blue)",
            },
            "& .MuiPaginationItem-ellipsis": {
              border: "none",
            },
          }}
          count={10}
          page={page}
          onChange={handlePageChange}
        />}
         
        </div>
      );
}

export default PaginationComponent