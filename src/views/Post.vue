<template>
  <div>
    <div class="sticky-top d-flex justify-content-between align-items-center p-3">
      <h4 class="pt-2">{{ $route.params.subreddit }}</h4>
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
      <div class="row mt-4">
        <!-- Post score -->
        <div class="col-1" v-if="post.score">{{ displayScore(post.score) }}</div>
        <div class="col-1 bg-dark" v-else>&nbsp;</div>

        <!-- Post title and content -->
        <div class="col-9 mt-n3">
          <!-- Title -->
          <h4 class="mb-5 sticky-top py-4" style="background: rgb(9, 10, 14)">{{ post.title }}</h4>

          <!-- Content -->
          <span v-html="decode(post.selftext_html)" class="text-grey-500"></span>

          <div v-if="post.secure_media" class="mt-4">
            <span v-html="domDecoder(post.secure_media.oembed.html)"></span>
          </div>

          <div v-else-if="post.post_hint == 'image' || isImageUrl(post.url)">
            <img :src="post.url" width="100%" />
            <video controls autoplay v-if="post.media && post.media.reddit_video">
              <source :src="post.media.reddit_video.fallback_url" type="video/mp4" />
            </video>
            <video controls autoplay v-else-if="post.preview && post.preview.reddit_video_preview">
              <source :src="post.preview.reddit_video_preview.fallback_url" type="video/mp4" />
            </video>
          </div>
          <hr class="my-5" />
          <!-- Comments -->
          <Comments class="ml-n3" :data="c.data" v-for="c in comments" :key="c.data.id" />
        </div>

        <!-- Post comment and statistics -->
        <div class="col-2">
          <small>{{ post.num_comments }} comments</small>
          <br />
          <small class="text-muted">{{ post.domain }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Comments from "@/components/Comments.vue";

export default {
  components: { Comments },
  mounted() {
    this.refresh();
  },
  data() {
    return {
      post: {
        title: this.$store.get("post_title"),
        selftext_html: this.$store.get("post_selftext_html"),
        score: this.$store.get("post_score")
      },
      comments: {}
    };
  },
  watch: {
    $route() {
      this.post = {};
      this.comments = {};
      this.refresh();
    }
  },
  methods: {
    isImageUrl(x) {
      if (!x) return false;
      return (
        x.endsWith(".jpg") ||
        x.endsWith(".gif") ||
        x.endsWith(".gifv") ||
        x.endsWith(".png")
      );
    },
    decode(value) {
      if (!value) return "";
      let parser = new DOMParser();
      let dom = parser.parseFromString(
        "<!doctype html><body>" + value,
        "text/html"
      );
      return dom.body.textContent;
    },
    refresh() {
      const endpoint = `https://www.reddit.com/r/${this.$route.params.subreddit}/comments/${this.$route.params.commentId}/${this.$route.params.threadTitle}/.json`;

      axios.get(endpoint).then(r => {
        this.post = r.data[0].data.children[0].data;
        this.comments = r.data[1].data.children;
      });
    },
    displayScore(x) {
      return x < 1000 ? x : `${Math.round(x / 1000)}k`;
    }
  }
};
</script>