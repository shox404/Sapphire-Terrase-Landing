import styled from "styled-components";

export const Block = styled.div`
  height: 100dvh;
  background-color: #f4dfc1;
  display: flex;
  img {
    width: 100%;
  }
  .box {
    padding: 60px 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    a {
      color: #2c2d2d;
      white-space: nowrap;
    }
    .form {
      display: flex;
      flex-direction: column;
      gap: 15px;
      input {
        background-color: transparent;
        height: 35px;
        width: 300px;
        border: none;
        border-bottom: 1px solid #797979;
        outline: none;
      }
    }
  }
  @media screen and (max-width: 700px) {
    height: calc(100dvh - 70px);
    img {
      display: none;
    }
    .box {
      padding: 10px;
    }
  }
`;
