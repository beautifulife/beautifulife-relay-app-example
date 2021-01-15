import { ScreenHelmet, useNavigator } from 'karrotframe/lib'
import React, { ComponentProps } from 'react'

import { css } from '@emotion/react'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = ComponentProps<typeof ScreenHelmet> & {
  isHome?: boolean
  isRoot?: boolean
}

const Navigation: React.FC<Props> = ({ isHome, isRoot, ...props }) => {
  const { replace } = useNavigator()

  const handleHomeClick = () => {
    replace('/')
  }

  return (
    <ScreenHelmet
      appendLeft={
        !isHome &&
        isRoot && (
          <FontAwesomeIcon
            icon={faHome}
            size="lg"
            onClick={handleHomeClick}
            css={css`
              margin: 0 5px;
            `}
          />
        )
      }
      {...props}
    />
  )
}

export default Navigation
