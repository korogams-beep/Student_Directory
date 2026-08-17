import styles from './DirectoryControls.module.css';

export default function DirectoryControls({
    searchTerm,
    onSearchChange,
    statusFilter,
    onStatusFilterChange,
}) {
    return (
        <div className={styles.controls}>
            <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />

                <button
                    className={statusFilter === 'all' ? `${styles.filterButton} ${styles.activeFilter}` : styles.filterButton}
                    onClick={() => onStatusFilterChange('all')}
                >
                    All
                </button>

                <button
                    className={statusFilter === 'deansLister' ? `${styles.filterButton} ${styles.activeFilter}` : styles.filterButton}
                    onClick={() => onStatusFilterChange('deansLister')}
                >
                    Dean's Listers
                </button>
                
                <button
                    className={statusFilter === 'probation' ? `${styles.filterButton} ${styles.activeFilter}` : styles.filterButton}
                    onClick={() => onStatusFilterChange('probation')}
                >
                    On Probation
                </button>
        </div>
    );
}