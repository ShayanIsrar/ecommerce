import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/index.jsx'
import { Provider } from 'react-redux'
import { store } from './store/Store.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  // </StrictMode>,
)
