import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import {
  FaSpinner,
} from 'react-icons/fa';

import PodcastsList from '../components/UI/lists/PodcastsList.component';
// import AdvertisementSquare from '../components/UI/ads/AdvertisementSquare.component';

import SubNavBar from '../components/UI/navbar/SubNavBar';

import {
  LoadingAllContent,
  InfinitePodcastList,
} from '../styled-components/podcasts.styled-components';

export default class Podcasts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      podcasts: [],
      page: 1,
      hasMore: null,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.getFirstPodcasts = this.getFirstPodcasts.bind(this);
    this.getMorePodcasts = this.getMorePodcasts.bind(this);
  }

  async componentDidMount() {
    const podcastsList = await this.getFirstPodcasts();
    let more = true;
    if (podcastsList.length < 10) {
      more = false;
    }
    await this.setStateAsync({
      podcasts: podcastsList,
      hasMore: more,
    });
  }

  async getFirstPodcasts() {
    const { page } = this.state;
    // this.response = await fetch('https://cryptic-activist-backend.herokuapp.com/podcasts', {
    this.response = await fetch(`http://localhost:5000/podcasts/short?page=${page}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await this.response.json();
    return data;
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async getMorePodcasts() {
    const { page, podcasts } = this.state;
    // this.response = await fetch('https://cryptic-activist-backend.herokuapp.com/podcasts', {
    this.response = await fetch(`http://localhost:5000/podcasts/short?page=${page}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await this.response.json();
    if (data.length < 10) {
      this.setStateAsync({
        podcasts: podcasts.concat(data),
      });
      setTimeout(() => {
        this.setStateAsync({
          hasMore: false,
        });
      }, 10);
    } else {
      this.setStateAsync({
        page: page + 1,
      });

      console.log('data getMorePodcasts:', data);
      this.setStateAsync({
        podcasts: podcasts.concat(data),
      });
    }
  }

  render() {
    const { podcasts, hasMore } = this.state;
    let allPodcasts;
    if (podcasts.length === 0) {
      allPodcasts = (
        <LoadingAllContent>
          <FaSpinner />
        </LoadingAllContent>
      );
    } else {
      allPodcasts = (
        <>
          <div className="col-lg-7 col-md-7 col-sm-7 col-12">
            <InfinitePodcastList>
              <InfiniteScroll
                dataLength={podcasts.length}
                next={this.getMorePodcasts}
                hasMore={hasMore}
                loader={(
                  <LoadingAllContent>
                    <FaSpinner />
                  </LoadingAllContent>
                )}
                endMessage={(
                  <div />
                )}
              >
                {podcasts.reverse().map((podcast, key) => (
                  <PodcastsList
                    key={key}
                    category={podcast.category}
                    title={podcast.title}
                    date={podcast.uploadedOn}
                    slug={podcast.slug}
                    cover={podcast.cover.url}
                    liID={`p-${key}`}
                  />
                ))}
              </InfiniteScroll>
            </InfinitePodcastList>
          </div>
          <div className="col-lg-5 col-md-3 col-sm-12 col-12">
            <aside style={{ marginTop: '20px' }}>
              {/* <AdvertisementSquare /> */}
            </aside>
          </div>
        </>
      );
    }
    return (
      <>
        <SubNavBar media="Podcasts" category="" title="" />
        <div className="container">
          <div className="row">
            {allPodcasts}
          </div>
        </div>
      </>
    );
  }
}
