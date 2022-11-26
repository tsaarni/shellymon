<script setup lang="ts">
  import NavigationBar from "./components/NavigationBar.vue";
  import AddDeviceDialog from "./components/DeviceDialog.vue";
  import ShellyDevices from "./components/ShellyDevices.vue";

  import { ShellyDevice } from "@/types/shelly";
  import { reactive, ref } from "vue";

  //const devices: ShellyDevice[] = [];
  const devices = ref<ShellyDevice[]>([]);
  const showAddDeviceDialog = ref(false);

  const interval = 1000; // ms
  let timerId: number = 0;

  function addDevice(addr: string, name: string) {
    console.log("addDevice", addr, name);
    // let next = devices.value.length + 1;
    let shelly = reactive(new ShellyDevice(name, addr));
    //   let shelly = reactive(new ShellyDevice(`Shelly ${next}`, `192.168.86.35`));
    //let shelly = reactive(new ShellyDevice(`Shelly ${next}`, `192.168.86.32`));
    shelly.queryDevice();
    devices.value.push(shelly);

    if (timerId === 0) {
      timerId = setInterval(() => {
        devices.value.forEach((device) => {
          device.getMeasurement();
        });
      }, interval);
    }
  }
</script>

<template>
  <NavigationBar @add-device="showAddDeviceDialog = true" />
  <AddDeviceDialog
    v-if="showAddDeviceDialog"
    @add-device="addDevice"
    @close="showAddDeviceDialog = false"
  />
  <div class="flex flex-col bg-white text-black dark:bg-black dark:text-white">
    <ShellyDevices :devices="devices" />
  </div>
</template>
