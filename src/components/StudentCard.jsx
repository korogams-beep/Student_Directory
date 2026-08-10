import styles from './StudentCard.module.css';

export default function StudentCard({ name, course, yearLevel, status, gwa }) {
  const isDeansLister = gwa <= 1.75;
  const isOnProbation = status === 'On Probation';

  const cardClass = isOnProbation
    ? `${styles.card} ${styles.probation}`
    : styles.card;

  return (
    <div className={cardClass}>
      <div className={styles.header}>
        <h3>{name}</h3>
        {isDeansLister && <span className={styles.badge}>Dean's Lister</span>}
      </div>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Year Level:</strong> {yearLevel}</p>
      <p><strong>Status:</strong> {isOnProbation ? 'On Probation' : status}</p>
      <p><strong>GWA:</strong> {gwa}</p>
    </div>
  );
}