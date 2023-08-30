import React, { useContext, useEffect, useState } from "react";
import "../style/searchbar.css";
import { BsSearch } from "react-icons/bs";
import ContextData from "../context/product-data";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import formatAmount from "../context/constant";
import { Button } from "@mui/material";
import { FaUser, FaShoppingCart } from "react-icons/fa";


const Searchbar = () => {
  const { search, setSearch, setOpen, isUserLogin, setIsUserLogin } =
    useContext(ContextData);
  const navigate = useNavigate();
  const navii=!isUserLogin?'/login':'/cart';
  const { totalQuantity, totalCartPrice } = useSelector((state) => state);
  return (
    <>
      <div className="second-nav">
        <div className="snap-logo">
          <span
            
            onClick={() => navigate("/")}
          >GraBDeal</span>
        </div>
        <div className="input-search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="magnifine">
            <BsSearch />
          </div>
        </div>
        <div className="nav2">
          <Link
            style={{
              textDecoration: "none",
              color: "#fff",
             
            }}
            onClick={() => {
              setOpen(true);
              // navigate("/login");
            }}
            to={navii}
          >
              <FaShoppingCart style={{fontSize:"40px"}}/>
            <span style={{ paddingBottom: "10px", marginBottom: "10px" }}>
              {totalQuantity}
            </span>
          
          </Link>
        </div>
        <div className="userName">
          {!isUserLogin ? (
            <Button
              variant="contained"
              onClick={() => {
                setOpen(true);
                navigate("/login");
              }}
            >
              <FaUser />
              Login
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => {
                setIsUserLogin(false);
                // setOpen(true);
                localStorage.clear();
              }}
            >
              <FaUser />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Searchbar;
