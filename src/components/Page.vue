<script lang="ts">
import ImageSelector from './ImageSelector.vue';
import FormComponent from "./FormComponent.vue"
import { defineComponent } from 'vue';

interface CustomEvent {
    type: string,
    value: string
};

export default defineComponent({
    components: { ImageSelector, FormComponent },
    setup() {
        let firstname = '';
        let lastname = '';
        let email = '';
        let image: File = new File([], '');
        const onFormChange = (event: CustomEvent) => {
            switch (event.type) {
                case 'firstname':
                    firstname = event.value;
                    break;
                case 'lastname':
                    lastname = event.value;
                    break;
                case 'email':
                    email = event.value;
                    break;
                default:
                    break;
            };
            console.log({ firstname, lastname, email });            
        };
        const onImageChange = (value: any) => {
            image = value.file;
            console.log('Image changed called!!!', image)
        };
        const isUserValid = () => {
            return image?.name.length > 0;
        };
        const onSubmit = () => {
            console.log(isUserValid(), "onSubmit", { firstname, lastname, email, image })
        };
        return {
            firstname,
            lastname,
            email,
            image,
            onImageChange,
            onFormChange,
            isUserValid,
            onSubmit,
        };
    },
});

</script>

<template>
    <van-row>
        <h2 class="title">{{ $t('message.title') }}</h2>
    </van-row>
    <div class="page-container">
    <van-row>
        <van-col span="12">
            <FormComponent @value-changed="onFormChange" />
        </van-col>
        <van-col span="12" class="image-container">
            <ImageSelector @image-changed="onImageChange" />
        </van-col>
    </van-row>
</div>
    <van-row justify="end" class="btn-container">
        <van-col>
            <van-button :disabled="isUserValid" @click="onSubmit" round block type="primary" size="small" native-type="submit">
                Submit
            </van-button>
        </van-col>
    </van-row>
</template>