<template>
  <div class="tracking_form z-10 w-full rounded-[8px] py-10 mt-20 grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-y-6">

    <!-- BL Number Filter Section -->
    <section class="bl_number_filter_container border shadow-sm bg-white col-span-1 rounded-[16px] p-10 border-red-500">
      <header class="header py-6 border-b border-gray-400">
        <h3 class="font-[500] text-[20px] mb-2">BL0123456789</h3>
        <button type="button" aria-label="Edit Bl number button" class="text-efl-blue-80 flex items-center gap-3">Edit
          BL number <img class="w-[25px]" src="https://img.icons8.com/ios-filled/425987/50/long-arrow-right.png"
            alt="long-arrow-right" /></button>
      </header>

      <div class="container_input border-b border-gray-400 py-7">
        <input type="text" class="input border border-gray-300 w-full h-[45px] px-3 rounded-[5px]"
          placeholder="Enter container number" />
        <p class="comment text-sm mt-1 text-gray-700">Comment is being given</p>
        <button type="button" aria-label="Search for container number button"
          class="text-efl-blue-80 flex items-center gap-3 mt-3">Search container number <img class="w-[25px]"
            src="https://img.icons8.com/ios-filled/425987/50/long-arrow-right.png" alt="long-arrow-right" /></button>
      </div>

      <div class="container_filters py-5">
        <h3 class="text-[18px] font-[500] mb-5">Narrow down your search results with advanced options.</h3>

        <div class="status_filter">
          <label for="status" class="font-[500]">Status</label>
          <div class="filter border pr-4 h-[45px] flex items-center rounded-[5px] mt-2 mb-5">
            <select class="w-full bg-white h-full rounded-[5px] pl-4" name="status" id="status">
              <option value="all">All Status</option>
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>

        <div class="flags_filter">
          <label for="flags" class="font-[500]">Flags</label>
          <div class="filter border pr-4 h-[45px] flex items-center rounded-[5px] mt-2 mb-5">
            <select class="w-full bg-white h-full rounded-[5px] pl-4" name="flags" id="flags">
              <option value="all">All Flags</option>
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>

      </div>
    </section>

    <!-- Result Section -->
    <section class="result_one border shadow-sm rounded-[16px] col-span-2 p-10 bg-white">
      <div class="overflow-x-auto">
        <table class="min-w-full table-auto">
          <thead class="border-b">
            <tr>
              <th class="px-6 py-3 text-left text-sm text-gray-800 font-[700] tracking-wider">Container ID
              </th>
              <th class="px-6 py-3 text-left text-sm text-gray-800 font-[700] tracking-wider">Status</th>
              <th class="px-6 py-3 text-left text-sm text-gray-800 font-[700] tracking-wider">Flags</th>
              <th class="px-6 py-3 text-left text-sm text-gray-800 font-[700] tracking-wider">Days in Port
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">CONT123456</td>
              <td class="px-6 py-4 whitespace-nowrap"><span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Priority</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">CONT789012</td>
              <td class="px-6 py-4 whitespace-nowrap"><span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Regular</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">CONT345678</td>
              <td class="px-6 py-4 whitespace-nowrap"><span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Delayed</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Urgent</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">CONT901234</td>
              <td class="px-6 py-4 whitespace-nowrap"><span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Express</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">CONT567890</td>
              <td class="px-6 py-4 whitespace-nowrap"><span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">Completed</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Standard</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6</td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
