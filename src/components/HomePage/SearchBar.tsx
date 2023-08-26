import styles from './SearchBar.module.css'
import SearchIcon from '@mui/icons-material/Search';

export default function searchBar() {
  return (
      <div className={styles.SearchBar}>
          <img src="/img/logo.png" alt="" />
            <div className={styles.ButtonDiv}>
              <input type="text" />
              <button>
                <SearchIcon/>
              </button>
            </div>
      </div>
  )
}
