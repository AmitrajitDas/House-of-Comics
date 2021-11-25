import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const Paginate = ({ page, pages, setPaginate, history }) => {
  const handleChange = (e, page) => {
    e.preventDefault()
    history.push(`/?page=${page}`)
  }
  return (
    <div>
      <Stack spacing={2}>
        <Pagination count={pages} onChange={handleChange} color='primary' />
      </Stack>
    </div>
  )
}

export default Paginate
