<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        let firstname = ref('');
        let lastname = ref('');
        let email = ref('');
        return {
            firstname,
            lastname,
            email,
        };
    },
    emits: [
        'valueChanged',
    ],
});

</script>
<template>
    <van-form class="form">
        <van-row>
            <van-col class="form-col">
                <van-field v-model="firstname" @keyup="$emit('valueChanged', { type: 'firstname', value: firstname })"
                    name="firsname" :label="$t('message.firstName')"
                    :rules="[{ required: true, message: $t('message.firstNameError') }]" />
            </van-col>
            <van-col class="form-col">
                <van-field v-model="lastname" @keyup="$emit('valueChanged', { type: 'lastname', value: lastname })"
                    name="lastname" :label="$t('message.lastName')"
                    :rules="[{ required: true, message: $t('message.lastNameError') }]" />
            </van-col>
            <van-col class="form-col">
                <van-field v-model="email" @keyup="$emit('valueChanged', { type: 'email', value: email })"
                    name="email" :label="$t('message.email')"
                    :rules="[{ required: true, message: $t('message.emailError') }]" />
            </van-col>
        </van-row>
    </van-form>
</template>
