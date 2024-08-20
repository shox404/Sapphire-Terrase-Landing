import React from "react";
import { Block } from "./style";

export default function Gallery() {
  return (
    <Block>
      <h1>Gallery</h1>
      <hr />
      <div className="line">
        <p>All (32)</p>
        <p>EXTERIOR</p>
        <p>INTERIOR</p>
        <p>LANDSCAPING</p>
        <p>TERRACE</p>
      </div>
      <div className="first">
        <div className="images">
          <div className="image">
            <img src={require("../../assets/gallery/img-1.png")} />
            <p>(01) INTERIOR</p>
          </div>
          <div className="image">
            <img src={require("../../assets/gallery/img-2.png")} />
            <p>(02) INTERIOR</p>
          </div>
        </div>
        <div className="image">
          <img src={require("../../assets/gallery/img-3.png")} />
          <p>(03) INTERIOR</p>
        </div>
      </div>
      <div className="second">
        <div className="image">
          <img src={require("../../assets/gallery/img-4.png")} />
          <p>(04) INTERIOR</p>
        </div>
        <div className="image">
          <img src={require("../../assets/gallery/img-5.png")} />
          <p>(05) INTERIOR</p>
        </div>
      </div>
      <div className="third">
        <div className="image">
          <img src={require("../../assets/gallery/img-6.png")} />
          <p>(06) INTERIOR</p>
        </div>
        <div className="image">
          <img src={require("../../assets/gallery/img-7.png")} />
          <p>(07) INTERIOR</p>
        </div>
        <div className="image">
          <div className="blog">
            <img src={require("../../assets/gallery/img-8.png")} />
            <p>(08) INTERIOR</p>
          </div>
        </div>
      </div>
    </Block>
  );
}
