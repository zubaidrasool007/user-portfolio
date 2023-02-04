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
    <van-form class="form">
        <van-row>
            <van-col class="form-col">
                <van-field v-model="firstname" name="firsname" :label="$t('message.firstName')"
                    :rules="[{ required: true, message: $t('message.firstNameError') }]" />
            </van-col>
            <van-col class="form-col">
                <van-field v-model="lastname" name=";astname" :label="$t('message.lastName')"
                    :rules="[{ required: true, message: $t('message.lastNameError') }]" />
            </van-col>
            <van-col class="form-col">
                <van-field v-model="email" name="email" :label="$t('message.email')"
                    :rules="[{ required: true, message: $t('message.emailError') }]" />
            </van-col>
        </van-row>
    </van-form>
</template>
