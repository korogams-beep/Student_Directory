import StudentCard from './StudentCard';
import styles from './StudentCard.module.css';

export default function StudentDirectory({ students }) {
  return (
    <div>
      <h2 className={styles.title}>Student Directory</h2>
      <div className={styles.grid}>
        {students.map((student) => (
          <StudentCard key={student.id} {...student} />
        ))}
      </div>
    </div>
  );
}