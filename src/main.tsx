import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import FormAddMenuPage from './pages/FormAddMenuPage.tsx'
import GetAllMenuPage from './pages/getAllMenuPage.tsx'
import GetMenuByIdPage from './pages/GetMenuByIdPage.tsx'
import DeleteMenuByIdPage from './pages/DeleteMenuByIdPage.tsx'
import UpdateMenuPage from './pages/UpdateMenuPage.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
            <Route path="/list-menu" element={<GetAllMenuPage />} />
            <Route path="/menu/:id" element={<GetMenuByIdPage />} />
            <Route path="/create-menu" element={<FormAddMenuPage />} />
            <Route path="/update-menu" element={<UpdateMenuPage />} />
            <Route path="/delete-menu" element={<DeleteMenuByIdPage />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>
)
