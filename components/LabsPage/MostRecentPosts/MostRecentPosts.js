// Components
import PostTitleCard from '../PostTitleCard/PostTitleCard'

// Styles
import styles from './MostRecentPosts.module.css'

export default function MostRecentPosts({ posts, authors }) {
  return (
    <section className={styles.container}>
      {posts.map((post) => {
        const author = authors.filter(
          (author) => author._id === post.author._ref
        )
        return <PostTitleCard key={post._id} post={post} author={author} />
      })}
    </section>
  )
}
