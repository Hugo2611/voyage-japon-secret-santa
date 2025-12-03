import { Routes, Route, Navigate } from 'react-router-dom';
import useGameStore from './store/gameStore';
import Home from './pages/Home';
import Tokyo from './pages/Tokyo';
import Kyoto from './pages/Kyoto';
import Osaka from './pages/Osaka';
import Final from './pages/Final';

function ProtectedRoute({ children, canAccess }) {
  return canAccess ? children : <Navigate to="/" replace />;
}

function App() {
  const { tokyoSolved, kyotoSolved, osakaSolved } = useGameStore();

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tokyo" element={<Tokyo />} />
        <Route 
          path="/kyoto" 
          element={
            <ProtectedRoute canAccess={tokyoSolved}>
              <Kyoto />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/osaka" 
          element={
            <ProtectedRoute canAccess={tokyoSolved && kyotoSolved}>
              <Osaka />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/final" 
          element={
            <ProtectedRoute canAccess={tokyoSolved && kyotoSolved && osakaSolved}>
              <Final />
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
