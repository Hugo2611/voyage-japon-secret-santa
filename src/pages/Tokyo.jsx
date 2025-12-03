import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useGameStore from '../store/gameStore';
import './Tokyo.css';

// Système tap-to-swap pour mobile
function Tokyo() {
  const navigate = useNavigate();
  const solveEnigma = useGameStore((state) => state.solveEnigma);
  const tokyoSolved = useGameStore((state) => state.tokyoSolved);
  
  // Ordre correct : haut, milieu-haut, milieu-bas, bas
  const correctOrder = [0, 1, 2, 3];
  
  // Initialiser avec un mélange
  const [pieces, setPieces] = useState([2, 3, 0, 1]); // ordre mélangé
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [solved, setSolved] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (tokyoSolved) {
      setSolved(true);
      setPieces(correctOrder);
    }
  }, [tokyoSolved]);

  const handlePieceTap = (index) => {
    if (solved) return;

    if (selectedPiece === null) {
      // Première sélection
      setSelectedPiece(index);
    } else if (selectedPiece === index) {
      // Désélectionner si on clique sur la même pièce
      setSelectedPiece(null);
    } else {
      // Échanger les deux pièces
      const newPieces = [...pieces];
      [newPieces[selectedPiece], newPieces[index]] = [newPieces[index], newPieces[selectedPiece]];
      setPieces(newPieces);
      setSelectedPiece(null);

      // Vérifier si c'est résolu
      const isCorrect = newPieces.every((piece, idx) => piece === correctOrder[idx]);
      if (isCorrect) {
        setSolved(true);
        solveEnigma('tokyo');
        setMessage('🎉 Parfait ! Le torii est reconstruit !');
      }
    }
  };

  const resetPuzzle = () => {
    setPieces([2, 3, 0, 1]);
    setSelectedPiece(null);
    setMessage('');
  };

  return (
    <div className="tokyo-container page-container">
      <div className="enigma-content">
        <h1>🏯 Tokyo</h1>
        <h2>Torii du bon ordre</h2>
        
        <div className="card">
          <p className="instruction">
            Reconstitue le torii en tapant sur deux morceaux pour les échanger.
          </p>

          <div className="torii-puzzle">
            {pieces.map((pieceValue, index) => (
              <div
                key={index}
                className={`puzzle-piece ${selectedPiece === index ? 'selected' : ''} ${solved ? 'solved' : ''}`}
                onClick={() => handlePieceTap(index)}
                style={{
                  '--piece-index': pieceValue
                }}
              >
                <div className={`piece-content piece-${pieceValue}`}>
                  {pieceValue === 0 && <div className="torii-top">⛩️</div>}
                  {pieceValue === 1 && <div className="torii-upper">🏮</div>}
                  {pieceValue === 2 && <div className="torii-lower">🎋</div>}
                  {pieceValue === 3 && <div className="torii-base">🪨</div>}
                </div>
                <div className="piece-number">{index + 1}</div>
              </div>
            ))}
          </div>

          {message && (
            <div className="message message-success">
              {message}
            </div>
          )}

          {!solved && (
            <button className="btn btn-secondary" onClick={resetPuzzle}>
              🔄 Réinitialiser
            </button>
          )}

          {solved && (
            <button className="btn" onClick={() => navigate('/kyoto')}>
              ➡️ Continuer vers Kyoto
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

export default Tokyo;
