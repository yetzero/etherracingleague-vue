<template>
  <section class="main cc-sct cc-ovrl">
    <div class="main__container cc-cntr">
      <div class="div-c6c9367">
        <div class="div-ca1f9b3">
          <img
            decoding="async"
            class="image-c7b9fc3 cc-img"
            :src="bluImg"
            :srcset="bluSrcset"
            sizes="(max-width: 1270px) 100vw, 1270px"
            width="1270"
            height="2500"
            alt="Blu Zaremi character"
          />
          <img
            decoding="async"
            class="image-c79ec62 cc-img"
            :src="azureCometImg"
            :srcset="azureCometSrcset"
            sizes="(max-width: 1381px) 100vw, 1381px"
            width="1381"
            height="591"
            alt="Azure Comet bike"
          />
        </div>

        <div>
          <img
            loading="lazy"
            decoding="async"
            class="main-logo aligncenter cc-img"
            :src="logoImg"
            :srcset="logoSrcset"
            sizes="(max-width: 2438px) 100vw, 2438px"
            width="2438"
            height="1023"
            alt="Ether Racing League"
          />

          <h2 class="main__subtitle">The race is about to begin.</h2>

          <p>Ether Racing League is an upcoming high speed, arcade style, indie racing game with hover bikes, a large cast of female racers and a story spanning a galaxy wide conspiracy. The game is targeting the PC. It's in the preproduction stage.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import bluImg from '@/assets/images/blu.webp'
import azureCometImg from '@/assets/images/azure-comet.webp'
import logoImg from '@/assets/images/logo-concept.webp'

const bluSrcset = `${bluImg} 1270w`
const azureCometSrcset = `${azureCometImg} 1381w`
const logoSrcset = `${logoImg} 2438w`
</script>
