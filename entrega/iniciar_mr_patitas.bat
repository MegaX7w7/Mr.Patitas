@echo off
setlocal
chcp 65001 >nul

set "HTML_FILE=%~dp0MrPatitas.html"

echo ========================================================
echo   Mr. Patitas - Catalogo Virtual (Primera Entrega MVP)
echo ========================================================
echo.

if not exist "%HTML_FILE%" (
    echo [ERROR] No se encontro el archivo:
    echo   "%HTML_FILE%"
    echo.
    echo Verifique que "MrPatitas.html" este en la misma carpeta
    echo que este archivo "iniciar_mr_patitas.bat" y vuelva a intentarlo.
    echo.
    pause
    exit /b 1
)

echo Abriendo Mr. Patitas en su navegador predeterminado...
echo (No requiere Node.js, npm, servidor local ni conexion a Internet)
echo.

start "" "%HTML_FILE%"

if errorlevel 1 (
    echo [AVISO] No se pudo abrir el navegador automaticamente.
    echo Haga doble clic directamente sobre el archivo:
    echo   "%HTML_FILE%"
    echo.
    pause
    exit /b 1
)

endlocal
exit /b 0
