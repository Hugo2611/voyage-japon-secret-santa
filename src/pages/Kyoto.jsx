import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useGameStore from '../store/gameStore';
import './Kyoto.css';

function Kyoto() {
  const navigate = useNavigate();
  const solveEnigma = useGameStore((state) => state.solveEnigma);
  const kyotoSolved = useGameStore((state) => state.kyotoSolved);
  
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [solved, setSolved] = useState(false);
  const [showKanji, setShowKanji] = useState(false);

  const correctAnswer = 'le torii'; // ou 'torii' accepté aussi

  useEffect(() => {
    if (kyotoSolved) {
      setSolved(true);
      setShowKanji(true);
      setMessage('🎉 Le haiku est complet !');
    }
  }, [kyotoSolved]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalizedAnswer = answer.toLowerCase().trim();
    
    if (normalizedAnswer === 'le torii' || normalizedAnswer === 'torii') {
      setSolved(true);
      solveEnigma('kyoto');
      setMessage('🎉 Le haiku est complet !');
      setError(false);
      
      // Animation des kanji
      setTimeout(() => {
        setShowKanji(true);
      }, 500);
    } else {
      setError(true);
      setMessage('❌ Ce n\'est pas la bonne réponse. Pense à l\'énigme précédente...');
      setTimeout(() => {
        setError(false);
        setMessage('');
      }, 3000);
    }
  };

  return (
    <div className="kyoto-container page-container">
      <div className="enigma-content">
        <h1>🦊 Kyoto</h1>
        <h2>Le Kitsune et le Haiku</h2>
        
        <div className="card">
          <div className="kitsune-container">
            <div className="kitsune-icon">🦊</div>
            <p className="kitsune-message">
              Le renard messager te confie un haiku ancien...
            </p>
          </div>

          <div className="haiku-box">
            <div className="haiku-line">Dans l'air du matin</div>
            <div className="haiku-line haiku-blank">
              {solved ? (
                <span className="haiku-answer">Le torii</span>
              ) : (
                '______'
              )}
              <span> murmure au vent</span>
            </div>
            <div className="haiku-line">Périple vers Kyoto</div>
          </div>

          {showKanji && (
            <div className="kanji-reveal">
              <span className="kanji-char">鳥</span>
              <span className="kanji-char">居</span>
            </div>
          )}

          {!solved && (
            <form onSubmit={handleSubmit} className="answer-form">
              <p className="hint">Quel mot manque dans ce haiku ?</p>
              <input
                type="text"
                className="input-field"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Ta réponse..."
                autoFocus
              />
              <button type="submit" className="btn">
                Valider
              </button>
            </form>
          )}

          {message && (
            <div className={`message ${error ? 'message-error' : 'message-success'}`}>
              {message}
            </div>
          )}

          {solved && (
            <button className="btn" onClick={() => navigate('/osaka')}>
              ➡️ Direction Osaka
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

export default Kyoto;
