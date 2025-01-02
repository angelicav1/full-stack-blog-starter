import { Link } from 'react-router-dom';
import Image from '../components/Image';
import PostMenuActions from '../components/PostMenuActions';
import Search from '../components/Search';
import Comments from '../components/Comments';

const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      {/* detail */}
      <div className='flex gap-8'>
        <div className='lg:w-3/5 flex flex-col gap-8'>
          <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <span>Written by</span>
            <Link className='text-nandor'>Angelica Victoria</Link>
            <span>on</span>
            <Link className='text-nandor'>North America</Link>
            <span>2 days ago</span>
          </div>
          <p className='text-tomthumb font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            illum adipisci praesentium nostrum earum totam voluptas veniam.
          </p>
        </div>
        <div className='hidden lg:block w-2/5'>
          <Image src='blog_pic_1.jpg' w='600' className='rounded-2xl' />
        </div>
      </div>
      {/* content */}
      <div className='flex flex-col md:flex-row gap-12'>
        {/* text */}
        <div className='lg:text-lg flex flex-col gap-6 text-justify'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            a odit eligendi! Hic cupiditate veniam ut facere praesentium
            explicabo, quas, aliquid obcaecati ipsam sunt odit sequi, nisi
            voluptas. Molestiae, ducimus! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Fugiat, commodi. Dolor neque fuga
            corrupti modi voluptatem et officiis, sunt quia rerum? Placeat
            labore provident alias, assumenda possimus consequatur laboriosam
            quod?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            a odit eligendi! Hic cupiditate veniam ut facere praesentium
            explicabo, quas, aliquid obcaecati ipsam sunt odit sequi, nisi
            voluptas. Molestiae, ducimus! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Fugiat, commodi. Dolor neque fuga
            corrupti modi voluptatem et officiis, sunt quia rerum? Placeat
            labore provident alias, assumenda possimus consequatur laboriosam
            quod?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            a odit eligendi! Hic cupiditate veniam ut facere praesentium
            explicabo, quas, aliquid obcaecati ipsam sunt odit sequi, nisi
            voluptas. Molestiae, ducimus! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Fugiat, commodi. Dolor neque fuga
            corrupti modi voluptatem et officiis, sunt quia rerum? Placeat
            labore provident alias, assumenda possimus consequatur laboriosam
            quod?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            a odit eligendi! Hic cupiditate veniam ut facere praesentium
            explicabo, quas, aliquid obcaecati ipsam sunt odit sequi, nisi
            voluptas. Molestiae, ducimus! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Fugiat, commodi. Dolor neque fuga
            corrupti modi voluptatem et officiis, sunt quia rerum? Placeat
            labore provident alias, assumenda possimus consequatur laboriosam
            quod?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            a odit eligendi! Hic cupiditate veniam ut facere praesentium
            explicabo, quas, aliquid obcaecati ipsam sunt odit sequi, nisi
            voluptas. Molestiae, ducimus! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Fugiat, commodi. Dolor neque fuga
            corrupti modi voluptatem et officiis, sunt quia rerum? Placeat
            labore provident alias, assumenda possimus consequatur laboriosam
            quod?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            a odit eligendi! Hic cupiditate veniam ut facere praesentium
            explicabo, quas, aliquid obcaecati ipsam sunt odit sequi, nisi
            voluptas. Molestiae, ducimus! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Fugiat, commodi. Dolor neque fuga
            corrupti modi voluptatem et officiis, sunt quia rerum? Placeat
            labore provident alias, assumenda possimus consequatur laboriosam
            quod?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit magni
            tempore asperiores accusantium, reprehenderit accusamus dolorum
            atque. Eligendi, libero illum id saepe veritatis quas perspiciatis
            numquam, earum voluptas, distinctio tempore! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptatum laboriosam fugiat
            magnam voluptate asperiores? Tempore suscipit nesciunt, delectus
            quasi optio ex nemo ea deleniti a dicta. Nihil a fugit autem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            officia, amet tempore at esse, maxime earum non, atque nulla
            accusamus itaque recusandae fuga. Quaerat officiis excepturi
            exercitationem maxime quidem eum?
          </p>
        </div>
        {/* menu */}
        <div className='px-4 h-max sticky top-8'>
          <h1 className='mb-4 text-sm font-medium'>Author</h1>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-8'>
              <Image
                src='userImg.jpeg'
                className='w-12 h-12 rounded-full object-cover'
                w='48'
                h='48'
              />
              <Link className='text-tomthumb'>Angelica Victoria</Link>
            </div>
            <p className='text-sm text-sprout font-bold'>
              Lorem ipsum dolor sit amet.
            </p>
            <div className='flex gap-2'>
              <Link>
                <Image src='facebook.svg' />
              </Link>
              <Link>
                <Image src='instagram.svg' />
              </Link>
              <Link className='mt-1'>
                <Image src='twitter-x.svg' />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className='mt-8 mb-4 text-sm font-medium'>Categories</h1>
          <div className='flex flex-col gap-2 text-sm'>
            <Link className='underline'>All</Link>
            <Link className='underline' to='/'>
              Africa
            </Link>
            <Link className='underline' to='/'>
              Antarctica
            </Link>
            <Link className='underline' to='/'>
              Asia
            </Link>
            <Link className='underline' to='/'>
              Europe
            </Link>
            <Link className='underline' to='/'>
              North America
            </Link>
            <Link className='underline' to='/'>
              South America
            </Link>
            <Link className='underline' to='/'>
              Oceania
            </Link>
          </div>
          <h1 className='mt-8 mb-4 text-sm font-medium'>Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
