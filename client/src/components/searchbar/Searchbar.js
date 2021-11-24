import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { InputBase } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search'
import { useStyles } from './styles'

const Searchbar = () => {
  const classes = useStyles()
  const history = useHistory()

  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    // console.log(window.location.pathname);
    if (
      window.location.pathname === '/' ||
      window.location.pathname.includes('/search')
    ) {
      if (keyword.trim()) {
        history.push(`/search?name=${keyword}`)
      } else {
        history.push('/')
      }
    } else {
      setKeyword('')
    }
  }, [keyword, history])

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder='Search…'
        onChange={(e) => setKeyword(e.target.value)}
        classes={{ root: classes.inputRoot, input: classes.inputInput }}
      />
    </div>
  )
}

export default Searchbar
