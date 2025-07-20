import { Course } from '../api/courses';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  // Función para formatear fechas
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  // Determinar clases CSS según el estado
  const statusClasses = {
    active: 'bg-green-100 text-green-800',
    upcoming: 'bg-blue-100 text-blue-800',
    completed: 'bg-gray-100 text-gray-800',
    draft: 'bg-yellow-100 text-yellow-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${
            statusClasses[course.status as keyof typeof statusClasses] || 'bg-gray-100'
          }`}>
            {course.status.toUpperCase()}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{formatDate(course.start_date)} - {formatDate(course.end_date)}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">
            Duración: {course.duration} días
          </span>
          <span className="font-medium">
            Estudiantes: {course.students}
          </span>
        </div>
      </div>
    </div>
  );
}