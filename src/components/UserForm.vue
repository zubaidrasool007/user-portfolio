<script lang="ts">
import ImageSelector from './ImageSelector.vue';
import InputComponent from "./InputComponent.vue"
import { defineComponent } from 'vue';
export default defineComponent({
    components: { ImageSelector, InputComponent },
});

</script>

<template>
    <InputComponent />
</template>