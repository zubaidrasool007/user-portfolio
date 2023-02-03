<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const value = ref([
        ]);
        return { value };
    },
});
</script>
<template>
    <van-field name="uploader">
        <template #input>
            <van-uploader v-model="value" :rules="[{ required: true, message: 'Image is required' }]"/>
        </template>
    </van-field>
</template>
