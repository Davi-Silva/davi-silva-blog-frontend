import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import NewsList from '../../../components/UI/lists/blog-home/BlogPostListNews.component';
import Ads from '../../../components/UI/ads/AdvertisementSquare.component';

import * as NewsAction from '../../../store/actions/blog/news';

import {
  PostListTitleDiv,
  PostListTitle,
  StickyWrapper,
  SeeAll,
} from '../../../styled-components/blog-posts-news.styled-components';

let count = 1;

const News = () => {
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(NewsAction.getNews());
  }, []);

  let newsVar;
  if (news.loading) {
    newsVar = (
      <>
        <p>
          Loading
        </p>
      </>
    );
  } else if (news.fetched) {
    newsVar = (
      <>
        {news.data.map((post, index) => (
          <>
            <NewsList
              key={post.slug}
              type="Blog"
              slug={post.slug}
              imgSrc={post.cover.url}
              title={post.title}
              category={post.category}
              publishedOn={post.publishedOn}
              index={index}
            />
          </>
        ))}
      </>
    );
    console.log('news count:', count);
    count += 1;
  }


  return (
    <>
      <div
        className="container"
        style={{
          paddingTop: '30px',
        }}
      >
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-9 col-6">
            <PostListTitleDiv>
              <PostListTitle>
                News
              </PostListTitle>
            </PostListTitleDiv>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-6">
            <SeeAll to="/blog/news">
                See More
            </SeeAll>
          </div>
          <div className="col-lg-9">
            <div className="row">
              {newsVar}
            </div>
          </div>
          <div className="col-lg-3">
            <StickyWrapper>
              <Ads />
            </StickyWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
