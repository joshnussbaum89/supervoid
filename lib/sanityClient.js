import { createClient } from 'next-sanity'

export default createClient({
  projectId: 'gd9aazh0',
  dataset: 'production',
  apiVersion: '2022-10-14',
  useCdn: false,
})
