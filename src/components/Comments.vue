<template>
  <div>
    <div class="p-3 hoverable">
      <p @click="show = !show" class="m-0">
        <a href="#">{{ data.author }}</a>
        {{ data.score }} points &middot; {{ data.created_utc | moment("from") }}
      </p>
      <div v-show="show" class="mb-n3">
        <div v-html="decode(data.body_html)" @click="show = !show"></div>
      </div>
    </div>
    <div v-if="data.replies && show" class="ml-3 replies">
      <Comments
        :data="c.data"
        v-for="c in data.replies.data.children.filter(x => x.kind == 't1')"
        :key="c.data.id"
      />
    </div>
  </div>
</template>

<script>
import Comments from "@/components/Comments.vue";

export default {
  components: { Comments },
  name: "Comments",
  props: {
    data: Object
  },
  data() {
    return {
      show: true
    };
  },
  methods: {
    decode(value) {
      if (!value) return "";
      let parser = new DOMParser();
      let dom = parser.parseFromString(
        "<!doctype html><body>" + value,
        "text/html"
      );
      return dom.body.textContent;
    }
  }
};
</script>

<style>
.hoverable {
  cursor: pointer;
}
.hoverable:hover {
  background: rgb(40, 44, 61);
}
.replies {
  border-left: 1px solid rgb(40, 44, 61);;
}
</style>