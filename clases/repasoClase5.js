/* REPASO CLASE 5

- GIT

SISTEMA DE CONTROL DE VERSIONES (git)
    Sirve para
        - TRABAJAR MÁS ORDENADAMENTE
        - LLEVAR UN REGISTRO PRECISO DE LOS CAMBIOS EN MI PROGRAMA
        - FACILITA EL TRABAJO EN EQUIPO

    tpHistoria
    tphistorialisto
    tphistorialistolisto
    tphistoriafinaldefinito

    repositorio tp_historia
    distintos commits - actualizaciones
    - 1 - guido - lunes 10hs - hice la base
    - 2 - juan - lunes 22hs - modifique punto 2
    - 3 - guido - martes 14hs - agregue imagenes


GIT NO ES LO MISMO QUE GITHUB

GIT 
- Programa que nosotros descargamos y nos permite crear un repositorio en nuestro proyecto
- repositorio local - está alojado en nuestra compu.

GITHUB
- plataforma, sitio web, "red social de programadores" en donde puedo publicar mi código
- no se descarga, no es un programa, solo hay que crearse cuenta
- repositorio remoto - reflejo del repositorio local

DESCARGAR GIT
    1. IR A https://git-scm.com/
    2. BOTÓN DESCARGAR
    3. EJECUTAR EL SETUP
    4. EN EL INSTALADOR, DALE "SIGUIENTE" A CASI TODO, MENOS ESTE:
        "adjusting the name of the initial branch in new repositories"
        seleccionar "override the default branch name for new repositories"
        tiene que decir main
    5. de nuevo "SIGUIENTE" a todo lo demás
    6. instalamos. esperamos que termine y finalizamos cuando termine

SETEAR NOMBRE Y MAIL
    En terminal / simbolo del sistema / CMD - USAR ESTOS COMANDOS
    git config --global user.name "Tu Nombre"
    git config --global user.email "tu@email.com"

CREAR EL REPOSITORIO
    1. me paro en la carpeta del proyecto al que quiero crearle un repo
    2. click secundario > abrir en terminal
    3. dentro de la terminal > git init - comando que inicializa el repo
    4. me tiene que salir este mensaje
    Initialized empty Git repository in {ubicación de tu carpeta del proyecto}

GITHUB
    1. Nos creamos una cuenta
    2. "Create new..." > "New Repository"
    3. Lo nombramos y lo hacemos público
    4. click en "create repository" > si llegamos a la pantalla "quick setup", lo hicimos bien
    
    comandos para commitear las primeras líneas de código del proyecto y vincular el local con el remoto
    git add .
    git commit -m"Primer commit"
    git remote add origin
    git push -u origin main

- FUNCIONES






*/