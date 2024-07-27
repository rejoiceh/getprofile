import Image from 'next/image';
import React from 'react';
import styles from '@/styles/modules/Post.module.scss';
import Link from 'next/link';
import classNames from 'classnames';

type Props = {
  thumbnailUrl: string;
  title: string;
  publishedAt: string;
  href: string;
  description: string;
  demoUrl: string;
  codeUrl: string;
};

const Post = ({ thumbnailUrl, title, publishedAt, href, description, demoUrl, codeUrl }: Props) => {
  return (
    <div className={classNames(styles['post'], 'bg-white dark:bg-gray-700')}>
      <Link href={href}>
        <a className={styles['post-image']}>
          <Image src={thumbnailUrl} height={384} width={512} layout="responsive" alt={title} />
        </a>
      </Link>
      <div className="p-6">
        <Link href={href}>
          <a className="block text-xl font-semibold hover:text-primary-500 hover:underline">{title}</a>
        </Link>
        <time className="mt-2 text-xs inline-block rounded-full text-white bg-primary-500 bg-origin-content px-1">{publishedAt}</time>
        <p className="text-sm text-gray-500 dark:text-gray-200">{description}</p>
        <div>
          {demoUrl == "" ? <p></p> : <Link href={demoUrl}>
            <a className="text-sm font-semibold text-gray-500 dark:text-gray-200 hover:text-primary-500 underline">Demo</a>
          </Link>}
          {'  '}
          {codeUrl == "" ? <p></p> : <Link href={codeUrl}>
            <a className="text-sm font-semibold text-gray-500 dark:text-gray-200 hover:text-primary-500 underline">Code</a>
          </Link>}
        </div>
      </div>
    </div >
  );
};

export default Post;
