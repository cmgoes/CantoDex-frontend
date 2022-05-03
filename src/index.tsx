import { StrictMode } from 'react'
import { render } from 'react-dom'
import 'tailwindcss/tailwind.css'
import 'styles/global.css'
import Providers from 'providers'
import App from './App'

render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
  document.getElementById('root')
)
