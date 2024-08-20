import styled from "styled-components";

export const Block = styled.div`
  padding-block: 20px;
  padding-inline: 50px;
  color: #2c2d2d;
  hr {
    margin-block: 40px;
    border: 0.1px solid #d8d8d8;
  }
  .first {
    display: flex;
    justify-content: space-around;
    a {
      color: #2c2d2d;
    }
    .blog {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .text {
        display: flex;
        color: #b5b5b5;
        justify-content: center;
        gap: 25px;
        p {
          cursor: pointer;
        }
        :nth-child(1) {
          text-decoration: underline;
          color: #2c2d2d;
        }
      }
      p {
        color: #b5b5b5;
      }
      .btns {
        display: flex;
        gap: 20px;
        button {
          height: 30px;
          width: 30px;
          border: none;
          outline: none;
          padding-inline: 15px;
          border-radius: 35px;
          cursor: pointer;
          background-color: #2c2d2d;
          color: #fff;
          border: none;
          padding: 8px;
        }
        :nth-child(2) {
          background-color: #fff;
          color: #000;
          border: 1px solid;
        }
      }
    }
  }
  .second {
    display: flex;
    justify-content: space-around;
    margin-block: 70px;
    .box {
      width: 100%;
      color: #b5b5b5;
      .line {
        margin-top: 15px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        p {
          width: 60%;
          font-size: 13px;
          font-weight: 100;
          color: #2c2d2d;
        }
      }
    }
    .box:nth-child(2) {
      padding: 130px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      text-transform: uppercase;
      p {
        cursor: pointer;
      }
      :nth-child(2) {
        color: #2c2d2d;
        text-decoration: underline;
      }
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 700px) {
    padding: 10px;
    .first,
    .first .blog {
      flex-direction: column;
      gap: 30px;
    }
    .second {
      flex-direction: column;
      gap: 30px;
      .box {
        img {
          width: 100%;
        }
        .line {
          flex-direction: column;
          p {
            width: 100%;
            margin-bottom: 20px;
          }
        }
      }
      .box:nth-child(2) {
        padding: 10px;
      }
    }
  }
`;
