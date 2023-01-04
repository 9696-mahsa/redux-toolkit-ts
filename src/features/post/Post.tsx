import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  fetchPostsAsync,
  selectPosts,
} from './postSlice';
import styles from './Counter.module.css';

export function Posts() {
  const posts = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();




  return (
    <div>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(fetchPostsAsync())}
        >
          fetch posts Async
        </button>

        {posts.posts.map( post => <p key={post.id}>{post.title}</p>)}
    </div>
  );
}
