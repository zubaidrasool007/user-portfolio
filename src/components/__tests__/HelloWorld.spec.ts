import { describe, it, expect } from 'vitest'


import { mount, shallowMount } from '@vue/test-utils'
import FormComponent from '../FormComponent.vue'
import { createI18n } from 'vue-i18n';

describe('FormComponent', () => {
  const i18n = createI18n({
    messages: {
      en: {
        title: "User Profile",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        firstNameError: "First Name is required",
        lastNameError: "Last Name is required",
        emailError: "Email is required",
        imageError: "Image is required",
        save: "Save"
      },
      turkic: {
        title: "Kullanıcı profili",
        firstName: "İlk adı",
        lastName: "Soy isim",
        email: "E-posta",
        firstNameError: "Ad gereklidir",
        lastNameError: "Soyadı gereklidir",
        emailError: "Email gereklidir",
        imageError: "resim gerekli",
        save: "Kaydetmek"
      },
    }
  });

  const formComponent = shallowMount(FormComponent, () => {
    // mocks: {
    //   $t: () => {}
    // };
    global: {
      mocks: {
        plugins: [i18n]
        // $t: () => { }
      }
    }
    props: { onUpdateUser: () => { } }
  })
  it('renders properly', () => {
    const firstNameInput = formComponent.find('#first-name');
    expect(firstNameInput.exists());
    // const wrapper = mount(formComponent, { props: { msg: 'Hello Vitest' } })
    // expect(wrapper.text()).toContain('Hello Vitest')
  })
})
