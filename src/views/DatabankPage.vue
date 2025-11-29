<template>
  <div>
    <section class="section-c21fbea cc-sct">
      <div class="container-c4ef559 cc-cntr">
        <h1 class="paragraph-c826c7b speedy">Databank: Articles</h1>
        <p class="paragraph-cfafab9">Dive deep into the universe and lore of the game. The articles are constantly updating.</p>
      </div>
    </section>

    <section class="section-c5dc0e7 cc-sct">
      <div class="container-cec603d cc-cntr">
        <div class="div-c3f61ed">
          <div class="div-c78c456">
            <h2 class="heading-cbb2594">
              <router-link to="/databank">Databank</router-link>
            </h2>

            <div id="query-cb5cca2" data-query_id="467">
              <div id="querytemplate-c3a51c7" class="querytemplate-c287e67" cc-query-template="">
                <div v-for="type in articleTypes" :key="type.slug" class="cc-query-item">
                  <router-link :to="`/article-types/${type.slug}`">{{ type.name }}</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div id="query-c50dcc1" data-query_id="15" data-ccinherit="true">
            <div id="querytemplate-c681ef2" class="querytemplate-cff3ec6" cc-query-template="">
              <div
                v-for="(article, index) in paginatedArticles"
                :key="article.slug"
                class="cc-query-item"
                :data-lastpost="index === paginatedArticles.length - 1 ? '1' : undefined"
              >
                <router-link class="div-c8a040c speedy" :to="`/article/${article.slug}`">
                  <img
                    class="image-c9b10ab cc-img"
                    :src="getArticleImage(article.image)"
                    :alt="article.name"
                  />
                  <h2 class="heading-c7e19e4">{{ article.name }}</h2>
                </router-link>
              </div>
            </div>

            <div id="querypagination-c041e0c" cc-query-pagination="">
              <div id="querypaginationnumbers-c83d4ac" class="querypaginationnumbers-c6bdec6" cc-query-pagination-numbers="">
                <span
                  v-for="page in totalPages"
                  :key="page"
                  :class="['page-numbers', { current: page === currentPage }]"
                  :aria-current="page === currentPage ? 'page' : undefined"
                  @click="goToPage(page)"
                >{{ page }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { articleTypes, articles } from '@/data/articleTypes.js'

const databankImages = import.meta.glob('@/assets/images/databank/*.webp', { eager: true })
const mainImages = import.meta.glob('@/assets/images/*.webp', { eager: true })

const getArticleImage = (filename) => {
  // First check databank folder
  const databankPath = `/src/assets/images/databank/${filename}`
  if (databankImages[databankPath]?.default) {
    return databankImages[databankPath].default
  }
  // Fallback to main images folder (for ether-bikes using azure-comet.webp)
  const mainPath = `/src/assets/images/${filename}`
  return mainImages[mainPath]?.default || ''
}

// Sort articles alphabetically by name
const sortedArticles = computed(() => {
  return [...articles].sort((a, b) => a.name.localeCompare(b.name))
})

// Pagination
const articlesPerPage = 30
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(sortedArticles.value.length / articlesPerPage))

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * articlesPerPage
  const end = start + articlesPerPage
  return sortedArticles.value.slice(start, end)
})

const goToPage = (page) => {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
