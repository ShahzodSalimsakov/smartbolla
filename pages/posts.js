import {MainLayout} from "../components/MainLayout";

function Posts({posts}) {
  return <MainLayout>
  <ul>
    {posts.map((post) => (<li key={post.id} >{post.title}</li>))}
  </ul>
  </MainLayout>
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  return {
    props: {
      posts
    }
  }
}

export default Posts