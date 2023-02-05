<script setup lang="ts">
import { useStore } from 'vuex'
import ImageSelector from "./ImageSelector.vue";
import UserDetailForm from "./FormComponent.vue";
import { defineComponent, ref, computed } from "vue";
import type {
  UploaderAfterRead,
  UploaderFileListItem,
} from "vant/lib/uploader/types";
import type { User } from "../models/user.model";
import type { RootState } from "../store/index"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// User object initialization
const user = ref<User>({
  firstName: "",
  lastName: "",
  email: "",
  avatar: undefined,
});

// Commit from useStore is used for mutations to be called in the store
const { commit } = useStore<RootState>()

/**
 * Form validation being checked
 * as first name, last name and email are required so these are necessary to fill
 * also checking the value in email input is valid or not
 */
const isFormInvalid = computed(
  () => !user.value.firstName || !user.value.lastName || !user.value.email || !EMAIL_REGEX.test(user.value.email)
);

/**
 * @param { User } fields is user data except the image/avatar property
 * This function is called from the child component (FormComponent)
 * to receive the inputs of the user
 */
const updateUserForm = (fields: Omit<User, "avatar">) => {
  user.value = { ...user.value, ...fields };
};

/**
 * This function is called from ImageSelector when an image is uploaded
 * or already removed uploaded image is removed.
 * @param { UploaderAfterRead } upload is the uploaded image from ImageSelector component
 */
const onImageChange = (upload: UploaderAfterRead) => {
  user.value.avatar = (upload as UploaderFileListItem).file;
};

/**
 * Save user information into vuex store by calling its mutation `updateUserInformation`
 */
const saveUserInformation = () => {
    commit('updateUserInformation', user.value)
}
</script>

<template>
  <van-form class="form" @submit="saveUserInformation">
    <van-row>
      <h2 class="title">{{ $t("message.title") }}</h2>
    </van-row>
    <div class="page-container">
      <van-row>
        <van-col span="12">
          <UserDetailForm @update-user="updateUserForm" />
        </van-col>
        <van-col span="12" class="image-container">
          <ImageSelector @image-change="onImageChange" />
        </van-col>
      </van-row>
    </div>
    <van-row justify="end" class="btn-container">
      <van-col>
        <van-button
          :disabled="isFormInvalid"
          round
          block
          type="primary"
          size="small"
          native-type="submit"
        >
          Submit
        </van-button>
      </van-col>
    </van-row>
  </van-form>
</template>