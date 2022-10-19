import axios from 'axios'
import toast from 'react-hot-toast'

axios.interceptors.response.use((response) => {

  // toast.success('Success')
  return response
}, (error) => {
  toast.error(  error?.response?.data?.message ?? 'Something went wrong, please try again')
}) 

export default axios