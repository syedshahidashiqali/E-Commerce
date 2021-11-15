import React from 'react';

import imageProduct1 from "../images/image-product-1.jpg";
import imageProduct1Thumbnail from "../images/image-product-1-thumbnail.jpg";
import imageProduct2Thumbnail from "../images/image-product-2-thumbnail.jpg";
import imageProduct3Thumbnail from "../images/image-product-3-thumbnail.jpg";
import imageProduct4Thumbnail from "../images/image-product-4-thumbnail.jpg";
 

import minusIcon from "../images/icon-minus.svg";
import plusIcon from "../images/icon-plus.svg";
import addToCartIcon from "../images/icon-cart.svg";


function MainComponent() {
    return (
        <div className="container main-container">
            <div className="row row-first">
                <div className="col col-left">
                    {/* <div className="row col up-down"> */}
                        <div className="col col-up">
                            <img src={imageProduct1} style={{
                                // marginTop: "100px",
                                width: "350px",
                                borderRadius: "20px"
                            }} alt="image product 1" />
                        </div>
                        <div className="col col-down">
                            <div className="first">
                                <img src={imageProduct1Thumbnail} style={{
                                    width:"70px",
                                    margin: "20px 0 0 12px",
                                    borderRadius: "10px"
                                }} alt="image" />
                            </div>
                            <div className="second">
                                <img src={imageProduct2Thumbnail} style={{
                                        width:"70px",
                                        margin: "20px 0 0 15px",
                                        borderRadius: "10px"
                                    }} alt="image" />
                            </div>
                            <div className="third">
                                <img src={imageProduct3Thumbnail} style={{
                                        width:"70px",
                                        margin: "20px 0 0 15px",
                                        borderRadius: "10px"
                                    }} alt="image" />
                            </div>
                            <div className="fourth">
                                <img src={imageProduct4Thumbnail} style={{
                                        width:"70px",
                                        margin: "20px 0 0 15px",
                                        borderRadius: "10px"
                                    }} alt="image" />
                            </div>
                        </div>
                    {/* </div> */}
                </div>
                <div className="col col-right">
                    <div>
                        <h6 className="orange">SNEAKER COMPANY</h6>
                        <h1>Fall Limited Edition <br /> Sneakers</h1>
                        <p>These low-profile sneakers are your perfect 
                            casual wear companion. Featuring a durable 
                            rubber outer sole, they'll withstand 
                            everything the weather can offer.
                        </p>

                        <h5 className="amount">$125.00</h5> <span>50%</span>
                        <h6 className="strike"><del>$250.00</del></h6>
                        <div className="buttons">
                            <div className="minus-value-plus">
                                {/* <button>-</button>
                                <input type="text" />
                                <button>+</button> */}
                                <a href="#"><img src={minusIcon} alt="minus icon" /></a>
                                <div className="plus-minus-value">0</div>
                                <a href="#"><img src={plusIcon} alt="plus icon" /></a>

                            </div>
                            <div className="add-to-cart">
                                <button>
                                    <img src={addToCartIcon} alt="" />
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainComponent
