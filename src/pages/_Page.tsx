import React from 'react'

import { css } from '@emotion/react'

import daangn from '../assets/daangn.png'
import daangn2 from '../assets/daangn2.png'
import Navigation from '../components/Navigation'

const _Page: React.FC = () => {
  return (
    <div
      css={css`
        padding: 16px;
      `}>
      <Navigation title="JOIN US!" />

      <h1
        css={css`
          line-height: 140%;
        `}>
        <img
          alt="daangn"
          src={daangn}
          css={css`
            width: 30px;
            margin: 0 5px 0 2px;
          `}
        />
        당근마켓에서
        <br />
        함께할 분을 찾고 있어요.
      </h1>

      <div
        css={css`
          text-align: center;
        `}>
        <img
          alt="daangn2"
          src={daangn2}
          css={css`
            width: 100%;
            border-radius: 40px;
          `}
        />
      </div>

      <div
        css={css`
          position: fixed;
          left: 16px;
          bottom: 16px;
          width: calc(100% - 32px);
          padding: 16px;
          border-radius: 12px;
          background: #ff8a3d;
          color: white;
          font-size: 1.8rem;
          font-weight: bold;
          text-align: center;
        `}>
        dngn.kr/join-us-dev
      </div>
    </div>
  )
}

export default _Page
