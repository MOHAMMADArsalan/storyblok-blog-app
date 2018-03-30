<template>
  <section id="posts">
    <PostPreview 
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :id="post.id"
      :excerpt="post.previewText"
      :thumbnailImage="post.thumbnailUrl"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Blog/PostPreview";
import { parsePosts } from "@/lib/utils"

export default {
  components: {
    PostPreview
  },
  asyncData(context) {
    return context.app.$storyapi.get("cdn/stories", {
      version: "draft",
      starts_with: 'blog/'
    }).then(res => {
      return {
        posts: parsePosts(res.data.stories)
      }
    })
  }
};
</script>

<style scoped>
#posts {
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
