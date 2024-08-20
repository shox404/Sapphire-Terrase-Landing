import React from "react";
import { Block } from "./style";
import { FaEyeSlash } from "react-icons/fa";
import Slider from "../../components/slider";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { LuListFilter } from "react-icons/lu";

export default function Apartments() {
  return (
    <Block>
      <div className="headImage">
        <img
          src={require("../../assets/apartments/head.png")}
          className="image"
        />
        <img
          src={require("../../assets/apartments/circle.png")}
          className="circle-1"
        />
        <img
          src={require("../../assets/apartments/circle.png")}
          className="circle-2"
        />
        <div className="indicator">
          <img src={require("../../assets/apartments/circle.png")} />
          <img src={require("../../assets/apartments/line-1.png")} />
          <div className="line"></div>
          <div className="box">
            <div>
              <p>Tower</p>
              <p>3</p>
            </div>
            <div>
              <p>Floors</p>
              <p>16</p>
            </div>
            <div>
              <p>Total apartments</p>
              <p>128</p>
            </div>
            <div>
              <p>Available apartments</p>
              <p>58</p>
            </div>
            <div>
              <p>Area of apartments</p>
              <p>45</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="title">APARTMENTS</h1>
      <hr />
      <div className="filter">
        <div className="mobile">
          <button className="active">
            Tower 3 <IoIosArrowDown />
          </button>
          <button>
            Filter <LuListFilter />
          </button>
        </div>
        <div className="column">
          <div className="blog">
            <p>Towers</p>
            <div className="items">
              <button>All towers</button>
              <button>Tower 1</button>
              <button>Tower 2</button>
              <button className="active">Tower 3</button>
            </div>
          </div>
          <div className="blog">
            <p>Numbers of rooms</p>
            <div className="items">
              <button className="active">All apartments</button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>Two-storey</button>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="blog">
            <p>Floor</p>
            <div className="items">
              <button className="active">All floor</button>
              <span></span>
              <button>-</button>
              <button>3th floor</button>
              <button>+</button>
            </div>
          </div>
          <div className="blog">
            <p>Apartment area</p>
            <div className="items">
              <Slider />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="blog">
            <p>Sold</p>
            <div className="items">
              <button>
                Show sold out <FaEyeSlash />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <div className="card-title">
            <p>Apartments 3-9-2B</p>
            <button>MORE</button>
          </div>
          <img src={require("../../assets/apartments/project-1.png")} />
          <div className="line">
            <p>Price:</p>
            <p>45 700 USD</p>
          </div>
          <hr />
          <div className="line">
            <div>
              <p>Floor 9</p>
              <p>Rooms 2</p>
              <p>65,9 m2</p>
            </div>
            <Link to="/info">
              BOOK NOW <GoArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <p>Apartments 3-3-4A</p>
            <button>MORE</button>
          </div>
          <img src={require("../../assets/apartments/project-2.png")} />
          <div className="line">
            <p>Price:</p>
            <p>67 400 USD</p>
          </div>
          <hr />
          <div className="line">
            <div>
              <p>Floor 3</p>
              <p>Rooms 3</p>
              <p>80,7 m2</p>
            </div>
            <Link to="/info">
              BOOK NOW <GoArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <p>Apartments 3-7-2B</p>
            <button>MORE</button>
          </div>
          <img src={require("../../assets/apartments/project-3.png")} />
          <div className="line">
            <p>Price:</p>
            <p>80 200 USD</p>
          </div>
          <hr />
          <div className="line">
            <div>
              <p>Floor 7</p>
              <p>Rooms 3</p>
              <p>85,3 m2</p>
            </div>
            <Link to="/info">
              BOOK NOW <GoArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <p>Apartments 3-3-1B</p>
            <button>MORE</button>
          </div>
          <img src={require("../../assets/apartments/project-4.png")} />
          <div className="line">
            <p>Price:</p>
            <p>82 700 USD</p>
          </div>
          <hr />
          <div className="line">
            <div>
              <p>Floor 6</p>
              <p>Rooms 3</p>
              <p>85,3 m2</p>
            </div>
            <Link to="/info">
              BOOK NOW <GoArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <p>Apartments 3-5-4B</p>
            <button>MORE</button>
          </div>
          <img src={require("../../assets/apartments/project-5.png")} />
          <div className="line">
            <p>Price:</p>
            <p>124 700 USD</p>
          </div>
          <hr />
          <div className="line">
            <div>
              <p>Floor 5</p>
              <p>Rooms 4</p>
              <p>109 m2</p>
            </div>
            <Link to="/info">
              BOOK NOW <GoArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <p>Apartments 3-4-1A</p>
            <button>MORE</button>
          </div>
          <img src={require("../../assets/apartments/project-6.png")} />
          <div className="line">
            <p>Price:</p>
            <p>132 400 USD</p>
          </div>
          <hr />
          <div className="line">
            <div>
              <p>Floor 5</p>
              <p>Rooms 4</p>
              <p>115 m2</p>
            </div>
            <Link to="/info">
              BOOK NOW <GoArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
      <h1 className="title">ADVANTAGES</h1>
      <hr />
      <div className="first">
        <img src={require("../../assets/apartments/apartment-1.png")} />
        <div className="blog">
          <img src={require("../../assets/apartments/apartment-2.png")} />
          <p>
            Sapphire Terrace features a lounge area with all modern amenities.
            This is the ideal place to take a break from the hustle and bustle
            of life and spend quality time with your loved ones without leaving
            your home.
          </p>
        </div>
      </div>
      <div className="second">
        <div className="blog">
          <img src={require("../../assets/apartments/apartment-3.png")} />
          <p>
            Upscale resort amenities will follow suit. Most importantly, the
            entrance to the apartments in the complex will also be designed in
            the most modern design.
          </p>
        </div>
        <div className="blog">
          <img src={require("../../assets/apartments/apartment-4.png")} />
          <p>
            Correct and safe parking! If you choose the Sapphire Terrace
            residential complex for your stay, then you don’t need to worry
            about parking at all! Each resident can use safe underground
            parking, and the parking lot is under video surveillance 24/7.
          </p>
        </div>
      </div>
    </Block>
  );
}
