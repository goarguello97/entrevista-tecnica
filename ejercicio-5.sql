-- Mostrar los nombres de los empleados ordenados alfabéticamente (Z...A) 
SELECT NOMBRES FROM empleados ORDER BY NOMBRES DESC;

-- Seleccionar el nombre, el puesto y la localidad donde trabajan los empleados con puesto de ‘Soporte’.
SELECT e.NOMBRES, p.PUESTO, l.LOCALIDAD FROM empleados e 
JOIN puestos p ON e.PUESTO_ID = p.ID
JOIN departamentos d ON e.DEPARTAMENTO_ID = d.ID
JOIN localidades l ON d.LOCALIDAD_ID = l.ID
WHERE p.PUESTO = "Soporte";

-- Listar los nombres de los empleados cuyo nombre termine con la letra ‘o’.
SELECT NOMBRES FROM empleados WHERE NOMBRES LIKE "%o";

-- Seleccionar el nombre, el puesto y sueldo de los empleados que trabajan en la localidad Carlos Paz.
SELECT e.NOMBRES, p.PUESTO, e.SUELDO FROM empleados e 
JOIN departamentos d ON e.DEPARTAMENTO_ID = d.ID
JOIN localidades l ON d.LOCALIDAD_ID = l.ID
JOIN puestos p ON e.PUESTO_ID = p.ID
WHERE l.LOCALIDAD = "Carlos paz";

-- Seleccionar el nombre, sueldo y localidad donde trabajan de los empleados que tengan un sueldo entre 10000 y 13000.
SELECT e.NOMBRES, e.SUELDO, l.LOCALIDAD FROM empleados e
JOIN departamentos d ON e.DEPARTAMENTO_ID = d.ID
JOIN localidades l ON d.LOCALIDAD_ID = l.ID
WHERE e.SUELDO BETWEEN 10000 AND 13000;

-- Visualizar los departamentos con más de 5 empleados
SELECT d.DENOMINACION, COUNT(e.ID) as EmpleadosEnTotal
FROM departamentos d
JOIN empleados e ON d.ID = e.DEPARTAMENTO_ID
GROUP BY d.DENOMINACION
HAVING COUNT(e.ID) > 5;

-- Nombre de los empleados que trabajan en Córdoba y cuyo puesto sea ‘Analista’ o ‘Programador’.
SELECT e.NOMBRES FROM empleados e
JOIN departamentos d ON e.DEPARTAMENTO_ID = d.ID
JOIN localidades l ON d.LOCALIDAD_ID = l.ID
JOIN puestos p ON e.PUESTO_ID = p.ID
WHERE l.LOCALIDAD = "Cordoba" AND (p.PUESTO = "Analista" OR p.PUESTO = "Programador");

-- Calcula el sueldo medio de todos los empleados.
SELECT AVG(SUELDO) as Promedio FROM empleados;

-- ¿Cuál es el máximo sueldo de los empleados del departamento 10?
SELECT MAX(SUELDO) AS SueldoMaximo FROM empleados WHERE DEPARTAMENTO_ID = 10;

-- Calcula el sueldo mínimo de los empleados del departamento ‘Soporte’.
SELECT MIN(e.SUELDO) as SueldoMinimo FROM empleados e
JOIN puestos p ON e.PUESTO_ID = p.ID
WHERE p.PUESTO = "Soporte";

-- Para cada puesto obtener la suma de sueldos.
SELECT p.PUESTO, SUM(e.SUELDO) AS TotalSueldos FROM empleados e
JOIN puestos p ON e.PUESTO_ID = p.ID
GROUP BY p.PUESTO;
