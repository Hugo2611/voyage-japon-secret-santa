import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useGameStore from '../store/gameStore';
import './Osaka.css';

function Osaka() {
  const navigate = useNavigate();
  const solveEnigma = useGameStore((state) => state.solveEnigma);
  const osakaSolved = useGameStore((state) => state.osakaSolved);
  
  const [blurLevel, setBlurLevel] = useState(50); // Très pixelisé au départ
  const [tapsCount, setTapsCount] = useState(0);
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [solved, setSolved] = useState(false);
  const [showCodeInput, setShowCodeInput] = useState(false);

  const correctCode = '7'; // Le chiffre dissimulé sur le mug

  useEffect(() => {
    if (osakaSolved) {
      setSolved(true);
      setBlurLevel(0);
      setShowCodeInput(true);
      setMessage('🎉 Code correct ! Tu as trouvé le chiffre secret !');
    }
  }, [osakaSolved]);

  const handleImageTap = () => {
    if (solved || tapsCount >= 3) return;

    const newTapsCount = tapsCount + 1;
    setTapsCount(newTapsCount);

    // Réduire progressivement le flou
    if (newTapsCount === 1) {
      setBlurLevel(25);
      setMessage('💡 L\'image devient plus claire...');
    } else if (newTapsCount === 2) {
      setBlurLevel(8);
      setMessage('💡 Encore un peu plus net...');
    } else if (newTapsCount === 3) {
      setBlurLevel(0);
      setMessage('✨ Image complètement nette ! Cherche le chiffre...');
      setShowCodeInput(true);
    }

    // Effacer le message après 2s
    setTimeout(() => {
      if (!solved) setMessage('');
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalizedAnswer = answer.trim();
    
    if (normalizedAnswer === correctCode) {
      setSolved(true);
      solveEnigma('osaka');
      setMessage('🎉 Code correct ! Tu as trouvé le chiffre secret !');
      setError(false);
    } else {
      setError(true);
      setMessage('❌ Ce n\'est pas le bon chiffre. Regarde bien le motif du mug...');
      setTimeout(() => {
        setError(false);
        setMessage('');
      }, 3000);
    }
  };

  return (
    <div className="osaka-container page-container">
      <div className="enigma-content">
        <h1>🗻 Osaka</h1>
        <h2>Le Mug caché & le Code Secret</h2>
        
        <div className="card">
          <p className="instruction">
            {tapsCount < 3 
              ? 'Tape sur l\'image pour la dévoiler progressivement...'
              : 'Cherche le chiffre dissimulé dans le motif du mug !'}
          </p>

          <div 
            className={`mug-container ${tapsCount >= 3 ? 'fully-revealed' : ''} ${solved ? 'solved' : ''}`}
            onClick={handleImageTap}
            style={{ cursor: tapsCount < 3 && !solved ? 'pointer' : 'default' }}
          >
            <div 
              className="mug-image"
              style={{
                filter: `blur(${blurLevel}px)`,
                transform: solved ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              {/* Représentation stylisée d'un mug japonais avec le chiffre 7 */}
              <div className="mug-body">
                <div className="mug-handle"></div>
                <div className="mug-pattern">
                  <span className="pattern-wave">〰️</span>
                  <span className="hidden-number">7</span>
                  <span className="pattern-wave">〰️</span>
                </div>
                <div className="mug-rim"></div>
              </div>
            </div>
            
            {tapsCount < 3 && !solved && (
              <div className="tap-indicator">
                👆 Tape ici ({tapsCount}/3)
              </div>
            )}
          </div>

          {message && (
            <div className={`message ${error ? 'message-error' : 'message-success'}`}>
              {message}
            </div>
          )}

          {showCodeInput && !solved && (
            <form onSubmit={handleSubmit} className="code-form">
              <p className="hint">Quel est le chiffre dissimulé sur le mug ?</p>
              <input
                type="text"
                className="input-field code-input"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="?"
                maxLength="1"
                autoFocus
              />
              <button type="submit" className="btn">
                Valider le code
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
