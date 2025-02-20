<template>
  <main>
    <!-- Hero Section -->
    <section class="hero_section_container relative lg:pb-24 md:pb-20">
      <HeroLayout>
        <template #bg_image>
          <img class="w-full h-full object-cover object-top" :src="header_image" alt="Header image" />
        </template>

        <template #hero_tagged_text>
          <span class="block w-3 h-3 bg-efl-green-base rounded-full"></span>
          <span>Our Services</span>
        </template>

        <template #hero_title>
          <span>a complete supply chain <br /> for business growth</span>
        </template>

        <template #hero_description>
          <span class="block max-w-[600px]">At EFL Africa, we offer a fully integrated solution to meet your supply
            chain needs. Explore our products to see how we can help your business growth.</span>
        </template>

        <template #hero_btn_1>
          <button type="button" aria-label="Let's work button"
            class="px-7 h-[55px] flex items-center justify-center min-w-[150px] bg-gray-50 border rounded-full font-[600] text-gray-800 lg:text-[16px] md:text-[16px] text-[16px]">
            Let's Work</button>
        </template>
      </HeroLayout>
    </section>

    <!-- Logistics Solution Section -->
    <section class="logistics_solution_section relative lg:px-10 md:px-5 px-4 pb-16 border-b border-gray-400">
      <header class="logistics_solution_header_text">
        <p class="flex items-center gap-[7px] font-[500] lg:text-[18px] md:text-[16px] text-[16px] mb-2">
          <span class="block w-3 h-3 bg-efl-green-base rounded-full"></span>
          <span>Logistics Solutions</span>
        </p>

        <h2 class="text-[32px] uppercase font-[500] max-w-[500px]">seamless solutions from port to destination</h2>
      </header>

      <div class="logistics_container py-16 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
        <div class="location p-6 border rounded-[20px]">
          <div class="w-full lg:h-[450px] md:h-[350px] rounded-[20px] overflow-hidden">
            <img :src="logistic_one" alt="First logistic image" class="w-full h-full object-cover">
          </div>

          <div class="location_details py-4">
            <h3 class="text-[24px] py-3 capitalize">Customs and Regulatory Compliance</h3>

            <p>Navigate Nigeria's trade landscape with confidence. Our comprehensive customs solutions and deep
              regulatory
              expertise ensure smooth clearance at Apapa and Tincan commands. From documentation to compliance, we
              handle
              the complexity while you focus on your business</p>

            <button class="google_map bg-efl-blue-80 w-fit px-4 py-2 rounded-full mt-3 text-gray-50">
              Read More
            </button>
          </div>
        </div>

        <div class="location p-6 border rounded-[20px]">
          <div class="w-full lg:h-[450px] md:h-[350px] rounded-[20px] overflow-hidden">
            <img :src="logistic_two" alt="Second logistic image" class="w-full h-full object-cover">
          </div>

          <div class="location_details py-4">
            <h3 class="text-[24px] py-3 capitalize">Freight and export services</h3>

            <p>Transform you export ambitions into reality. As pioneers in Nigeria's non-oil export sector, we provide
              end-to-end solutions from documentation to delivery. Our established relationships with global shipping
              lines
              and strategic port presence make international trade accessible and efficient</p>

            <button class="google_map bg-efl-blue-80 w-fit px-4 py-2 rounded-full mt-3 text-gray-50">
              Read More
            </button>
          </div>
        </div>

        <div class="location p-6 border rounded-[20px]">
          <div class="w-full lg:h-[450px] md:h-[350px] rounded-[20px] overflow-hidden">
            <img :src="logistic_three" alt="Third logistic image" class="w-full h-full object-cover">
          </div>

          <div class="location_details py-4">
            <h3 class="text-[24px] py-3 capitalize">Container and depot services</h3>

            <p>Experience seamless container management at scale. Our advanced depot facilities offer comprehensive
              services
              from storage and repairs to modifications, supported by cutting-edge tracking systems and professional
              handling. WHether you need one container or a thousand, we deliver reliability at every stage</p>

            <button class="google_map bg-efl-blue-80 w-fit px-4 py-2 rounded-full mt-3 text-gray-50">
              Read More
            </button>
          </div>
        </div>

        <div class="location p-6 border rounded-[20px]">
          <div class="w-full lg:h-[450px] md:h-[350px] rounded-[20px] overflow-hidden">
            <img :src="logistic_four" alt="Fourth logistic image" class="w-full h-full object-cover">
          </div>

          <div class="location_details py-4">
            <h3 class="text-[24px] py-3 capitalize">Transportation and intermodal services</h3>

            <p>Move cargo effortlessly across Nigeria with our integrated transportation network. Combining road, rail,
              and
              inland water solutions, we offer flexible and efficient logistics that adapt to your needs. Our
              door-to-door
              delivery services ensure your cargo reaches its destination safely and on time</p>

            <button class="google_map bg-efl-blue-80 w-fit px-4 py-2 rounded-full mt-3 text-gray-50">
              Read More
            </button>
          </div>
        </div>

      </div>
    </section>

    <!-- Services -->
    <ServicesComponent />

    <!-- FAQ -->
    <section class="faq_section lg:px-10 md:px-5 px-4 py-10">
      <FAQComponent :questions="questions" />
    </section>

  </main>
</template>

<script setup lang="ts">
import HeroLayout from "@/layouts/HeroLayout.vue";
import FAQComponent from "@/components/FAQComponent.vue";
import ServicesComponent from "@/components/ServicesComponent.vue";
import header_image from "@/assets/services/01.jpg"
import logistic_one from "@/assets/services/02.jpeg"
import logistic_two from "@/assets/services/03.jpg"
import logistic_three from "@/assets/services/04.jpg"
import logistic_four from "@/assets/services/05.jpg"
import { questions } from "@/utils/questions";

</script>

<style scoped></style>
