# GraphQL

Integrantes: 

- Bryan Suca Jaramillo
- Karen Carazas Rodriguez

Funcionamiento:

1 Configuración del entorno:

  - Asegúrate de tener Node.js instalado en tu sistema.
  - Crea una carpeta para tu proyecto y navega hasta ella en la línea de comandos.

2 Instalación de Apollo Server:

- Ejecuta el siguiente comando en la línea de comandos para instalar Apollo Server y otras dependencias necesarias:
- "npm install apollo-server"

3.- Creación de un servidor Apollo:

- Crea un archivo llamado index.js y coloca el codigo proporcionado de index.js

4.- Ejecución del servidor:

Ejecuta el siguiente comando en la línea de comandos dentro de la carpeta de tu proyecto:

- node index.js
- Verás un mensaje que indica que el servidor GraphQL está listo en una URL, por ejemplo: Servidor GraphQL listo en http://localhost:4000/.

5.- Probando el servidor:

- Abre tu navegador web y visita la URL proporcionada por el servidor (por ejemplo, http://localhost:4000/).
- Ahora puedes enviar consultas GraphQL al servidor. Por ejemplo, puedes usar la siguiente consulta en la barra de consultas en la interfaz de GraphQL:
- query{
  allPersons {
    nombre 
    telefono
    calle
    ciudad
    id
  }
}
- Deberia salir de ejemplo la siguiente imagen.
![image](https://github.com/bryansucabs/GraphQL/assets/103225730/062186b0-2380-4e68-8bee-146296751d23)

