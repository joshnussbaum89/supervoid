// Components, hooks
import { PortableText } from '@portabletext/react'
import { getAllPosts } from '../../lib/getAllPosts'

// Styles
import styles from './Post.module.css'

// Create post based on post clicked
export default function Post({ post }) {
  return (
    <div className={styles.post}>
      <h2>{post[0].title}</h2>
      <PortableText value={post[0].body} />
    </div>
  )
}

// Create dynamic URLs from post slug
export async function getStaticPaths() {
  const posts = await getAllPosts()

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return { paths, fallback: false }
}

// Get post props
export async function getStaticProps(context) {
  const posts = await getAllPosts()

  return {
    props: {
      post: posts.filter((post) => post.slug.current === context.params.slug),
    },
  }
}
