import mysql from "mysql2/promise"; // Importa el módulo mysql2 para manejar conexiones a la base de datos de forma asíncrona

// Crea un pool de conexiones a la base de datos con las configuraciones necesarias
export const pool = mysql.createPool({
  host: "localhost", // Dirección del servidor de base de datos
  port: 3306, // Puerto donde está corriendo el servidor MySQL
  user: "astro_user", // Usuario para acceder a la base de datos
  password: "astroUser1234", // Contraseña del usuario
  database: "astro_js_dmytro_reva", // Nombre de la base de datos a la que se conectará
  waitForConnections: true, // Permite que la conexión espere si no hay conexiones disponibles
  connectionLimit: 10, // Número máximo de conexiones que se pueden mantener en el pool
  queueLimit: 0, // Límite de conexiones en espera (0 significa sin límite)
});

// Función asíncrona para obtener datos generales de la base de datos
export async function getDatos() {
  let connection; // Variable para almacenar la conexión a la base de datos
  try {
    connection = await pool.getConnection(); // Obtiene una conexión del pool

    // Realiza la consulta a la tabla 'datos'
    const [rows] = await connection.query("SELECT * FROM datos");

    // Mapa para almacenar los datos mapeados de la consulta
    const datosMap = new Map();

    // Itera sobre las filas obtenidas de la consulta
    for (const row of rows) {
      // Agrega cada dato al mapa utilizando 'dato' como clave y 'valor' como valor
      datosMap.set(row.dato, row.valor);
    }

    // Devuelve los valores del mapa como un objeto
    return Object.fromEntries(datosMap); // Convierte el mapa a un objeto
  } catch (error) {
    // Manejo de errores en caso de que falle la consulta
    console.error("Error al obtener datos:", error);
  } finally {
    // Asegura que la conexión se libere, sin importar si ocurre un error
    if (connection) connection.release();
  }
}

// Función asíncrona para obtener proyectos de la base de datos
export async function getProjects() {
  let connection; // Variable para almacenar la conexión a la base de datos
  try {
    connection = await pool.getConnection(); // Obtiene una conexión del pool

    // Realiza la consulta para obtener proyectos y sus tecnologías asociadas
    const [rows] = await connection.query(`
      SELECT 
         p.id AS projectId,
         p.nombre AS projectName,
         p.descripcion AS projectDescription,
         p.img AS projectImg,
         p.url AS projectUrl,
         t.id AS techId,
         t.img AS techImg,
         t.url AS techUrl
       FROM 
         projects p
       LEFT JOIN 
         projects_tecnologias pt ON p.id = pt.project_id
       LEFT JOIN 
         tecnologias t ON pt.tecnologia_id = t.id
       ORDER BY 
         p.id, t.id`); // Ordena por ID de proyecto y tecnología

    const projectsMap = new Map(); // Mapa para almacenar los proyectos

    // Itera sobre las filas obtenidas de la consulta
    for (const row of rows) {
      const projectId = row.projectId; // Obtiene el ID del proyecto actual

      // Si el mapa no contiene el proyecto, lo agrega
      if (!projectsMap.has(projectId)) {
        projectsMap.set(projectId, {
          id: projectId,
          nombre: row.projectName,
          descripcion: row.projectDescription,
          img: row.projectImg,
          url: row.projectUrl,
          tecnologias: [], // Inicializa un array vacío para las tecnologías del proyecto
        });
      }

      // Si hay tecnologías asociadas, las agrega al proyecto
      if (row.techId) {
        projectsMap.get(projectId).tecnologias.push({
          id: row.techId,
          img: row.techImg,
          url: row.techUrl,
        });
      }
    }

    return Array.from(projectsMap.values()); // Devuelve una lista de los proyectos
  } catch (error) {
    // Manejo de errores en caso de que falle la consulta
    console.error("Error al obtener datos de proyectos:", error);
  } finally {
    // Asegura que la conexión se libere, sin importar si ocurre un error
    if (connection) connection.release();
  }
}

// Función asíncrona para obtener habilidades de la base de datos
export async function getHabilidades() {
  let connection; // Variable para almacenar la conexión a la base de datos
  try {
    connection = await pool.getConnection(); // Obtiene una conexión del pool

    // Realiza la consulta a la tabla 'habilidades'
    const [rows] = await connection.query("SELECT * FROM habilidades");

    // Mapea las filas obtenidas a un nuevo formato
    const habilidades = rows.map((row) => ({
      id: row.id, // ID de la habilidad
      img: row.img, // Imagen de la habilidad
      nombre: row.nombre, // Nombre de la habilidad
      descripcion: row.descripcion, // Descripción de la habilidad
      url: row.url, // URL de la habilidad
    }));

    return habilidades; // Devuelve la lista de habilidades
  } catch (error) {
    // Manejo de errores en caso de que falle la consulta
    console.error("Error al obtener datos de habilidades:", error);
  } finally {
    // Asegura que la conexión se libere, sin importar si ocurre un error
    if (connection) connection.release();
  }
}