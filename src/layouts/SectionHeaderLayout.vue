<script setup lang="ts">
</script>

<template>
  <div class="section_header max-w-[650px] mx-auto text-center">
    <h3 class="bg-[#E7E8F0] text-[#101D6A] text-sm px-[10px] py-[8px] rounded-[8px] w-fit mx-auto font-[500] mb-5">
      <slot name="h3_text"></slot>
    </h3>
    <h2 class="text-center mx-auto font-[600] lg:text-[36px] md:text-[28px] text-[20px]">
      <slot name="h2_text"></slot>
    </h2>
    <p class="mt-4 lg:max-w-[90%] lg:text-[16px] text-sm w-full mx-auto">
      <slot name="p_text"></slot>
    </p>
  </div>
</template>

<style scoped></style>