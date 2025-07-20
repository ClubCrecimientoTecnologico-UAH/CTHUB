const API_BASE_URL = 'http://localhost:8000';

interface Course {
    code: string;
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    status: string;
    instructor_id: number;
    professor_id: number,
    created_at: string,
    updated_at: string,
    duration: number,
    students: number
}

export const fetchCourses = async (): Promise<Course[]> => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/v1/courses/`);
        
        if (!response.ok) {
            throw new Error('Error al obtener los cursos');
        }

        return await response.json();
    } catch (error) {
        console.error('Error al obtener los cursos:', error);
        throw error;
    }
};