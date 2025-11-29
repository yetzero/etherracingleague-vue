<template>
  <div v-if="post">
    <section class="blog-post-intro cc-sct">
      <div class="cc-cntr">
        <div class="blog-post-header">
          <span class="blog-post__category">{{ post.category }}</span>
          <h1 class="blog-post__headline">{{ post.title }}</h1>
          <div class="blog-post__meta">
            <span class="blog-post__author">By {{ post.author }}</span>
            <span class="blog-post__separator">|</span>
            <time class="blog-post__time">{{ post.date }}</time>
          </div>
        </div>

        <div v-if="post.image" class="blog-post-hero">
          <img
            class="blog-post-hero__image cc-img"
            :src="getPostImage(post.image)"
            :alt="post.title"
          />
        </div>
      </div>
    </section>

    <section class="blog-post-body cc-sct">
      <div class="blog-post-body__container cc-cntr">
        <div class="blog-post__content" v-html="post.content"></div>

        <div class="blog-post__nav">
          <router-link to="/development-notes" class="blog-post__back-link">
            &larr; Back to Development Notes
          </router-link>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="not-found cc-sct">
    <div class="cc-cntr">
      <h1>Post not found</h1>
      <router-link to="/development-notes">Back to Development Notes</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { blogPosts } from '@/data/blogPosts.js'

const route = useRoute()

const post = computed(() => {
  return blogPosts[route.params.slug] || null
})

const postImages = import.meta.glob('@/assets/images/*.webp', { eager: true })

const getPostImage = (filename) => {
  const path = `/src/assets/images/${filename}`
  return postImages[path]?.default || ''
}
</script>
