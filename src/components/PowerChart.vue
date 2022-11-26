<script setup lang="ts">
  import { onMounted, ref, toRef, watch } from "vue";
  import * as echarts from "echarts";
  import type { ShellyDevice } from "@/types/shelly";

  const props = defineProps<{
    data: [Date, number][];
  }>();

  const chartDiv = ref<HTMLElement | null>(null);
  let chart: echarts.ECharts;

  onMounted(() => {});

  watch(props.data, (newData) => {
    if (chart === undefined) {
      if (chartDiv.value) {
        chart = echarts.init(chartDiv.value);
        chart.setOption({
          xAxis: {
            type: "time",
            name: "Time",
          },
          yAxis: {
            type: "value",
            name: "Power",
          },
          tooltip: {
            trigger: "axis",
          },
          toolbox: {
            feature: {
              saveAsImage: {},
            },
          },
          dataZoom: [
            {
              type: "inside",
              start: 0,
              end: 100,
            },
            {
              start: 0,
              end: 100,
            },
          ],

          grid: {
            left: 50,
            top: 40,
            right: 50,
            //bottom: 30,
          },
          series: [
            {
              type: "line",
              symbol: "none",
              sampling: "lttb",
              animation: false,
              name: "Watts",
              areaStyle: {},
              data: [],
            },
          ],
        });
      } else {
        console.error("Cannot initialize chart: chartDiv is null");
      }
    }
    chart.setOption({
      series: [
        {
          data: newData,
          type: "line",
        },
      ],
    });
  });
</script>

<template>
  <div class="h-full max-h-full w-full grow" ref="chartDiv"></div>
</template>

<style scoped></style>
