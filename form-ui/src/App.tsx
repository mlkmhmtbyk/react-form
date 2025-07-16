import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateUser } from './pages/CreateUser';
import { UserCard } from './pages/UserCard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateUser />} />
        <Route path="/user" element={<UserCard />} />
      </Routes>
    </BrowserRouter>
  );
}
