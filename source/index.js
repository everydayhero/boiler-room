import client from './client'
import server from './server'

if (typeof window !== 'undefined') {
  client()
}

export default server
