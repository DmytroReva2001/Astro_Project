import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: 'localhost',      // Cambia esto por tu host de MySQL
  port: '3306',
  user: 'astro_user',     // Cambia esto por tu usuario de MySQL
  password: 'astroUser1234', // Cambia esto por tu contraseña de MySQL
  database: 'astro_js_dmytro_reva', // Cambia esto por el nombre de tu base de datos
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});