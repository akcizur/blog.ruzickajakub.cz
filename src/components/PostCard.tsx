import type { Post } from '../data/posts'
import type { ViewMode } from '../config/viewModes'

type PostCardProps = {
  post: Post
  mode: ViewMode
  index: number
  articleClassName: string
}

export function PostCard({ post, mode, index, articleClassName }: PostCardProps) {
  if (mode === 'compact') {
    return (
      <a className="post-link" href={`?post=${post.id}`} aria-label={`Číst: ${post.title}`}><article className={articleClassName} tabIndex={0}>
        <div className="compact-copy">
          <span className="compact-title">{post.title}</span>
        </div>
        <div className="post-card-meta compact-meta">
          <span>{post.category}</span>
          <span aria-hidden="true">·</span>
          <span>{post.date}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>
      </article></a>
    )
  }

  if (mode === 'magazine') {
    return (
      <a className="post-link" href={`?post=${post.id}`} aria-label={`Číst: ${post.title}`}><article
        className={`${articleClassName}${index === 0 ? ' is-featured' : ''}`}
        tabIndex={0}
      >
        <div className="post-card-meta">
          <span>{post.category}</span>
          <span aria-hidden="true">·</span>
          <span>{post.date}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>
        <h4>{post.title}</h4>
        {index === 0 && <p>{post.excerpt}</p>}
      </article></a>
    )
  }

  if (mode === 'grid') {
    return (
      <a className="post-link" href={`?post=${post.id}`} aria-label={`Číst: ${post.title}`}><article className={articleClassName} tabIndex={0}>
        <div className="post-card-meta">
          <span>{post.category}</span>
          <span aria-hidden="true">·</span>
          <span>{post.date}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>
        <h4>{post.title}</h4>
        <p>{post.excerpt}</p>
      </article></a>
    )
  }

  return (
    <a className="post-link" href={`?post=${post.id}`} aria-label={`Číst: ${post.title}`}><article className={articleClassName} tabIndex={0}>
      <h4>{post.title}</h4>
      <p>{post.excerpt}</p>
      <div className="post-card-meta">
        <span>{post.category}</span>
        <span aria-hidden="true">·</span>
        <span>{post.date}</span>
        <span aria-hidden="true">·</span>
        <span>{post.readTime}</span>
      </div>
    </article></a>
  )
}
