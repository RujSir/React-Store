import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import Search from "./Search";
import Orders from "./Orders";

export default function  Main () {
  const [page, setPage] = useState({ action: "" });

  const [productList, setProductList] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [srh, setSrh] = useState();

  useEffect(() => {
    if (page.action === "") {
      onProducts();
    }
  }, [page]);

  const onProducts = async () => {
    await axios.get("https://dummyjson.com/products").then(
      (res) => {
        let tmp = [];
        if (res.data) {
          res.data.products.forEach((element) => {
            tmp.push({
              ...element,
            });
          });
          setProductList(tmp);
        }
      },
      function (err) {}
    );
  };

  const onSearchProducts = async (req) => {
    await axios.get("https://dummyjson.com/products/search?q=phone").then(
      (res) => {
        let tmp = [];
        if (res.data) {
          res.data.products.forEach((element) => {
            tmp.push({
              ...element,
            });
          });
          setProductList(tmp);
        }
      },
      function (err) {}
    );
  };

  const onSearchSingleProduct = async (req) => {
    await axios.get("https://dummyjson.com/products/1").then(
      (res) => {
        console.log("🚀 ~ onSearchSingleProduct ~ res:", res);
        let tmp = [];
        if (res.data) {
          [res.data].forEach((element) => {
            tmp.push({
              ...element,
            });
          });
          setProductList(tmp);
        }
      },
      function (err) {}
    );
  };

  const onSearchGetProduct = async (req) => {
    await axios.get("https://dummyjson.com/products/category/smartphones").then(
      (res) => {
        console.log("🚀 ~ onSearchSingleProduct ~ res:", res);
        let tmp = [];
        if (res.data) {
          res.data.products.forEach((element) => {
            tmp.push({
              ...element,
            });
          });
          setProductList(tmp);
        }
      },
      function (err) {}
    );
  };
  const onDeleteProduct = async (req) => {
    await axios.delete("https://dummyjson.com/products/1").then(
      (res) => {
        let tmp = [];
        if (res.data) {
          productList.forEach((element) => {
            if (req.id !== element.id) {
              tmp.push({
                ...element,
              });
            }
          });
          setProductList(tmp);
        }
      },
      function (err) {}
    );
  };
  const onAddProduct = async (req) => {
    await axios.put("https://dummyjson.com/products/1").then(
      (res) => {
        if (res.data) {
    
          setProductList([...productList,res.data]);
        }
      },
      function (err) {}
    );
  };

  const onAddOrder = (obj) => {
    setOrderList([...orderList, obj]);
  };

  const handleSearch = (event) => {
    setSrh({ brand: event.target.value });
  };

  return (
    <>
      <div className="head">
        <h1>Online Store</h1>
        <div>
          {/* <input
            type="text"
            placeholder="ค้นหาชื่อแบรน.... "
            // value={searchTerm}
            onChange={handleSearch}
          />{" "} */}
          <button className="srhBtn" onClick={() => onSearchProducts()}>
            Search products
          </button>{" "}
          &nbsp;
          <button className="srhBtn" onClick={() => onSearchSingleProduct()}>
            Get a single product
          </button>{" "}
          &nbsp;
          <button className="srhBtn" onClick={() => onSearchGetProduct()}>
            Get products of a category
          </button>{" "}
          &nbsp;
          <button className="addBtn" onClick={() => onAddProduct()}>
            AddProduct
          </button>{" "}
          &nbsp;
        </div>
        <h1>
          รายการสินค้า{" "}
          {orderList.length > 0 ? (
            <>
              {" "}
              <span
                className="p-link"
                onClick={() => setPage({ action: "ShowOrder" })}
              >
                {" "}
                {orderList.length}
              </span>
            </>
          ) : (
            0
          )}{" "}
          จำนวน
        </h1>
      </div>
      {page.action === "" && (
        <Product
          productList={productList}
          setProductList={setProductList}
          onAddOrder={onAddOrder}
          onDeleteProduct={onDeleteProduct}
        />
      )}
      {page.action === "ShowSearch" && (
        <Search
          srhData={srh}
          productList={productList}
          page={page}
          setPage={setPage}
          onAddOrder={onAddOrder}
        />
      )}
      {page.action === "ShowOrder" && (
        <Orders orderList={orderList} setOrderList={setOrderList} />
      )}
    </>
  );
}
