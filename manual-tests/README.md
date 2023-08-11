### App Testeada:
-   My Login App v 1.0

### Pre requisitos:
-   Acceso a internet
-   Sistema operativo Windows 10 Pro versión 22H2
-   Navegador web Google Chrome Versión 115.0.5790.171 (Build oficial) (64 bits)

### Resumen de casos

| ID | Descripción | resultado | comentarios |
| --- | --- | --- | -- |
| CP-001 | Login con usuario válido (Happy path). | paso | - |
| CP-002 | Login con usuario válido y contraseña incorrecta. | paso | - |
| CP-003 | Login con usuario inválido y contraseña correcta. | paso | - |
| CP-004 | Login con usuario y contraseña incorrectos. | paso | el mismo resultado con campos vacios |
| CP-005 | Crear usuario nuevo correctamente (happy path). | paso | - |
| CP-006 | Crear usuario nuevo sin contraseña. | paso | - |
| CP-007 | Crear usuario nuevo sin nombre de usuario. | paso | - |
| CP-008 | Crear usuario nuevo con re ingreso de contraseña incorrecto. | paso | - |
---
### Caso de Prueba Nº 001
##### datos para el test: 
-   usuario: admin
-   contraseña: admin

| Escenario | Login con usuario válido (Happy path). |
| --- | --- |
| Given |Iniciada la app en la interfaz de log in. 
|When|El cliente Se loguea con usuario y contraseña validos. |
|Then|El cliente ingresa a la interfaz de welcome (login exitoso)|

### Pasos de ejecución
| pasos | detalle | resultado esperado | resultado obtenido | estado |
| --- | --- | --- | --- | --- |
| 1 | usuario ingresa usuario y contraseña validos en los inputs correspondientes | debe mostrarse el usuario ingresado en input "username" y el input password debe estar cifrado | se muestra el nombre de usuario en campo "username" y la contraseña se ve encriptada en el campo "password" | paso
| 2 | usuario hace click en boton "Log in" | ingresar a la interfaz de welcome | se despliega un alert de bienvenida e ingresa a la interfaz de welcome | paso
---
### Caso de Prueba Nº 002
##### datos para el test: 
-   usuario: admin
-   contraseña: otracosa

| Escenario | Login con usuario válido y contraseña incorrecta. |
| --- | --- |
| Given |Iniciada la app en la interfaz de log in. 
|When|El cliente Se loguea con usuario válido y contraseña incorrecta. |
|Then|Se informa el error al cliente, permanece en interfaz de login|

### Pasos de ejecución
| pasos | detalle | resultado esperado | resultado obtenido | estado |
| --- | --- | --- | --- | --- |
| 1 | usuario ingresa usuario válido y contraseña incorrecta en los inputs correspondientes | se muestra el usuario ingresado en input "username" y "º" en input password | se muestra el nombre de usuario en campo "username" y la contraseña se ve encriptada en el campo "password" | paso
| 2 | usuario hace click en boton "Log in" | desplegar alert o popup que informe del error en la contraseña | se despliega un alert con la leyenda "incorrect username or password" y permanece en la interfaz de log in para intentarlo de nuevo| paso
---
### Caso de Prueba Nº 003
##### datos para el test: 
-   usuario: fakeadmin
-   contraseña: admin

| Escenario | Login con usuario inválido y contraseña correcta. |
| --- | --- |
| Given |Iniciada la app en la interfaz de log in. 
|When|El cliente Se loguea con usuario incorrecto y contraseña válida. |
|Then|Se informa el error al cliente, permanece en interfaz de login|

### Pasos de ejecución
| pasos | detalle | resultado esperado | resultado obtenido | estado |
| --- | --- | --- | --- | --- |
| 1 | usuario ingresa usuario incorrecto y contraseña válida en los inputs correspondientes | se muestra el usuario ingresado en input "username" y "º" en input password | se muestra el nombre de usuario en campo "username" y la contraseña se ve encriptada en el campo "password" | paso
| 2 | usuario hace click en boton "Log in" | desplegar alert o popup que informe del error en la contraseña | se despliega un alert con la leyenda "incorrect username or password" y permanece en la interfaz de log in para intentarlo de nuevo| paso
---
### Caso de Prueba Nº 004
##### datos para el test: 
-   usuario: fakeadmin
-   contraseña: fakepassword

| Escenario | Login con usuario y contraseña incorrectos. |
| --- | --- |
| Given |Iniciada la app en la interfaz de log in. 
|When|El cliente Se loguea con usuario y contraseña incorrectos. |
|Then|Se informa el error al cliente, permanece en interfaz de login|

### Pasos de ejecución
| pasos | detalle | resultado esperado | resultado obtenido | estado |
| --- | --- | --- | --- | --- |
| 1 | usuario ingresa usuario y contraseña incorrectos en los inputs correspondientes | se muestra el usuario ingresado en input "username" y "º" en input password | se muestra el nombre de usuario en campo "username" y la contraseña se ve encriptada en el campo "password" | paso
| 2 | usuario hace click en boton "Log in" | desplegar alert o popup que informe del error en la contraseña | se despliega un alert con la leyenda "incorrect username or password" y permanece en la interfaz de log in para intentarlo de nuevo| paso
---
### Caso de Prueba Nº 005
##### datos para el test: 
-   username: newuser
-   password: 1234
-   re-password: 1234

| Escenario | Crear usuario nuevo correctamente (happy path). |
| --- | --- |
| Given |Iniciada la app en la interfaz de "log In" 
|When|El cliente se dirige a "sign up" y completa los campos solicitados de forma correcta. |
|Then|Se avisa de la creación exitosa y redirige a interfaz de "log in"|

### Pasos de ejecución
| pasos | detalle | resultado esperado | resultado obtenido | estado |
| --- | --- | --- | --- | --- |
| 1 | usuario hace click en "Sign Up" | Dirigirnos al formulario de creación de usuarios nuevos | nos dirigimos a la interfaz de "create account" | paso
| 2 | ingresar correctamente nombre de usuario en input username, password en input "password" y re ingresar la contraseña en el input "re-password" | se debe mostrar el nombre de usuario y las contraseñas encriptadas al ingresar los datos | se muestra el nombre de usuario y las contraseñas con el simbolo "º"| paso
| 3 | click en "Create" | debe desplegarse un alert con la confirmación de nuevo usuario creado y dirigirnos al login | se despliega un alert con la leyenda ""Success! redirect to log in" y volvemos a la interfaz de log in| paso
---
### Caso de Prueba Nº 006
##### datos para el test: 
-   username: newuser
-   password: ''
-   re-password: ''

| Escenario | Crear usuario nuevo sin contraseña. |
| --- | --- |
| Given |Iniciada la app en la interfaz de "log In" 
|When|El cliente se dirige a "sign up" y completa solo el campo de username. |
|Then|Se avisa del error y permanecemos en la interfaz de "create account"|

### Pasos de ejecución
| pasos | detalle | resultado esperado | resultado obtenido | estado |
| --- | --- | --- | --- | --- |
| 1 | usuario hace click en "Sign Up" | Dirigirnos al formulario de creación de usuarios nuevos | nos dirigimos a la interfaz de "create account" | paso
| 2 | ingresar correctamente nombre de usuario en input username, deja el resto de campos vacios y click en "Create" | se debe informar de la omisión de datos | se despliega un alert con la leyenda "password cannot be empty and must match. Try again" y permanecemos en la interfaz de create account| paso
---
### Caso de Prueba Nº 007
##### datos para el test: 
-   username: ''
-   password: 1234
-   re-password: 1234

| Escenario | Crear usuario nuevo sin nombre de usuario. |
| --- | --- |
| Given |Iniciada la app en la interfaz de "log In" 
|When|El cliente se dirige a "sign up" y completa solo los campos de password. |
|Then|Se avisa del error y permanecemos en la interfaz de "create account"|

### Pasos de ejecución
| pasos | detalle | resultado esperado | resultado obtenido | estado |
| --- | --- | --- | --- | --- |
| 1 | usuario hace click en "Sign Up" | Dirigirnos al formulario de creación de usuarios nuevos | nos dirigimos a la interfaz de "create account" | paso
| 2 | omitir campo username e ingresar correctamente password y re-password. Click en "Create" | se debe informar de la omisión de datos | se despliega un alert con la leyenda "Username cannot be empty. Try again" y permanecemos en la interfaz de create account| paso
---
### Caso de Prueba Nº 008
##### datos para el test: 
-   username: newuser
-   password: 1234
-   re-password: 3333

| Escenario | Crear usuario nuevo con re ingreso de contraseña incorrecto. |
| --- | --- |
| Given |Iniciada la app en la interfaz de "log In" 
|When|El cliente se dirige a "sign up" y completa los campos de username y password de forma correcta, menos el campo de re-password. |
|Then|Se avisa del error y permanecemos en la interfaz de "create account"|

### Pasos de ejecución
| pasos | detalle | resultado esperado | resultado obtenido | estado |
| --- | --- | --- | --- | --- |
| 1 | usuario hace click en "Sign Up" | Dirigirnos al formulario de creación de usuarios nuevos | nos dirigimos a la interfaz de "create account" | paso
| 2 | ingresar correctamente username, password y el re-password debe ser distinto al password. Click en "Create" | se debe informar del error en el reingreso de la contraseña | se despliega un alert con la leyenda "password cannot be empty and must match. Try again" y permanecemos en la interfaz de create account| paso
