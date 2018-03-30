<template>
  <div id="post" v-editable="blok">
      <div class="post-thumbnail" :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
      <section class="post-content">
          <h1>{{ title }}</h1>
          <p> {{ content }}</p>
      </section>
  </div>
</template>



<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/blog/" + context.params.postId, {
        version: "draft"
      })
      .then(res => {
        const { title, content, thumbnail } = res.data.story.content;
        return {
          blok: res.data.story.content,
          title,
          content,
          thumbnail
        };
      });
  },
  mounted() {
      this.$storyblok.init();
      this.$storyblok.on('change' , () => {
          location.reload(true)
      })
  }
};
</script>

<style scoped>
.post-thumbnail {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
}
.post-content {
  width: 80%;
  max-width: 500px;
  margin: 0 auto;
}

.post-content p {
  white-space: pre-line;
}
</style>

