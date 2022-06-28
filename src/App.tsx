import Layout from '@/pages/layout'
import Search from '@/pages/search'
import { Routes, Route, Navigate } from 'react-router-dom'
import Feed from '@/components/feed'
import PlayInfo from '@/pages/playinfo'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Feed />} />
        <Route path="playlist/track/all/:id" element={<PlayInfo />} />
      </Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="*" element={<Navigate to={'/'} />}></Route>
    </Routes>
  )
}

export default App
