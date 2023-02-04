<script lang="ts">
import ImageSelector from './ImageSelector.vue';
import FormComponent from "./FormComponent.vue"
import { defineComponent } from 'vue';
export default defineComponent({
    components: { ImageSelector, FormComponent },
});

</script>

<template>
    <van-row>
        <h2 class="title">{{ $t('message.title') }}</h2>
    </van-row>
    <div class="page-container">
    <van-row>
        <van-col span="12">
            <FormComponent />
        </van-col>
        <van-col span="12" class="image-container">
            <ImageSelector />
        </van-col>
    </van-row>
</div>
    <van-row justify="end" class="btn-container">
        <van-col>
            <van-button round block type="primary" size="small" native-type="submit">
                Submit
            </van-button>
        </van-col>
    </van-row>
</template>