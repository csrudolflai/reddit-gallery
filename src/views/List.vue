<template>
  <div>
    <div class="sticky-top d-flex justify-content-between p-4">
      <h4 v-if="!isTypingSubreddit" @click="isTypingSubreddit = true">{{ subreddit }}</h4>
      <div v-else>
        <input
          style="font-size: 1.5rem; color: white; background: none; border: 0;"
          :placeholder="subreddit"
          v-model="inputSubreddit"
        />
        <button class="btn btn-outline-light" @click="go">Go</button>
      </div>
      <div>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link class="nav-link" to="?sort=hot">Hot</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="?sort=random">Random</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="?sort=new">New</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="?sort=top&t=day">Day</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="?sort=top&t=week">Week</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="?sort=top&t=month">Month</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="?sort=top&t=year">Year</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="?sort=top&t=all">All</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div
        v-for="(c, idx) in children"
        :key="c.data.id"
        class="row mt-4 redditPost"
        @click="seePost(c.data.permalink, c.data.title, c.data.selftext_html, c.data.score)"
      >
        <div class="col-1">
          <small class="text-muted">{{ idx + 1 }}</small>
          {{ displayScore(c.data.score) }}
        </div>
        <div class="col-1">
          <video controls class="thumbnail" v-if="c.data.media && c.data.media.reddit_video">
            <source :src="c.data.media.reddit_video.fallback_url" type="video/mp4" />
          </video>
          <video
            controls
            class="thumbnail mb-n1"
            v-else-if="c.data.preview && c.data.preview.reddit_video_preview"
          >
            <source :src="c.data.preview.reddit_video_preview.fallback_url" type="video/mp4" />
          </video>
          <div
            class="thumbnail"
            v-else
            :style="`background: #4A5568 no-repeat center/cover url(${c.data.thumbnail}); height: 64px;`"
          ></div>
        </div>
        <div class="col-7">
          <span class="mr-2 title" v-html="c.data.title" @click="$set(c, 'isActive', !c.isActive)"></span>

          <span
            v-if="c.data.link_flair_text"
            class="badge mr-2"
            :style="'background: ' + c.data.link_flair_background_color"
          >{{ c.data.link_flair_text }}</span>
          <br />

          <div v-if="c.isActive && c.data.selftext_html" class="text-grey-500 mt-4">
            <span v-html="domDecoder(c.data.selftext_html)"></span>
          </div>

          <div v-else-if="c.isActive && c.data.secure_media" class="mt-4">
            <span v-html="domDecoder(c.data.secure_media.oembed.html)"></span>
          </div>

          <p v-else-if="c.data.selftext" class="text-grey-600 mb-2 text-truncate">
            <i class="lar la-eye"></i>
            {{ c.data.selftext }}
          </p>

          <div v-else-if="(c.data.post_hint == 'image' || isImageUrl(c.data.url)) && c.isActive">
            <img :src="c.data.url" width="100%" />
            <video controls autoplay v-if="c.data.media && c.data.media.reddit_video">
              <source :src="c.data.media.reddit_video.fallback_url" type="video/mp4" />
            </video>
            <video
              controls
              autoplay
              v-else-if="c.data.preview && c.data.preview.reddit_video_preview"
            >
              <source :src="c.data.preview.reddit_video_preview.fallback_url" type="video/mp4" />
            </video>
          </div>

          <p class="small text-muted">
            <i class="lar la-eye" v-if="c.data.post_hint == 'image' || isImageUrl(c.data.url)"></i>
            Submitted {{ c.data.created_utc | moment("from") }} by
            <a
              href="/"
            >{{ c.data.author }}</a> to
            <router-link
              :to="{'name': 'list', 'params': {'subreddit': c.data.subreddit}}"
            >{{ c.data.subreddit_name_prefixed }}</router-link>
          </p>
        </div>
        <div class="ml-auto col-2">
          <small>{{ c.data.num_comments }} comments</small>
          <br />
          <small class="text-muted">{{ c.data.domain }}</small>
        </div>
      </div>
    </div>
    <div class="fixed-bottom p-4">
      <a href="#" @click.prevent="refresh">Next</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    this.refresh();
  },
  data() {
    return {
      children: [],
      before: null,
      after: null,
      subreddit: "popular",
      limit: 25,
      isTypingSubreddit: false,
      inputSubreddit: ""
    };
  },
  watch: {
    $route() {
      this.after = null;
      this.refresh();
    }
  },
  methods: {
    seePost(permalink, title, postContent, score) {
      this.$store.set("post_title", title);
      this.$store.set("post_selftext_html", postContent);
      this.$store.set("post_score", score);
      this.$router.push(permalink);
    },
    isImageUrl(x) {
      return (
        x.endsWith(".jpg") ||
        x.endsWith(".gif") ||
        x.endsWith(".gifv") ||
        x.endsWith(".png")
      );
    },
    go() {
      this.$router.push({
        name: "list",
        params: { subreddit: this.inputSubreddit }
      });
      this.after = null;
      this.isTypingSubreddit = false;
    },
    domDecoder(str) {
      let parser = new DOMParser();
      let dom = parser.parseFromString(
        "<!doctype html><body>" + str,
        "text/html"
      );
      return dom.body.textContent;
    },
    displayScore(x) {
      return x < 1000 ? x : `${Math.round(x / 1000)}k`;
    },
    refresh() {
      const sr = this.$route.params.subreddit
        ? this.$route.params.subreddit
        : this.subreddit;
      const sortBy = this.$route.query.sort ? this.$route.query.sort : "";
      var sortType = null;
      if (this.$route.query.sort == "top") {
        sortType = this.$route.query.t ? this.$route.query.t : "";
      }
      this.subreddit = sr;

      var endpoint = "https://www.reddit.com/r/";
      endpoint += sr;
      endpoint += `/${sortBy}.json`;
      endpoint += "?limit=25";
      endpoint += this.after ? `&after=${this.after}` : "";
      endpoint += sortType ? `&t=${sortType}` : "";

      axios.get(endpoint).then(r => {
        const l = r.data.data.children.length;
        this.children = r.data.data.children.slice(l - 25);
        this.before = r.data.data.before;
        this.after = r.data.data.after;
      });
    }
  }
};
</script>

<style>
body {
  background: rgb(9, 10, 14);
  color: #edf2f7;
}

.thumbnail {
  width: 64px;
  height: 64px;
}

.redditPost {
  cursor: pointer;
}

.redditPost:hover .title {
  background: #faf089;
  border-bottom: 1px solid #ecc94b;
  color: #744210;
}

.text-grey-600 {
  color: #718096;
}

.text-grey-500 {
  color: #a0aec0;
}

.text-muted {
  color: #a0aec0 !important;
}

a {
  color: #bee3f8;
}
</style>