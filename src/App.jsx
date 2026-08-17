import { useState } from 'react';
import { initialStudents } from './data/students';
import StudentDirectory from './components/StudentDirectory';
import StudentForm from './components/StudentForm';
import DirectoryControls from './components/DirectoryControls';


export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'deansLister' |'probation'



  // TODO 1: handleAddStudent(newStudent)
  // - give the new student a unique id (e.g. Date.now())
  // - add it to students WITHOUT mutating the original array (spread into a new array)
  
  function handleAddStudent(newStudent) { // new student object
    const studentWithId = { ...newStudent, id: Date.now() };
    setStudents([...students, studentWithId]);
  }
  
  
  // TODO 2: visibleStudents
  // - start from `students`
  // - if searchTerm is not empty, keep only students whose name includes it (case-insensitive)
  // - then apply statusFilter:
  // 'deansLister' -> keep only gwa <= 1.75
  // 'probation' -> keep only status === 'On Probation'
  // 'all' -> no extra filtering
  // - compute this fresh every render — do NOT put it in its own useState

  let visibleStudents = students; // visible students

  if (searchTerm.trim() !== '') {
    visibleStudents = visibleStudents.filter((s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (statusFilter === 'deansLister') {
    visibleStudents = visibleStudents.filter((s) => s.gwa <= 1.75);
  } else if (statusFilter === 'probation') {
    visibleStudents = visibleStudents.filter((s) => s.status === 'On Probation');
  }

  return (
    <div>
      <h1>Student Directory</h1>
      <StudentForm onAdd={handleAddStudent} />
      <DirectoryControls
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
      />
      <StudentDirectory students={visibleStudents} />
    </div>

  )
};