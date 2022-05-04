import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import Header from './Header'
import BorrowOverview from 'components/BorrowOverview'
import SnackBar from 'components/SnackBar'

interface PageLayoutProps {
  children: React.ReactNode
  container?: boolean
}

const PageLayout = ({ children, container = true }: PageLayoutProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <BorrowOverview />
      <SnackBar />
      {container ? (
        <Container maxWidth="lg">{children}</Container>
      ) : (
        <> {children}</>
      )}
    </Box>
  )
}

export default PageLayout
