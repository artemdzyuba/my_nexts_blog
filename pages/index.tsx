import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PostCard, Categories, PostWidget} from '../components';

const posts = [
  {title: 'My first blog', excerpt: 'Just trying doing that'},
  {title: 'My second blog', excerpt: 'Not Just trying doing that'},
];

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8 max-w-screen-xl">
      <Head>
        <title>Artem's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 bg-gray-200'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => <PostCard post={post} key={post.title} />)}
        </div>
        
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>

        </div>
      </div>

      
    </div>
  )
}

export default Home
