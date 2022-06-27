import Layout from '@/pages/layout'
import Search from '@/pages/search'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="*" element={<Navigate to={'/'} />}></Route>
    </Routes>
  )
}

export default App
