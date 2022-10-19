// Components
import PostTitleCard from '../PostTitleCard/PostTitleCard'

// Styles
import styles from './MostRecentPosts.module.css'

export default function MostRecentPosts({ posts }) {
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <PostTitleCard key={post._id} post={post} />
      ))}
    </div>
  )
}
