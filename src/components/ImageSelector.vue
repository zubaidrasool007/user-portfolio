<script setup lang="ts">
import type { UploaderAfterRead } from "vant/lib/uploader/types";
import { ref } from "vue";

type Props = {
    // UploadAfterRead is an event dispatched
    // when an image is uploaded or dragged into the uploader component
    onImageChange: (upload: UploaderAfterRead) => void;
}

// When image is uploaded send to parent component (Page)
const { onImageChange } = defineProps<Props>();

// File ref to store the uploaded file into local state variable
const file = ref([]);

</script>
<template>
  <van-field name="uploader">
    <template #input>
      <van-uploader
        v-model="file"
        @delete="onImageChange"
        :after-read="onImageChange"
        :max-count="1"
        :rules="[{ required: true, message: $t('message.imageError') }]"
      />
    </template>
  </van-field>
</template>
