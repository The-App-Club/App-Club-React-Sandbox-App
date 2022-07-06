import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const StyledDropDownButton = styled.button`
  background-color: transparent;
  border: none;
  font-family: inherit;
  position: relative;

  &::after {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 25px;
    right: -10px;
    content: '';
    width: 10px;
    height: 10px;
    background: darkgray;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledNavbar = styled.nav`
  position: sticky;
  top: 0;
  padding: 1vh 0;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  & ul {
    list-style: none;
    display: grid;
  }

  & > ul {
    grid-auto-flow: column;

    > li {
      /* https://stackoverflow.com/questions/28623446/hover-effect-expand-bottom-border */
      --border-width: 5px;
      --bottom-distance: 50px;

      /* https://cssgradient.io/ */
      background: rgb(3, 5, 71);
      background: linear-gradient(90deg, rgba(3, 5, 71, 1) 0%, rgba(93, 159, 191, 0.9976365546218487) 75%);
      background-size: 0% var(--border-width);
      background-repeat: no-repeat;
      transition: background-size 0.3s;

      &.from-center {
        background-position: 50% calc(100% - var(--bottom-distance));
      }

      &.from-right {
        background-position: 100% calc(100% - var(--bottom-distance));
      }

      &.from-left {
        background-position: 0 calc(100% - var(--bottom-distance));
      }

      &:hover {
        background-size: 100% var(--border-width);
      }

      margin: 0 1vw;

      a,
      .dropdown-title {
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: blue;
        font-size: 1.25rem;
      }

      > a,
      .dropdown-title {
        padding: 1rem 0.5rem;
      }
    }
  }

  & .dropdown {
    position: relative;

    &:hover,
    &:focus-within {
      .dropdown-menu {
        opacity: 1;
        transform: rotateX(0) translateX(-50%);
        visibility: visible;
      }
    }

    & .dropdown-menu {
      position: absolute;
      top: calc(100% - 0.25rem);
      left: 50%;
      transform: translateX(-50%);
      transform: rotateX(-90deg) translateX(-50%);
      transform-origin: top center;
      opacity: 0.3;
      transition: 280ms all 120ms ease-out;

      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 0.15rem 0.25rem rgba(black, 0.25);
      padding: 0.5rem 0;
      min-width: 15ch;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      & li {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        /* https://stackoverflow.com/questions/28623446/hover-effect-expand-bottom-border */
        --border-width: 5px;
        --bottom-distance: 0px;

        /* https://cssgradient.io/ */
        background: rgb(3, 5, 71);
        background: linear-gradient(90deg, rgba(3, 5, 71, 1) 0%, rgba(93, 159, 191, 0.9976365546218487) 75%);
        background-size: 0% var(--border-width);
        background-repeat: no-repeat;
        transition: background-size 0.3s;

        &.from-center {
          background-position: 50% calc(100% - var(--bottom-distance));
        }

        &.from-right {
          background-position: 100% calc(100% - var(--bottom-distance));
        }

        &.from-left {
          background-position: 0 calc(100% - var(--bottom-distance));
        }

        &:hover {
          background-size: 100% var(--border-width);
        }
      }

      & a {
        color: #444;
        display: block;
        padding: 0.5rem;
      }
    }
  }
`;

const NavBar = () => {
  return (
    <StyledNavbar aria-label="Main Navigation">
      <ul>
        <li className="from-left">
          <a href="/about">About</a>
        </li>
        <li className="dropdown from-center">
          <StyledDropDownButton type="button" className="dropdown-title" aria-expanded="false" aria-controls="sweets-dropdown">
            Sweets
          </StyledDropDownButton>
          <ul className="dropdown-menu" id="sweets-dropdown">
            <li className="from-left">
              <a href="/spike">Spike</a>
            </li>
            <li className="from-left">
              <a href="/fei">Fei</a>
            </li>
            <li className="from-left">
              <a href="/edo">Edo</a>
            </li>
            <li className="from-left">
              <a href="/jet">Jet</a>
            </li>
          </ul>
        </li>
        <li className="from-right">
          <a href="/gallery">Gallery</a>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export { NavBar };
