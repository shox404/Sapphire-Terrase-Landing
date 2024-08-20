import styled from "styled-components";

export const Block = styled.div`
  padding-block: 20px;
  padding-inline: 50px;
  text-transform: uppercase;
  background-color: #ffffffa0;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  backdrop-filter: blur(20px);
  align-items: start;
  z-index: 10;
  img {
    cursor: pointer;
  }
  .line {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-left: 20%;
    margin-right: 40px;
    a {
      color: #2c2d2d;
      white-space: nowrap;
    }
    .links,
    .socials,
    .services {
      display: flex;
      flex-direction: column;
      gap: 5px;
      font-size: 10px;
    }
    .links {
      a {
        text-decoration: none;
      }
    }
    .languages {
      display: flex;
      gap: 15px;
      font-size: 12px;
      span {
        cursor: pointer;
      }
      :nth-child(2) {
        color: #b5b5b5;
      }
    }
  }
  .icons {
    display: flex;
    gap: 20px;
    align-items: center;
    height: 15px;
    svg {
      cursor: pointer;
    }
    :nth-child(2) {
      font-size: 23px;
    }
  }
  .menu {
    position: absolute;
    height: 100vh;
    top: 0;
    width: 0;
    right: 0;
    animation: ${(p) => (p.open ? "opening" : "closing")} 0.3s linear forwards;
    background-color: #f4dfc1;
    display: flex;
    overflow: hidden;
    @keyframes opening {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
    @keyframes closing {
      from {
        width: 100%;
      }
      to {
        width: 0;
      }
    }
    .video {
      height: 100dvh;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      img:nth-child(1) {
        height: 100%;
      }
      img:nth-child(2) {
        position: absolute;
      }
    }
    .box {
      width: 100%;
      padding: 20px 20px 20px 80px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      a {
        color: #2c2d2d;
        white-space: nowrap;
      }
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        a {
          font-size: 15px;
          margin-left: 150px;
        }
        .icons {
          display: flex;
          gap: 25px;
          align-items: center;
          height: 15px;
          svg {
            cursor: pointer;
          }
          :nth-child(2) {
            font-size: 23px;
          }
        }
      }
      .links {
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 35px;
        a {
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .footer {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .l {
          display: flex;
          justify-content: space-between;
          align-items: end;
          p {
            text-align: end;
          }
        }
        .l:nth-child(2) {
          color: #8d8d8d;
        }
      }
    }
  }
  @media screen and (max-width: 700px) {
    display: block;
    padding: 10px;
    .services {
      display: none !important;
    }
    img {
      height: 30px;
      margin-top: 10px;
    }
    .media-icons {
      position: absolute;
      top: calc(55px / 2);
      right: 20px;
    }
    .line {
      display: none;
    }
    .menu {
      flex-direction: column-reverse;
      justify-content: space-between;
      .video {
        height: 40dvh;
        img:nth-child(1) {
          width: 100%;
          height: 40dvh;
          object-fit: cover;
        }
        img:nth-child(2) {
          transform: scale(2.5);
        }
      }
      .box {
        height: 60dvh;
        padding: 10px;
        gap: 30px;
        .header {
          a {
            margin-left: 0 !important;
          }
        }
        .links {
          font-size: 20px;
        }
        .footer {
          .l {
            flex-direction: column;
            align-items: start;
            gap: 10px;
            p {
              text-align: start;
            }
          }
        }
      }
    }
  }
`;
