<template>
  <div v-if="article">
    <section class="article-intro cc-sct">
      <div class="cc-cntr">
        <div class="article-header">
          <router-link
            :to="`/article-types/${article.type}`"
            class="article__type-badge"
          >
            {{ article.typeName }}
          </router-link>
          <h1 class="article__title">{{ article.name }}</h1>
        </div>

        <div v-if="article.image" class="article-hero">
          <img
            class="article-hero__image cc-img"
            :src="getArticleImage(article.image)"
            :alt="article.name"
          />
        </div>
      </div>
    </section>

    <section class="article-content cc-sct">
      <div class="article-content__container cc-cntr">
        <div class="article__body" v-html="article.content"></div>

        <div class="article__nav">
          <router-link to="/databank" class="article__back-link">
            &larr; Back to Databank
          </router-link>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="not-found cc-sct">
    <div class="cc-cntr">
      <h1>Article not found</h1>
      <router-link to="/databank">Back to Databank</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { articleDetails } from '@/data/articleDetails.js'

const route = useRoute()

const article = computed(() => {
  return articleDetails[route.params.slug] || null
})

const databankImages = import.meta.glob('@/assets/images/databank/*.webp', { eager: true })
const mainImages = import.meta.glob('@/assets/images/*.webp', { eager: true })

const getArticleImage = (filename) => {
  // First check databank folder
  const databankPath = `/src/assets/images/databank/${filename}`
  if (databankImages[databankPath]?.default) {
    return databankImages[databankPath].default
  }
  // Fallback to main images folder
  const mainPath = `/src/assets/images/${filename}`
  return mainImages[mainPath]?.default || ''
}
</script>
