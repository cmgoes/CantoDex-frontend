import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'

import 'scss/components/borrowOverview.scss'

const BorrowOverview = () => {
  const [netApyHover, setNetApyHover] = useState<boolean>(false)
  return (
    <Box className="borrow-overview">
      <Box className="balance-totals">
        <Box className="balance-content">
          <Box className="balance-content-mobile-hide">
            <Box
              sx={{
                width: '40%'
              }}
            >
              <Typography
                sx={{
                  color: '#00D395'
                }}
                className="balance-digit-label"
              >
                Supply Balance
              </Typography>
              <Typography variant="h3" className="balance-digit-value">
                $0
              </Typography>
            </Box>
            <Box
              sx={{
                width: '20%',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Box
                className="net-apy-wrapper"
                onMouseEnter={() => setNetApyHover(true)}
                onMouseLeave={() => setNetApyHover(false)}
              >
                <Box className="net-apy">
                  <svg viewBox="0 0 140 140" width="100%">
                    <path
                      d="M 70 70 L  70 0 A 70 70 0 0 1 70 0 Z"
                      stroke="transparent"
                      fill="#9669ED"
                    ></path>
                    <path
                      d="M 70 70 L  70 0 A 70 70 0 1 1 69.99956017702848 1.381744718642608e-9 Z"
                      stroke="transparent"
                      fill="#00D395"
                    ></path>
                  </svg>
                </Box>
                <Box
                  className={`net-apy-description ${
                    netApyHover ? 'active' : ''
                  }`}
                >
                  <label>{netApyHover ? '...' : 'Net APY'}</label>
                  <div className="headline">
                    {netApyHover
                      ? 'Interest earned and paid, plus COMP'
                      : '...'}
                  </div>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: '40%'
              }}
            >
              <Typography
                sx={{
                  color: '#9669ED'
                }}
                className="balance-digit-label"
              >
                Borrow Balance
              </Typography>
              <Typography variant="h3" className="balance-digit-value">
                $0
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="limit-bar">
          <label>Borrow Limit</label>
          <Typography
            sx={{
              fontSize: '12px',
              color: '#ffffff',
              padding: '0.3rem 0.3rem 0.25rem 0.25rem'
            }}
          >
            0%
          </Typography>
          <Box className="progress-bar-wrapper">
            <LinearProgress variant="determinate" value={10} />
          </Box>
          <label>$0.00</label>
        </Box>
      </Box>
    </Box>
  )
}
export default BorrowOverview
