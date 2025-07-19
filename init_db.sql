CREATE TABLE IF NOT EXISTS courses (
    code VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('draft', 'upcoming', 'active', 'completed', 'archived')),
    instructor_id INTEGER,
    professor_id INTEGER,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    duration INTEGER,
    students INTEGER
);

-- Datos de ejemplo opcionales
INSERT INTO courses (code, title, description, start_date, end_date, status, duration, students)
VALUES 
    ('PY101', 'Introducción a Python', 'Curso básico de programación en Python', '2023-09-01', '2023-09-30', 'upcoming', 30, 0),
    ('WEB200', 'Desarrollo Web Moderno', 'HTML, CSS y JavaScript avanzado', '2023-08-15', '2023-10-15', 'active', 60, 15),
    ('DB300', 'Bases de Datos con PostgreSQL', 'Diseño e implementación de bases de datos relacionales', '2023-10-01', '2023-11-30', 'upcoming', 45, 0)
ON CONFLICT (code) DO NOTHING;