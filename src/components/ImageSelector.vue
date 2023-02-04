<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const emptyFile = new File([], '');
        const value = ref([
        ]);
        return { value, emptyFile };
    },
    emits: ['imageChanged'],
});
</script>
<template>
    <van-field name="uploader">
        <template #input>
            <van-uploader v-model="value" @delete="() => $emit('imageChanged', emptyFile)" :after-read="(file) => $emit('imageChanged', { ...file, name: 'img' })" :max-count="1" :rules="[{ required: true, message: $t('message.imageError') }]"/>
        </template>
    </van-field>
</template>
