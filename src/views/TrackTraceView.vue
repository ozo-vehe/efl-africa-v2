<template>
  <main>
    <!-- Hero Section -->
    <section class="gallery_header_section relative flex items-center justify-center min-h-[100vh]">
      <header
        class="hero_section relative min-h-[150vh] w-full flex lg:justify-end md:justify-center justify-center flex-col lg:px-10 md:px-5 px-4 pb-16 rounded-[32px] pt-40">

        <!-- Background Image -->
        <div class="bg_image absolute top-0 left-0 w-full h-full">
          <img class="w-full h-full object-cover rounded-[32px] object-top" :src="header_image" alt="Header image" />
        </div>

        <!-- Hero Title -->
        <div class="hero_title text-gray-800 relative z-10 text-center">
          <h1 class="lg:text-[64px] md:text-[48px] text-[32px] font-[700] leading-tight uppercase">
            shipment & container tracking</h1>
          <p class="lg:text-[28px] md:text-[24px] text-[20px]">Monitor your cargo in real time, anytime, anywhere</p>
        </div>

        <!-- Tracking Form -->
        <SearchFormComponent />

        <!-- Search Result -->
        <SearchResultComponent />
      </header>
    </section>

    <!-- How It Works Section -->
    <section class="how_it_works_section relative lg:px-10 md:px-5 px-4 pt-16 pb-12">
      <header class="logistics_solution_header_text">
        <p class="flex items-center gap-[7px] font-[500] lg:text-[18px] md:text-[16px] text-[16px] mb-2">
          <span class="block w-3 h-3 bg-efl-green-base rounded-full"></span>
          <span>How we operate</span>
        </p>

        <h2 class="text-[32px] uppercase font-[500]">how track & trace works</h2>
      </header>

      <div class="how_to grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-16">
        <div class="how_to_item flex flex-col items-between border rounded-[16px] p-6">
          <img :src="image_one" alt="How it works image" class="w-full h-[300px] object-cover rounded-[20px]" />
          <div class="details">
            <h3 class="text-[24px] font-[500] mt-4">Enter container or BL number</h3>
            <p class="text-[16px] mt-2">Input your container number or a single Bill of Lading Number into the provided
              input field</p>
          </div>
        </div>

        <div class="how_to_item flex flex-col items-between border rounded-[16px] p-6">
          <img :src="image_two" alt="How it works image" class="w-full h-[300px] object-cover rounded-[20px]" />
          <div class="details">
            <h3 class="text-[24px] font-[500] mt-4">Submit & validate</h3>
            <p class="text-[16px] mt-2">After entering your number, click on 'Track'. The system will validate your
              input
              to ensure it is the right format</p>
          </div>
        </div>

        <div class="how_to_item flex flex-col justify-between border rounded-[16px] p-6">
          <img :src="image_three" alt="How it works image" class="w-full h-[300px] object-cover rounded-[20px]" />
          <div class="details">
            <h3 class="text-[24px] font-[500] mt-4">Get real time updates</h3>
            <p class="text-[16px] mt-2">Once validated, the system will display a detailed status information with
              rea-time updates on your shipment</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQs Section -->
    <section class="faqs_section relative lg:px-10 md:px-5 px-4 pt-16 pb-20">
      <FAQComponent :questions="questions.slice(0, 2)" />
    </section>
  </main>
</template>

<script setup lang="ts">
import header_image from "@/assets/track-trace/01.png";
import image_one from "@/assets/track-trace/02.png";
import image_two from "@/assets/track-trace/03.png";
import image_three from "@/assets/track-trace/04.png";
import FAQComponent from "@/components/FAQComponent.vue";
import { questions } from "@/utils/questions";
import SearchFormComponent from "@/components/SearchFormComponent.vue";
import SearchResultComponent from "@/components/SearchResultComponent.vue";

</script>

<style scoped></style>
