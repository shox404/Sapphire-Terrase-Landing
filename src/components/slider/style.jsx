import styled from "styled-components";

export const Block = styled.div`
  width: 100%;
  min-height: 25px;
  position: relative;
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: #635a5a;
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    pointer-events: all;
    width: 10px;
    height: 10px;
    background-color: #2c2d2d;
    border-radius: 50%;
    box-shadow: 0 0 0 1px #c6c6c6;
    cursor: pointer;
  }
  input[type="range"]::-moz-range-thumb {
    -webkit-appearance: none;
    pointer-events: all;
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px #c6c6c6;
    cursor: pointer;
  }
  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    height: 5px;
    width: 100%;
    position: absolute;
    background-color: #d9d9d9;
    pointer-events: none;
    border-radius: 10px;
  }
  #fromSlider {
    height: 0;
    z-index: 1;
    top: 2.5px;
  }
`;
