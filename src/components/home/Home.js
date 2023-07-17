import React from "react";
import styled, { css } from "styled-components";
const StyledCard = styled.div`
  position: relative;
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
  .card-content {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    width: calc(100% - 36px);
    background-color: #fff;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
  }
  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  .card-user {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
  .user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    object-fit: cover;
    flex-shrink: 0;
  }
  .username {
    font-weight: 300;
    font-size: 16px;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card-icon {
    width: 30px;
    column-gap: 0.5rem /* 8px */;
    display: flex;
    align-items: center;
  }
  .card-ammount {
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(
      86.88deg,
      #7d6aff 1.38%,
      #ffb86c 64.35%,
      #fc2872 119.91%
    );

    ${(props) =>
      props.secondary &&
      css`
        background: linear-gradient(86.88deg, #20e3b2 1.38%, #2cccff);
      `};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
  .card-title {
    font-size: 18px;
    font-weight: bold;
    color: black;
  }
`;
// const StyledCard = styled.div`
//   position: relative;
// `;

const Home = () => {
  return (
    <StyledCard>
      <div className="card-image border p-4">
        <img
          src="https://cdn.tgdd.vn/Products/Images/44/301634/hp-15s-fq2716tu-i3-7c0x3pa-thumb-600x600.jpg"
          alt=""
        />
      </div>
    </StyledCard>
  );
};

export default Home;
