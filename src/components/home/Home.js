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
      <div className="card-image">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1000x750&vertical=center"
          alt=""
        />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img
              className="user-avatar"
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1000x750&vertical=center"
              alt=""
            />
            <span className="username">@ahakdaj</span>
          </div>
          <div className="card-icon">
            <img src="/icon-heart.svg" alt="heart" />
          </div>
        </div>
        <div className="card-footer">
          <div className="card-title">Cosmic Perestional</div>
          <div className="card-ammount">12,000 PLS</div>
        </div>
      </div>
    </StyledCard>
  );
};

export default Home;
