<script setup lang="ts">
import HeroLayout from '@/layouts/HeroLayout.vue';
import media from '@/assets/video/video.mp4';
import map from '@/assets/home/map.png';
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { customers, customers_logo } from '@/utils/customers';
import { questions } from '@/utils/questions';
import image_one from '@/assets/icons/services/01.png';
import image_two from '@/assets/icons/services/02.png';
import image_three from '@/assets/icons/services/03.png';
import image_four from '@/assets/icons/services/04.png';
import image_five from '@/assets/icons/services/05.png';
import FAQComponent from '@/components/FAQComponent.vue';

const carouselConfig = {
  itemsToShow: 6,
  wrapAround: true,
  autoplay: 3000,
}
</script>

<template>
  <main class="landing_page relative">
    <!-- Hero Section -->
    <section class="hero_section_container relative lg:pb-24 md:pb-20">
      <HeroLayout>
        <template #bg_image>
          <video class="w-full h-full object-cover object-top" playsinline autoplay muted loop>
            <source :src="media" type="video/mp4">
          </video>
        </template>

        <template #hero_tagged_text>
          <span class="block w-3 h-3 bg-efl-green-base rounded-full"></span>
          <span> Customs and Regulatory Compliance</span>
        </template>

        <template #hero_title>
          <span>Your cargo, <br> Our commitment</span>
        </template>

        <template #hero_description>
          <span class="block max-w-[600px]">Experience seamless shipping,
            guaranteed reliability, and real-time visibility. Excellence delivered across every ocean.
          </span>
        </template>

        <template #hero_btn_1>
          <RouterLink to="/track-trace"
            class="px-7 h-[55px] flex items-center max-w-[200px] bg-gray-50 border rounded-full font-[600] text-gray-800 lg:text-[16px] md:text-[16px] text-[16px]">
            Track BL Number</RouterLink>
          <a href="mailto:enquiries@efl.africa" target="_blank"
            class="px-7 h-[55px] flex items-center max-w-[200px] border bg-transparent rounded-full font-[600] text-gray-50 lg:text-[16px] md:text-[16px] text-[16px]">
            Talk To An Expert</a>
        </template>
      </HeroLayout>
    </section>

    <!-- Customers -->
    <section class="customers lg:px-10 md:px-5 px-4 py-10 border-b border-gray-300">
      <div class="customers_header_text font-[500] max-w-[620px] mx-auto text-[32px] uppercase">
        <h2>providing <span class="bg-efl-blue-20 px-1">flexible</span> and improved service levels, accelerated
          <span class="bg-efl-blue-20 px-1">delivery,</span> and reduced
          direct and indirect cost, we are <span class="bg-efl-blue-20 px-1">trusted by</span>
        </h2>
      </div>

      <div class="customers_carousel my-20">
        <Carousel v-bind="carouselConfig">
          <Slide v-for="customer in customers" :key="customer.id">
            <img class="w-[150px] h-[50px] object-contain" :src="customer.image" :alt="customer.name">
          </Slide>
        </Carousel>
      </div>
    </section>

    <!-- Locations -->
    <section class="locations lg:px-10 md:px-5 px-4 py-10 w-full">
      <div class="locations_header_text">
        <p class="flex items-center gap-[7px] font-[500] lg:text-[18px] md:text-[16px] text-[16px] mb-2">
          <span class="block w-3 h-3 bg-efl-green-base rounded-full"></span>
          <span>Our Locations</span>
        </p>

        <h2 class="text-[32px] uppercase font-[500]">efficient logistics to every direction</h2>

        <div class="locations_navigation flex gap-4 items-center mt-5">
          <button type="button" aria-label="Left arrow button"
            class="arrow_left border border-gray-300 rounded-full w-[50px] h-[50px] p-3">
            <img width="50" height="50" src="https://img.icons8.com/ios/9ca3af/50/left--v1.png" alt="left--v1" />
          </button>

          <button type="button" aria-label="Right arrow button"
            class="arrow_right border border-efl-blue-80 rounded-full w-[50px] h-[50px] p-3">
            <img width="50" height="50" src="https://img.icons8.com/ios/101d6a/50/right--v1.png" alt="left--v1" />
          </button>
          <button type="button" aria-label="See more locations button"
            class="more_locations bg-efl-blue-80 text-gray-50 rounded-full px-6 py-3 font-[500]">See more
            locations</button>
        </div>

        <div class="locations_map_overview flex justify-between items-center gap-10 mt-12 w-full">
          <div class="map_overview_image w-[65%]">
            <img class="h-full w-full object-contain" :src="map" alt="map">
          </div>

          <div class="map_location_details w-[30%] bg-gray-100 rounded-[32px] p-8">
            <div class="location border-b border-gray-500 pt-2 pb-5 flex items-end justify-between">
              <div class="location_details">
                <p class="text-gray-500 text-sm">Location</p>
                <h3 class="text-gray-950 font-[500] text-[20px]">Asia-Based Routes</h3>
              </div>
              <div class="location_arrow_buttons flex gap-4">
                <button class="left_arrow border border-gray-300 rounded-full w-[35px] h-[35px] p-2">
                  <img src="https://img.icons8.com/ios/9ca3af/50/left--v1.png" alt="left--v1" />
                </button>
                <button class="right_arrow border border-gray-500 rounded-full w-[35px] h-[35px] p-2">
                  <img src="https://img.icons8.com/ios/101d6a/50/right--v1.png" alt="right--v1" />
                </button>
              </div>
            </div>

            <div class="shipping_route border-b border-gray-500 py-5 flex items-end justify-between">
              <div class="location_details">
                <p class="text-gray-500 text-sm">Shipping Route</p>
                <h3 class="text-gray-950 font-[500] text-[20px]">Asia-North America</h3>
              </div>
              <div class="location_arrow_buttons flex gap-4">
                <button class="left_arrow border border-gray-300 rounded-full w-[35px] h-[35px] p-2">
                  <img src="https://img.icons8.com/ios/9ca3af/50/left--v1.png" alt="left--v1" />
                </button>
                <button class="right_arrow border border-gray-500 rounded-full w-[35px] h-[35px] p-2">
                  <img src="https://img.icons8.com/ios/101d6a/50/right--v1.png" alt="right--v1" />
                </button>
              </div>
            </div>

            <div class="transit_point border-b border-gray-500 py-5 flex items-end justify-between">
              <div class="location_details">
                <p class="text-gray-500 text-sm">Transit point</p>
                <h3 class="text-gray-950 font-[500] text-[20px]">West Coast Service</h3>
              </div>
            </div>

            <div class="carriers flex flex-col mt-5">
              <h3 class="text-gray-500 text-sm">Carriers</h3>
              <div class="carrier flex items-center gap-2 mb-5" v-for="customer in customers_logo" :key="customer.id">
                <img class="w-[40px] h-[40px] object-contain" :src="customer.image" :alt="customer.name">
                <p class="text-2xl font-[500]">{{ customer.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="services lg:px-10 md:px-5 px-4 py-10 w-full">
      <header class="services_header_text">
        <p class="flex items-center gap-[7px] font-[500] lg:text-[18px] md:text-[16px] text-[16px] mb-2">
          <span class="block w-3 h-3 bg-efl-green-base rounded-full"></span>
          <span>Our Services</span>
        </p>

        <h2 class="text-[32px] uppercase font-[500] max-w-[500px]">we use <span
            class="bg-efl-blue-20 px-1">simple</span>
          solutions to
          solve
          complex <span class="bg-efl-blue-20 px-1">problems</span></h2>

        <div class="services_button flex gap-4 items-center mt-5">
          <button type="button" aria-label="See details button"
            class="more_locations bg-efl-blue-80 text-gray-50 rounded-full px-6 py-3 font-[500]">See details</button>
        </div>
      </header>

      <div class="services_container mt-16">
        <div class="service flex flex-wrap justify-between py-10 border-t border-gray-600">
          <p class="text-5xl font-[600]">01/</p>
          <img class="w-[100px] object-contain" :src="image_one" alt="Image for service one">
          <div class="service_details flex gap-9 justify-between w-[70%]">
            <h3 class="text-gray-950 font-[500] text-[18px] w-[40%]">Complex <span
                class="bg-efl-blue-20 px-1">Customs</span> Procedures for International
              Shipments</h3>
            <p class="text-gray-500 w-[50%] text-[18px]">Our comprehensive customs brokerage services handle all
              documentation and compliance needs, ensuring efficient clearance for cross-border shipments.</p>
          </div>
        </div>

        <div class="service flex flex-wrap justify-between py-10 border-t border-gray-600">
          <p class="text-5xl font-[600]">02/</p>
          <img class="w-[100px] object-contain" :src="image_two" alt="Image for service two">
          <div class="service_details flex gap-9 justify-between w-[70%]">
            <h3 class="text-gray-950 font-[500] text-[18px] w-[40%]">Unreliable Timelines, High Costs and Delays in
              Multimodal <span class="bg-efl-blue-20 px-1">Transportation</span> Systems</h3>
            <p class="text-gray-500 w-[50%] text-[18px]">Our intermodal transportation services integrate rail, road,
              and
              sea transport, optimizing transit times and reducing costs with seamless coordination between different
              transportation modes.</p>
          </div>
        </div>

        <div class="service flex flex-wrap justify-between py-10 border-t border-gray-600">
          <p class="text-5xl font-[600]">03/</p>
          <img class="w-[100px] object-contain" :src="image_three" alt="Image for service three">
          <div class="service_details flex gap-9 justify-between w-[70%]">
            <h3 class="text-gray-950 font-[500] text-[18px] w-[40%]">Fragmented <span
                class="bg-efl-blue-20 px-1">Documentation</span> and Communication Systems</h3>
            <p class="text-gray-500 w-[50%] text-[18px]">We deliver sophisticated real-time tracking and route
              optimization
              systems, seamlessly integrating multiple transport modes for reliable delivery performance.</p>
          </div>
        </div>

        <div class="service flex flex-wrap justify-between py-10 border-t border-gray-600">
          <p class="text-5xl font-[600]">04/</p>
          <img class="w-[100px] object-contain" :src="image_four" alt="Image for service four">
          <div class="service_details flex gap-9 justify-between w-[70%]">
            <h3 class="text-gray-950 font-[500] text-[18px] w-[40%]">Complex <span
                class="bg-efl-blue-20 px-1">Inventory</span> Management</h3>
            <p class="text-gray-500 w-[50%] text-[18px]">We offer centralized warehouse management services with
              systematic
              inventory tracking, optimized space utilization, and coordinated distribution planning across our network
              of
              strategic storage facilities</p>
          </div>
        </div>

        <div class="service flex flex-wrap justify-between py-10 border-y border-gray-600">
          <p class="text-5xl font-[600]">05/</p>
          <img class="w-[100px] object-contain" :src="image_five" alt="Image for service five">
          <div class="service_details flex gap-9 justify-between w-[70%]">
            <h3 class="text-gray-950 font-[500] text-[18px] w-[40%]">Inefficiencies in Managing Export Logistics and
              <span class="bg-efl-blue-20">Freight</span> Coordination
            </h3>
            <p class="text-gray-500 w-[50%] text-[18px]">Our expert freight forwarding and export logistics team
              streamlines
              shipment planning, optimizes routes, and ensures timely delivery while managing all required export
              documentation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Let's Work Section -->
    <section class="let_work_section lg:px-10 md:px-5 px-4 py-10">
      <div
        class="lets_work min-h-[400px] bg-efl-blue-base rounded-[32px] text-gray-50 p-8 flex flex-col justify-between gap-8">
        <div class="font-[500] lg:text-[18px] md:text-[16px] text-[16px] flex justify-between">
          <p class="max-w-[500px]">Transform your logistics operations <br /> from complex to seamless - <br /> connect
            with
            our
            experts
            to begin your
            journey
          </p>
          <img src="../assets/home/right.png" alt="Right arrow icon">
        </div>

        <div class="lets_work_image_link flex justify-between">
          <h2 class="font-[500] text-[32px] uppercase">schedule your consultation today</h2>

          <button type="button" aria-label="Let's work button"
            class="bg-efl-blue-80 font-[500] px-4 rounded-full py-2 text-gray-200 min-w-[130px]">Let's
            Work</button>
        </div>
      </div>
    </section>

    <!-- Image Divider -->
    <section class="image_divider_section lg:h-[80vh] md:h-[70vh] h-[50vh] relative">
      <img class="h-full w-full object-cover object-top" src="../assets/home/01.jpeg" alt="Image divider">
    </section>

    <!-- How We Operate Section -->
    <section class="how_we_operate_section lg:px-10 md:px-5 px-4 py-10 border-b border-gray-300">
      <header class="services_header_text">
        <p class="flex items-center gap-[7px] font-[500] lg:text-[18px] md:text-[16px] text-[16px] mb-2">
          <span class="block w-3 h-3 bg-efl-green-base rounded-full"></span>
          <span>How we operate</span>
        </p>

        <h2 class="text-[32px] uppercase font-[500]">built on excellence, driven by trust</h2>
      </header>

      <div class="operations py-8 flex flex-wrap justify-center gap-6">
        <div class="operation border border-gray-100 shadow rounded-[16px] py-8 px-4 flex flex-col gap-8 w-[400px]">
          <div class="operation_image">
            <img class="w-[60px] object-contain" :src="image_one" alt="Image for service one">
          </div>

          <div class="operation_details">
            <h3 class="text-gray-950 font-[500] text-[20px]">Digital Solutions</h3>
            <p class="text-[18px]">We simplify container shipping by providing comprehensive end-to-end
              supply
              chain solutions that eliminate operational complexities</p>
          </div>
        </div>

        <div class="operation border border-gray-100 shadow rounded-[16px] py-8 px-4 flex flex-col gap-8 w-[400px]">
          <div class="operation_image">
            <img class="w-[60px] object-contain" :src="image_one" alt="Image for service one">
          </div>

          <div class="operation_details">
            <h3 class="text-gray-950 font-[500] text-[20px]">Customs and Compliance</h3>
            <p class="text-[18px]">We navigate complex customs and trade regulations, ensuring seamless cross-border
              shipment
              clearance
              and full regulatory compliance</p>
          </div>
        </div>

        <div class="operation border border-gray-100 shadow rounded-[16px] py-8 px-4 flex flex-col gap-8 w-[400px]">
          <div class="operation_image">
            <img class="w-[60px] object-contain" :src="image_one" alt="Image for service one">
          </div>

          <div class="operation_details">
            <h3 class="text-gray-950 font-[500] text-[20px]">Warehousing and Storage</h3>
            <p class="text-[18px]">We provide adaptable storage and inventory management services via our extensive
              warehouse
              network,
              enabling strategic supply chain optimization</p>
          </div>
        </div>
      </div>
    </section>

    <!-- World Class Supply Section -->
    <section class="world_class_section lg:px-10 md:px-5 px-4 py-16">
      <div
        class="world_class min-h-[400px] bg-efl-blue-base rounded-[32px] text-gray-50 p-8 flex flex-col justify-between gap-8">
        <div class="font-[500] lg:text-[18px] md:text-[16px] text-[16px] flex justify-between">
          <p class="max-w-[500px]">Experience world-class supply <br /> chain management and take your cargo<br />
            across
            borders with confidence and ease
          </p>
          <img src="../assets/home/right.png" alt="Right arrow icon">
        </div>

        <div class="lets_work_image_link flex justify-between">
          <h2 class="font-[500] text-[32px] uppercase">partner with logistics experts</h2>

          <button type="button" aria-label="Let's work button"
            class="bg-efl-blue-80 font-[500] px-4 rounded-full py-2 text-gray-200 min-w-[130px]">Let's
            Work</button>
        </div>
      </div>
    </section>


    <!-- FAQ -->
    <section class="faq_section lg:px-10 md:px-5 px-4 py-12">
      <FAQComponent :questions="questions" />
    </section>
  </main>
</template>

<style scoped></style>
