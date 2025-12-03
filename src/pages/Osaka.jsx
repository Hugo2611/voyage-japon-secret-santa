import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useGameStore from '../store/gameStore';
import './Osaka.css';

function Osaka() {
  const navigate = useNavigate();
  const solveEnigma = useGameStore((state) => state.solveEnigma);
  const osakaSolved = useGameStore((state) => state.osakaSolved);
  
  const [leftEyeFilled, setLeftEyeFilled] = useState(false);
  const [rightEyeFilled, setRightEyeFilled] = useState(false);
  const [wish, setWish] = useState('');
  const [message, setMessage] = useState('');
  const [solved, setSolved] = useState(false);
  const [showWishInput, setShowWishInput] = useState(false);
  const [darumaGlowing, setDarumaGlowing] = useState(false);

  useEffect(() => {
    if (osakaSolved) {
      setSolved(true);
      setLeftEyeFilled(true);
      setRightEyeFilled(true);
      setMessage('🎉 Le Daruma est réveillé ! Ton souhait est exaucé !');
      setDarumaGlowing(true);
    }
  }, [osakaSolved]);

  const handleEyeClick = (eye) => {
    if (solved) return;

    if (eye === 'left' && !leftEyeFilled) {
      setLeftEyeFilled(true);
      setMessage('👁️ Premier œil ouvert ! Le Daruma commence à s\'éveiller...');
      setTimeout(() => setMessage(''), 2000);
    } else if (eye === 'right' && leftEyeFilled && !rightEyeFilled) {
      setRightEyeFilled(true);
      setMessage('👁️ Deuxième œil ouvert ! Maintenant, fais un vœu pour réveiller complètement le Daruma...');
      setShowWishInput(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (wish.trim().length < 3) {
      setMessage('❌ Ton vœu doit contenir au moins 3 caractères...');
      setTimeout(() => setMessage(''), 2000);
      return;
    }

    setSolved(true);
    solveEnigma('osaka');
    setDarumaGlowing(true);
    setMessage('🎉 Le Daruma est réveillé ! Ton souhait est exaucé !');
  };

  return (
    <div className="osaka-container page-container">
      <div className="enigma-content">
        <h1>🗻 Osaka</h1>
        <h2>Le Daruma de la Fortune</h2>
        
        <div className="card">
          <p className="instruction">
            {!leftEyeFilled 
              ? 'Réveille le Daruma en remplissant ses yeux dans le bon ordre...'
              : !rightEyeFilled
              ? 'Continue ! Remplis le deuxième œil...'
              : !solved
              ? 'Fais un vœu pour compléter le rituel...'
              : 'Le Daruma veille sur toi !'}
          </p>

          <div className={`daruma-interactive ${darumaGlowing ? 'glowing' : ''} ${solved ? 'awakened' : ''}`}>
            <div className="daruma-large">
              <div className="daruma-body-large">
                {/* Décorations */}
                <div className="daruma-pattern-top">🌸</div>
                <div className="daruma-pattern-bottom">🌸</div>
                
                <div className="daruma-face-large">
                  {/* Sourcils */}
                  <div className="daruma-eyebrows">
                    <div className="eyebrow-left">／</div>
                    <div className="eyebrow-right">＼</div>
                  </div>
                  
                  {/* Yeux cliquables */}
                  <div className="daruma-eyes-large">
                    <div 
                      className={`eye-socket ${leftEyeFilled ? 'filled' : 'empty'}`}
                      onClick={() => handleEyeClick('left')}
                      style={{ cursor: !leftEyeFilled && !solved ? 'pointer' : 'default' }}
                    >
                      {leftEyeFilled ? '⚫' : '○'}
                      {!leftEyeFilled && !solved && <span className="eye-hint">1</span>}
                    </div>
                    <div 
                      className={`eye-socket ${rightEyeFilled ? 'filled' : 'empty'}`}
                      onClick={() => handleEyeClick('right')}
                      style={{ cursor: leftEyeFilled && !rightEyeFilled && !solved ? 'pointer' : 'default' }}
                    >
                      {rightEyeFilled ? '⚫' : '○'}
                      {leftEyeFilled && !rightEyeFilled && !solved && <span className="eye-hint">2</span>}
                    </div>
                  </div>

                  {/* Kanji au centre */}
                  <div className="daruma-kanji-large">
                    {solved ? '福' : '願'}
                  </div>
                  
                  {/* Moustache */}
                  <div className="daruma-mustache">〰</div>
                </div>

                {/* Bras stylisés */}
                <div className="daruma-arms">
                  <div className="arm-left">💪</div>
                  <div className="arm-right">💪</div>
                </div>
              </div>
            </div>

            {/* Légende */}
            <div className="daruma-legend">
              <p className="legend-text">
                🎎 <strong>Tradition du Daruma :</strong> Remplis l'œil gauche en faisant un vœu, 
                puis l'œil droit quand il se réalise.
              </p>
            </div>
          </div>

          {message && (
            <div className={`message message-success`}>
              {message}
            </div>
          )}

          {showWishInput && !solved && (
            <form onSubmit={handleSubmit} className="wish-form">
              <p className="hint">Quel est ton vœu ? 🌟</p>
              <input
                type="text"
                className="input-field wish-input"
                value={wish}
                onChange={(e) => setWish(e.target.value)}
                placeholder="Écris ton souhait..."
                autoFocus
              />
              <button type="submit" className="btn">
                Réveiller le Daruma
              </button>
            </form>
          )}

          {solved && (
            <button className="btn btn-final" onClick={() => navigate('/final')}>
              🎁 Voir la surprise
            </button>
          )}
        </div>

        <button className="btn-back" onClick={() => navigate('/')}>
          ← Retour
        </button>
      </div>
    </div>
  );
}

export default Osaka;
