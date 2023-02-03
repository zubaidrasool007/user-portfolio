<script lang="ts">
import { defineComponent, ref } from 'vue';
import ImageSelector from './ImageSelector.vue';
export default defineComponent({
    setup() {
        const firstname = ref('');
        const lastname = ref('');
        const email = ref('');
        const image = ref([]);
        const onSubmit = (values: any) => {
            console.log("onSubmit", values)
        };
        console.log("onSubmit", lastname)
        return {
            firstname,
            lastname,
            email,
            image,
            onSubmit,
        };
    },
    components: { ImageSelector },
});

</script>
<template>
    <van-form @submit="onSubmit" class="form">
        <van-row>
            <h2 class="title">{{$t('message.title')}}</h2>
        </van-row>
        <van-row>
            <van-col span="12" class="form-col">
                <van-field v-model="firstname" name="Firsname" :label="$t('message.firstName')"
                    :rules="[{ required: true, message: $t('message.firstNameError') }]" />
                <van-field v-model="lastname" name="Lastname" :label="$t('message.lastName')"
                    :rules="[{ required: true, message: $t('message.lastNameError') }]" />
                <van-field v-model="email" name="Email" :label="$t('message.email')"
                    :rules="[{ required: true, message: $t('message.emailError') }]" />
            </van-col>
            <van-col span="12" class="image-container">
                <ImageSelector />
            </van-col>
        </van-row>
        <van-row justify="end" class="btn-container">
            <van-col>
                <van-button round block type="primary" size="small" native-type="submit"
                    :disabled="email === '' || firstname === ''">
                    Submit
                </van-button>
            </van-col>
        </van-row>

    </van-form>
</template>
