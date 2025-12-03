import { useNavigate } from 'react-router-dom';
import useGameStore from '../store/gameStore';
import './Final.css';

function Final() {
  const navigate = useNavigate();
  const resetGame = useGameStore((state) => state.resetGame);

  const handleRestart = () => {
    resetGame();
    navigate('/');
  };

  return (
    <div className="final-container page-container">
      <div className="final-content">
        <div className="celebration">
          <div className="fireworks">
            <span>🎆</span>
            <span>✨</span>
            <span>🎇</span>
            <span>✨</span>
            <span>🎆</span>
          </div>
          
          <h1 className="final-title">🎉 Félicitations ! 🎉</h1>
          
          <div className="journey-complete">
            <p className="journey-text">
              Tu as accompli ton voyage au Japon !
            </p>
            <div className="journey-icons">
              <span>🏯</span>
              <span>→</span>
              <span>🦊</span>
              <span>→</span>
              <span>🗻</span>
            </div>
          </div>
        </div>

        <div className="gift-reveal">
          <div className="daruma-container">
            <div className="daruma">
              <div className="daruma-body">
                <div className="daruma-face">
                  <div className="daruma-eyes">
                    <div className="eye">⚫</div>
                    <div className="eye">⚫</div>
                  </div>
                  <div className="daruma-kanji">福</div>
                </div>
              </div>
            </div>
            <p className="daruma-label">Daruma de la chance</p>
          </div>

          <div className="plus-sign">+</div>

          <div className="mug-gift-container">
            <div className="mug-gift">
              <div className="mug-gift-body">
                <div className="mug-gift-handle"></div>
                <div className="mug-gift-pattern">
                  <span>🌸</span>
                  <span className="gift-7">7</span>
                  <span>🌸</span>
                </div>
                <div className="mug-gift-rim"></div>
              </div>
            </div>
            <p className="mug-label">Mug japonais</p>
          </div>
        </div>

        <div className="final-message">
          <p className="gift-text">
            Voici ton cadeau Secret Santa ! 🎁
          </p>
          <p className="douzo">
            どうぞ <span className="douzo-translation">(douzo)</span>
          </p>
        </div>

        <div className="final-actions">
          <button className="btn" onClick={handleRestart}>
            🔄 Recommencer
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('/')}>
            🏠 Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
}

export default Final;
