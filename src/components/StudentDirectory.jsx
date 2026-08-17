import StudentCard from './StudentCard';
import styles from './StudentCard.module.css';

export default function StudentDirectory({ students }) {
  return (
    <div>
      <h2 className={styles.title}>Student Directory</h2>
      {students.length === 0 ? (
        <p>No students match your search or filter.</p>
      ) : (
        <div className={styles.grid}>
          {students.map((student) => (
            <StudentCard key={student.id} {...student} />
          ))}
        </div>
      )}
    </div>
  );
}