// Components
import SEO from '../components/Global/SEO/SEO'
// import MostRecentPosts from '../components/LabsPage/MostRecentPosts/MostRecentPosts'

// Helpers
import { getAllPosts } from '../lib/getAllPosts'
import { getAllAuthors } from '../lib/getAllAuthors'

// TODO: add TypeScript Types when page is re-enabled

/**
 * Labs (Blog) Page
 *
 * [ TEMPORARILY DISABLED ]
 *
 * @param {object} posts
 * @param {object} authors
 */
export default function Labs({ posts, authors }: { posts: any[]; authors: any[] }) {
  return (
    <>
      <SEO
        title="SUPERVOID | Labs"
        url="https://supervoid.tv/labs"
        image="https://supervoid.tv/images/labs-placeholder.webp"
        description="Insights into our creative process for our current projects"
      />
      <main>
        {/* <MostRecentPosts posts={posts} authors={authors} /> */}
        <h2 style={{ marginBottom: '12rem' }}>Coming soon</h2>
      </main>
    </>
  )
}

// Fetch Sanity posts + authors
export async function getStaticProps() {
  const posts = await getAllPosts()
  const authors = await getAllAuthors()

  return {
    props: {
      posts,
      authors,
    },
    revalidate: 10,
  }
}
