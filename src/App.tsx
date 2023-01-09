import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/home.page'
import UseCallbackPage from './pages/useCallBack/useCallback.page'
import UseEffectPage from './pages/useEffect/useEffect.page'
import UseMemoPage from './pages/useMemo/useMemo.page'
import UseReducerPage from './pages/useReducer/useReducer.page'
import UseRefPage from './pages/useRef/useRef.page'
import UseStatePage from './pages/useState/useState.page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/useState" element={<UseStatePage />} />
        <Route path="/useEffect" element={<UseEffectPage />} />
        <Route path="/useRef" element={<UseRefPage />} />
        <Route path="/useReducer" element={<UseReducerPage />} />
        <Route path="/useMemo" element={<UseMemoPage />} />
        <Route path="/useCallBack" element={<UseCallbackPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
