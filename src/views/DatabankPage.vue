<template>
  <div>
    <section class="section-c21fbea cc-sct">
      <div class="container-c4ef559 cc-cntr">
        <h1 class="paragraph-c826c7b">Databank: Articles</h1>
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

            <div class="querytemplate-c287e67">
              <div v-for="type in articleTypes" :key="type.slug" class="cc-query-item">
                <router-link :to="`/article-types/${type.slug}`">{{ type.name }}</router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="databank-articles">
          <div class="querytemplate-cff3ec6">
            <div v-for="article in articles" :key="article.slug" class="cc-query-item">
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
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
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
</script>
