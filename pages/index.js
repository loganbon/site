import Post from '../components/post'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

const Home = ({ posts }) => (
  <div>
    <div className='posts'>
      {posts.map((post) => (
        <Post key={post} post={post}/>
      ))}
    </div>
  </div>
);

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map(filename => {

    const slug = filename.replace('.md', '')

    const markdownMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8',
    )

    const { data: metadata } = matter(markdownMeta)

    return {
      slug,
      metadata,
    }
  })

  return {
    props: {
      posts: posts,
    },
  }
};

export default Home;
