<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2">
        <h4 class="mt-3">#{{ subreddit }}</h4>
        <button class="btn btn-primary" @click="refresh">Next</button>
        <ul class="nav flex-column mt-5">
          <li class="nav-item">
            <router-link to="?sort=hot">Hot</router-link>
          </li>
          <li class="nav-item">
            <router-link to="?sort=random">Random</router-link>
          </li>
          <li class="nav-item">
            <router-link to="?sort=new">New</router-link>
          </li>
          <li class="nav-item">
            <router-link to="?sort=top&t=day">Day</router-link>
          </li>
          <li class="nav-item">
            <router-link to="?sort=top&t=week">Week</router-link>
          </li>
          <li class="nav-item">
            <router-link to="?sort=top&t=month">Month</router-link>
          </li>
          <li class="nav-item">
            <router-link to="?sort=top&t=year">Year</router-link>
          </li>
          <li class="nav-item">
            <router-link to="?sort=top&t=all">All</router-link>
          </li>
        </ul>
      </div>
      <div class="col-md-10">
        <div class="t3 float-left" v-for="c in children" :key="c.data.id">
          <video controls class="thumbnail mb-n1" v-if="c.data.media && c.data.media.reddit_video">
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
            v-else
            class="thumbnail"
            :style="`background: #eee no-repeat center/cover url(${c.data.thumbnail})`"
          ></div>
          <div>
            <span class="d-inline-block text-truncate" style="max-width: 19vw;">
              <a v-if="c.data.url" :href="c.data.url" target="_blank" class="text-success">
                <i class="la la-external-link-square-alt"></i>
              </a>
              {{ c.data.title }}
            </span>
          </div>
        </div>
      </div>
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
      subreddit: ""
    };
  },
  watch: {
    $route() {
      this.after = null;
      this.refresh();
    }
  },
  methods: {
    refresh() {
      const sr = this.$route.params.subreddit
        ? this.$route.params.subreddit
        : "natureisfuckinglit";
      const sortBy = this.$route.query.sort ? this.$route.query.sort : "";
      var sortType = null;
      if (this.$route.query.sort == "top") {
        sortType = this.$route.query.t ? this.$route.query.t : "";
      }
      this.subreddit = sr;

      var endpoint = "https://www.reddit.com/r/";
      endpoint += sr;
      endpoint += `/${sortBy}.json`;
      endpoint += "?limit=15";
      endpoint += this.after ? `&after=${this.after}` : "";
      endpoint += sortType ? `&t=${sortType}` : "";

      axios.get(endpoint).then(r => {
        const l = r.data.data.children.length;
        this.children = r.data.data.children.slice(l - 15);
        this.before = r.data.data.before;
        this.after = r.data.data.after;
      });
    }
  }
};
</script>

<style scoped>
.thumbnail {
  width: 12rem;
  height: 12rem;
}

.t3 {
  overflow: hidden;
  width: 12rem;
  height: 14rem;
  max-height: 14rem;
  margin: 1rem;
}
</style>