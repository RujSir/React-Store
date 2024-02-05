import React from 'react'

export default function  Orders({orderList,setOrderList})  {
  return (
    <>
   <div className="product">
        <div className="product-list">
          {orderList.length > 0 ? (
            <>
              {/* <div className="p-col"> */}
              {orderList.map((tmp) => {
                console.log("🚀 ~ Product ~ tmp:", tmp);
                return (
                  <>
                    <div className="product-card">
                      <img
                        src={tmp.images[0]}
                      />
                      <h3>{tmp.brand}</h3>
                      <h5>สเปค : {tmp.description}</h5>
                      <p>
                        Price:
                        {tmp.price}
                      </p>
                      <p>
                        จำนวนคงเหลือ:
                        {tmp.stock}
                      </p>
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
  )
}
