// Components
import PostTitleCard from '../PostTitleCard/PostTitleCard'

// Styles
import styles from './MostRecentPosts.module.css'

// TODO: add TypeScript Types when page is re-enabled - replace all examples of 'any' with correct types

export default function MostRecentPosts({ posts, authors }: any) {
  return (
    <section className={styles.container}>
      {posts.map((post: any) => {
        const author = authors.filter((author: any) => author._id === post.author._ref)
        return <PostTitleCard key={post._id} post={post} author={author} />
      })}
    </section>
  )
}
