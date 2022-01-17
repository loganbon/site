import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div className='postItem'>
      <div key={post}>
        <Link href={post.slug}>
          { post.metadata.title }
        </Link>
      </div>
    </div>
  )
}
