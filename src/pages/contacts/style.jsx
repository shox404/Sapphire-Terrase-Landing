import styled from "styled-components";

export const Block = styled.div`
  padding: 50px;
  hr {
    margin-block: 40px;
    border: 0.1px solid #797979;
  }
  .head-title {
    font-weight: 100;
    text-transform: uppercase;
  }
  a {
    color: #121212;
  }
  .box {
    display: flex;
    justify-content: space-between;
    gap: 50px;
    .line {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .links {
        display: flex;
        gap: 80px;
        .blog {
          display: flex;
          flex-direction: column;
          gap: 5px;
          font-size: 15px;
          white-space: nowrap;
          p {
            margin-bottom: 10px;
            color: #b5b5b5;
          }
        }
        .blog:nth-child(1) {
          a {
            text-decoration: none;
          }
        }
      }
      .form {
        display: flex;
        flex-direction: column;
        gap: 15px;
        input {
          background-color: transparent;
          height: 35px;
          border: none;
          border-bottom: 1px solid #797979;
          outline: none;
        }
      }
    }
  }
  .title {
    color: #5b5b5b;
    width: 100%;
    font-size: 8vw;
    text-align: center;
  }
  @media screen and (max-width: 700px) {
    padding: 10px;
    padding-bottom: 30px;
    .line,
    .links {
      gap: 50px;
      flex-wrap: wrap;
    }
    .box {
      flex-direction: column;
      .line {
        .links {
          flex-direction: column;
          gap: 40px;
        }
      }
      img {
        width: 100%;
      }
    }
  }
`;
