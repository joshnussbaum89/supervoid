import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 'gd9aazh0',
  dataset: 'production',
  apiVersion: '2022-10-14',
  useCdn: false,
})

// Fetch all posts from Sanity client
export async function getPosts() {
  return await client.fetch(`*[_type == "post"] | order(_createdAt asc)`)
}
