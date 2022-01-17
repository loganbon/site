import matter from 'gray-matter'
import marked from 'marked'
import path from 'path'
import fs from 'fs'

export default function Page({ metadata, slug, content }) {
  return (
    <>
    <div className='post-body'>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </div>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: metadata, content } = matter(markdownMeta)

  return {
    props: {
      metadata,
      slug,
      content,
    },
  }
}
