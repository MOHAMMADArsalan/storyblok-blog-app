<template>
  <section id="about-page" v-editable="blok">
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
  </section>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/about", {
        version: "draft"
      })
      .then(res => {
        const { title, content } = res.data.story.content;
        return {
          blok: res.data.story.content,
          title,
          content
        };
      });
  },

  mounted() {
    this.$storyblok.init();

    this.$storyblok.on("change", () => {
      location.reload(true)
    });
  }
};
</script>

<style scoped>
#about-page {
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
}
#about-page p {
  white-space: pre-line;
}
</style>
