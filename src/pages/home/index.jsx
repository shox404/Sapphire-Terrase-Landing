import React from "react";
import { Block } from "./style";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { HiOutlineMinus } from "react-icons/hi2";

export default function Home() {
  return (
    <Block>
      <div className="services">
        <Link to="/call">
          Request Call <GoArrowUpRight />
        </Link>
        <Link to="/apartments">
          Choose an apartment <GoArrowUpRight />
        </Link>
      </div>
      <img src={require("../../assets/home/head.png")} className="head-img" />
      <div className="first">
        <h1>
          Unveil Your <br />
          Dream Home Today!
        </h1>
      </div>
      <div className="second">
        <div className="space"></div>
        <div className="content">
          <p>
            This is a multifunctional complex that includes residential real
            estate, commercial sites and everything that is needed for a
            comfortable life for its residents.
          </p>
          <Link to="/">
            MORE INFO <GoArrowUpRight />
          </Link>
          <img src={require("../../assets/home/video.png")} />
        </div>
      </div>
      <div className="third">
        <h1>Sapphere terrace</h1>
        <h2>
          <HiOutlineMinus /> Building Dreams, Building Futures,
          <br /> Your Trusted Construction Partner.
        </h2>
      </div>
      <hr />
      <div className="fourth">
        <div className="content">
          <img src={require("../../assets/home/picture-1.png")} />
          <p>
            Sapphire Terrace are luxury apartments and penthouses in the city
            center with panoramic terraces and a beautiful facade. A square
            footage of apartments for every taste, smart houses, as well as
            hotels and offices in the complex itself.
          </p>
        </div>
        <img
          src={require("../../assets/home/picture-2.png")}
          className="image"
        />
      </div>
      <h1 className="fifth">
        Details <br /> of perfection
      </h1>
      <hr />
      <div className="sixth">
        <img src={require("../../assets/home/picture-3.png")} />
        <div className="content">
          <div className="lines">
            <div className="line">
              <p>01.</p>
              <p>OFfice</p>
            </div>
            <div className="line">
              <p>02.</p>
              <p>terracce</p>
            </div>
            <div className="line">
              <p>03.</p>
              <p>fitness CLUB</p>
            </div>
            <div className="line">
              <p>04.</p>
              <p>supermarket</p>
            </div>
            <div className="line">
              <p>05.</p>
              <p>CAR PARKING</p>
            </div>
            <div className="line">
              <p>06.</p>
              <p>PLAYGROUND</p>
            </div>
            <div className="line">
              <p>07.</p>
              <p>launch zone</p>
            </div>
            <div className="line">
              <p>08.</p>
              <p>ELEVATOR</p>
            </div>
          </div>
          <Link to="/">
            MORE INFO <GoArrowUpRight />
          </Link>
        </div>
      </div>
      <div className="seventh">
        <hr />
        <div className="line">
          <h1>3 TOWERS</h1>
          <p>
            The residential complex consists of 3 interconnected buildings, the
            lower floors are business and household stores, the upper floors are
            residential apartments.
          </p>
        </div>
        <hr />
        <div className="line">
          <h1>16’TH FLOOR</h1>
          <p>
            All 3 buildings consist of 16 floors with a terrace, 13 of which are
            apartments. and the roof of the building is the launch zone.
          </p>
        </div>
        <hr />
        <div className="line">
          <h1>145 APARTMENTS</h1>
          <p>
            <span>
              Saphirre terrace residential and business complex consists of 145
              apartments - 1, 2, 3, 4-room apartments.
            </span>
            <br />
            <Link to="/">
              CHOOSE APARTMENT <GoArrowUpRight />
            </Link>
          </p>
        </div>
      </div>
      <div className="eightth">
        <img src={require("../../assets/home/map.png")} />
        <div className="text">
          <h1>
            convenient <br /> location for <br /> everything
          </h1>
          <div>
            <b>Residence Sapphire Terrace</b>
            <p>Tashkent, Avliyo Ota street 128</p>
          </div>
          <div className="places">
            <p>Hospital</p>
            <p>Supermarket</p>
            <p>School</p>
            <p>Transport</p>
            <p>fitness CLUB</p>
            <p>Mosque</p>
            <p>University</p>
            <p>Metro</p>
          </div>
          <Link to="/">
            OUR LOCATION <GoArrowUpRight />
          </Link>
        </div>
      </div>
    </Block>
  );
}
