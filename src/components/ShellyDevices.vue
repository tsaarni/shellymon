<script setup lang="ts">
  import { ref, toRef } from "vue";
  import type { ShellyDevice } from "@/types/shelly";
  import PowerChart from "./PowerChart.vue";

  const props = defineProps<{
    devices: ShellyDevice[];
  }>();

  const devices = toRef(props, "devices");
  const howerOnDevice = ref(false);
</script>

<template>
  <div v-for="device in devices" class="py-5 px-5 flex">
    <div
      class="flex flex-col relative min-w-max bg-white border shadow-sm rounded-xl dark:bg-gray-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
      @mouseover="howerOnDevice = true"
      @mouseout="howerOnDevice = false"
    >
      <Transition>
        <a
          class="w-6 h-6 absolute bottom-5 right-5"
          v-if="howerOnDevice === true"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </a>
      </Transition>

      <div class="flex-none w-64">
        <img :src="device.icon" :alt="device.type" />
      </div>

      <div class="p-4 md:p-5 h-auto rounded-b-x1">
        <h3 class="text-lg font-bold text-gray-800 dark:text-white">
          {{ device.name }}
        </h3>
        <div
          class="mt-1 text-gray-800 dark:text-gray-400 grid grid-cols-2 grid-flow-row-dense"
        >
          <div class="min-w-fit">Power (W)</div>
          <div>{{ device.power }}</div>
          <div class="min-w-fit">Total (Wh)</div>
          <div>{{ device.total }}</div>
          <div class="min-w-fit">Address</div>
          <div>{{ device.address }}</div>

          <div class="col-span-2 grow content-center pt-4">
            <label
              for="checked-toggle"
              class="flex grow relative items-center place-self-center cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                id="checked-toggle"
                class="sr-only peer"
                checked="true"
              />
              <div
                class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"
              ></div>
              <span
                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Record
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div id="power" class="grow px-3 py-3">
      <PowerChart :data="device.data" />
    </div>
  </div>
</template>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
