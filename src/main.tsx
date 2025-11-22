import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RecoilRoot } from 'recoil'
import { AuthProvider } from './context/authProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <AuthProvider>
        <App />
    </AuthProvider>
  </RecoilRoot>
)
