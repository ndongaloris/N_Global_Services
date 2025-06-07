import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Body from './body.jsx'
import Newsletter from './newsletter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Body />
    <Newsletter />
    <App />
    <Footer />
  </StrictMode>,
)
