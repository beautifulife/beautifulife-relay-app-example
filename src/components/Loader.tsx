import React, { ComponentProps } from 'react'
import HashLoader from 'react-spinners/HashLoader'

import { css } from '@emotion/react'

type Props = ComponentProps<typeof HashLoader>

const Loader: React.FC<Props> = (props) => {
  return (
    <div
      css={css`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `}>
      <HashLoader size={50} color="#36D7B7" {...props} />
    </div>
  )
}

export default Loader
