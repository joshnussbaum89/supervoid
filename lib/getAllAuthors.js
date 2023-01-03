import client from './sanityClient'

// Fetch all authors from Sanity client
export async function getAllAuthors() {
  return await client.fetch(`*[_type == "author"]`)
}
