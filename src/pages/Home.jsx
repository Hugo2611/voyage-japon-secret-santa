import { useNavigate } from 'react-router-dom';
import useGameStore from '../store/gameStore';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const { tokyoSolved, kyotoSolved, osakaSolved } = useGameStore();

  return (
    <div className="home-container page-container">
      <div className="home-content">
        <h1>🗾 Voyage au Japon</h1>
        <p className="subtitle">Découvre ton cadeau en résolvant 3 énigmes</p>
        
        <div className="japan-map">
          <div className="map-decorations">
            <span className="kanji">旅</span>
          </div>
          
          <div className="cities">
            <div 
              className={`city ${tokyoSolved ? 'solved' : ''}`}
              onClick={() => navigate('/tokyo')}
            >
              <div className="city-icon">🏯</div>
              <div className="city-name">Tokyo</div>
              <div className="city-subtitle">Torii du bon ordre</div>
              {tokyoSolved && <div className="checkmark">✓</div>}
            </div>

            <div 
              className={`city ${!tokyoSolved ? 'locked' : ''} ${kyotoSolved ? 'solved' : ''}`}
              onClick={() => tokyoSolved && navigate('/kyoto')}
            >
              <div className="city-icon">🦊</div>
              <div className="city-name">Kyoto</div>
              <div className="city-subtitle">Le Kitsune et le Haiku</div>
              {kyotoSolved && <div className="checkmark">✓</div>}
              {!tokyoSolved && <div className="lock-icon">🔒</div>}
            </div>

            <div 
              className={`city ${(!tokyoSolved || !kyotoSolved) ? 'locked' : ''} ${osakaSolved ? 'solved' : ''}`}
              onClick={() => tokyoSolved && kyotoSolved && navigate('/osaka')}
            >
              <div className="city-icon">🗻</div>
              <div className="city-name">Osaka</div>
              <div className="city-subtitle">Le Daruma de la Fortune</div>
              {osakaSolved && <div className="checkmark">✓</div>}
              {(!tokyoSolved || !kyotoSolved) && <div className="lock-icon">🔒</div>}
            </div>
          </div>

          {tokyoSolved && kyotoSolved && osakaSolved && (
            <button 
              className="btn btn-final"
              onClick={() => navigate('/final')}
            >
              🎁 Voir la surprise
            </button>
          )}
        </div>

        <div className="instructions">
          <p>🎯 Complète chaque énigme pour débloquer la suivante</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
