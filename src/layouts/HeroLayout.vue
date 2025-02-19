<script setup lang="ts">

</script>

<template>
  <header
    class="hero_section relative lg:h-[100vh] md:h-[90vh] h-[80vh] flex lg:justify-end md:justify-center justify-center pt-20 flex-col lg:px-10 md:px-5 px-4 w-full pb-10">
    <!-- Background Image -->
    <div class="bg_image absolute top-0 left-0 w-full h-full">
      <slot name="bg_image"></slot>
    </div>

    <!-- Hero Title -->
    <div class="hero_title text-white relative z-10">
      <p class="font-[500] flex items-center gap-[7px] lg:text-[18px] md:text-[16px] text-[16px]">
        <slot name="hero_tagged_text"></slot>
      </p>
      <h1 class="lg:text-[64px] md:text-[48px] text-[32px] font-[700] leading-tight uppercase">
        <slot name="hero_title"></slot>
      </h1>
      <p class="mt-6 font-[500] lg:text-[18px] md:text-[16px] text-[16px]">
        <slot name="hero_description"></slot>
      </p>
    </div>

    <!-- Hero Button -->
    <div class="hero_btn w-fit flex gap-4 relative z-10 my-10">
      <slot name="hero_btn_1"></slot>
    </div>
  </header>
</template>

<style scoped>
.hero_section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000a4;
  z-index: 1
}
</style>
