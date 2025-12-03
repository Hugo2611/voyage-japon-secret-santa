@echo off
echo ========================================
echo   VOYAGE AU JAPON - SECRET SANTA
echo   Installation et demarrage
echo ========================================
echo.

echo [1/3] Installation des dependances...
call npm install

if errorlevel 1 (
    echo.
    echo ERREUR lors de l'installation !
    pause
    exit /b 1
)

echo.
echo [2/3] Build du projet...
call npm run build

if errorlevel 1 (
    echo.
    echo ERREUR lors du build !
    pause
    exit /b 1
)

echo.
echo [3/3] Lancement du serveur de developpement...
echo.
echo ========================================
echo   Application lancee !
echo   URL: http://localhost:3000
echo ========================================
echo.

call npm run dev
