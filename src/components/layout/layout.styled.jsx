import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  height: 75px;
  background-color: transparent;
  background-image: linear-gradient(
    360deg,
    rgb(255 235 60) 0%,
    rgb(75 157 160) 50%,
    rgba(43, 134, 197) 100%
  );
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
  transition: all 0.3s ease-in-out;
  position: relative;
  margin-left: 30px;

  &:hover,
  &:focus {
    color: #332ee4;
    text-shadow: 3px 3px 20px #332ee4, -2px 1px 30px #332ee4;
  }

  &.active:after {
    content: '';
    width: 100%;
    height: 3px;
    background: #0906d870;
    display: block;
    border-radius: 2px;
    position: absolute;
    bottom: -5px;
    left: 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
