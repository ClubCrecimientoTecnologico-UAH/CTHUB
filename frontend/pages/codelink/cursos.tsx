import { fetchCourses } from '../../api/courses';
import { useEffect, useState } from 'react';
import CourseCard from './components/courseCard';

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await fetchCourses();
        setCourses(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  if (loading) return <div className="text-center py-8">Cargando cursos...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  if (courses.length === 0) return <div className="text-center py-8">No hay cursos disponibles</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Nuestros Cursos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.code} course={course} />
        ))}
      </div>
    </div>
  );
}