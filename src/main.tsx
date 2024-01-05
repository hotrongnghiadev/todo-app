import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // turn off React.StrictMode for `react-beatiful-dnd work
  // <React.StrictMode>
  <App />
  // </React.StrictMode>,
)
