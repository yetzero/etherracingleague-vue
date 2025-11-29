<template>
  <div>
    <section class="section-c21fbea cc-sct">
      <div class="container-c4ef559 cc-cntr">
        <h1 class="paragraph-c826c7b">Databank: {{ currentType?.name || 'Articles' }}</h1>
        <p class="paragraph-cfafab9">Browse all {{ currentType?.name?.toLowerCase() || 'articles' }} in the Ether Racing League universe.</p>
      </div>
    </section>

    <section class="section-c5dc0e7 cc-sct">
      <div class="container-cec603d cc-cntr">
        <div class="div-c3f61ed">
          <div class="div-c78c456">
            <h2 class="heading-cbb2594">
              <router-link to="/databank">Databank</router-link>
            </h2>

            <div class="querytemplate-c287e67">
              <div v-for="type in articleTypes" :key="type.slug" class="cc-query-item">
                <router-link
                  :to="`/article-types/${type.slug}`"
                  :class="{ 'active-type': type.slug === currentTypeSlug }"
                >
                  {{ type.name }}
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="databank-articles">
          <div v-if="filteredArticles.length > 0" class="querytemplate-cff3ec6">
            <div v-for="article in filteredArticles" :key="article.slug" class="cc-query-item">
              <router-link class="div-c8a040c" :to="`/article/${article.slug}`">
                <div class="article-image-container">
                  <img
                    v-if="article.image"
                    class="article-thumbnail cc-img"
                    :src="getArticleImage(article.image)"
                    :alt="article.name"
                  />
                  <div v-else class="image-placeholder"></div>
                </div>
                <h2 class="heading-c7e19e4">{{ article.name }}</h2>
              </router-link>
            </div>
          </div>
          <div v-else class="no-articles">
            <p>No articles found in this category.</p>
            <router-link to="/databank">View all articles</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { articleTypes, articles } from '@/data/articleTypes.js'

const route = useRoute()

const currentTypeSlug = computed(() => route.params.type)

const currentType = computed(() => {
  return articleTypes.find(t => t.slug === currentTypeSlug.value) || null
})

const filteredArticles = computed(() => {
  return articles.filter(article => article.type === currentTypeSlug.value)
})

const databankImages = import.meta.glob('@/assets/images/databank/*.webp', { eager: true })
const mainImages = import.meta.glob('@/assets/images/*.webp', { eager: true })

const getArticleImage = (filename) => {
  const databankPath = `/src/assets/images/databank/${filename}`
  if (databankImages[databankPath]?.default) {
    return databankImages[databankPath].default
  }
  const mainPath = `/src/assets/images/${filename}`
  return mainImages[mainPath]?.default || ''
}
</script>
