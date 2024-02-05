import React from "react";

export default function  Search  ({ srhData, productList, page, setPage, onAddOrder })  {

  return (
    <>
      <div className="product">
        <div className="product-list">
          {productList.length > 0 ? (
            <>
              {productList.map((tmp) => {
                return (
                  <>
                    <div className="product-card">
                      <img src={tmp.images[0]} />
                      <h3>แบรน : {tmp.brand}</h3>
                      <h5>สเปค : {tmp.description}</h5>
                      <p>
                        Price:
                        {tmp.price}
                      </p>
                      <p>
                        จำนวนคงเหลือ:
                        {tmp.stock}
                      </p>
                      <button
                        className="addBtn"
                        onClick={() => onAddOrder(tmp)}
                      >
                        Add to Cart
                      </button>{" "}
                      &nbsp;
                      <button
                        className="deleteBtn"
                        // onClick={() => onDelete(product.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
