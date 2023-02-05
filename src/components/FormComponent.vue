<script setup lang="ts">
import type { User } from "@/models/user.model";
import { reactive, watch } from "vue";

// Omit the avatar property from User interface as image is not uploaded from here
type UserForm = Omit<User, 'avatar'>;
type Props = {
  onUpdateUser: (user: UserForm) => void;
}

const { onUpdateUser } = defineProps<Props>();

// Creating reactive copy of user object to bind with the inputs
const user = reactive<UserForm>({ firstName: "", lastName: "", email: ''})

/**
 * Watch is observing the inputs change
 * when ever there is a change in the input
 * it will call the onUpdateUser in the page component
 */
watch(user, (updatedUser) => {
  onUpdateUser(updatedUser);
});

</script>
<template>
    <van-row>
      <van-col class="form-col">
        <van-field :label="$t('message.firstName')" id="first-name" required  v-model="user.firstName" />
      </van-col>
      <van-col class="form-col">
        <van-field :label="$t('message.lastName')" id="last-name" required v-model="user.lastName" />
      </van-col>
      <van-col class="form-col">
        <van-field required :label="$t('message.email')" id="email" type="email" v-model="user.email" />
      </van-col>
    </van-row>
</template>
