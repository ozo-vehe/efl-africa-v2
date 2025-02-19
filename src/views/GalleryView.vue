<template>
  <main>
    <!-- Header Section -->
    <section class="gallery_header_section relative flex items-center justify-center min-h-[100vh] pt-24">
      <header
        class="hero_section relative h-[80vh] w-[90%] flex lg:justify-end md:justify-center justify-center flex-col lg:px-10 md:px-5 px-4 pb-10 rounded-[32px]">
        <!-- Background Image -->
        <div class="bg_image absolute top-0 left-0 w-full h-full">
          <img class="w-full h-full object-cover rounded-[32px] object-top" :src="header_image" alt="Header image" />
        </div>

        <!-- Hero Title -->
        <div class="hero_title text-white relative z-10">
          <p class="font-[500] flex items-center gap-[7px] lg:text-[18px] md:text-[16px] text-[16px]">
            <span class="block w-3 h-3 bg-efl-green-base rounded-full"></span>
            <span>Our Services</span>
          </p>
          <h1 class="lg:text-[64px] md:text-[48px] text-[32px] font-[700] leading-tight uppercase max-w-[900px]">
            excellence in global trade through efficient port operations
          </h1>
          <p class="mt-6 font-[500] lg:text-[18px] md:text-[16px] text-[16px] max-w-[580px]">
            Experience our logistics excellence through a visual journey of our state-of-the-art facilities and
            equipment, showcasing how we handle container logistics with precision across Nigeria's major ports and
            terminals
          </p>
        </div>

        <!-- Hero Button -->
        <button type="button" aria-label="Open showcase button"
          class="px-7 h-[50px] z-10 w-fit mt-8 flex items-center justify-center min-w-[150px] bg-gray-50 border rounded-full font-[600] text-gray-800 lg:text-[16px] md:text-[16px] text-[16px]">
          Open Showcase
        </button>
      </header>
    </section>
    Gallery
  </main>
</template>

<script setup lang="ts">
import header_image from "@/assets/gallery/01.jpg";

</script>

<style scoped>
.hero_section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000007a;
  border-radius: 32px;
  z-index: 1
}
</style>
