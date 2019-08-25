<template>
  <div>
    <h1>User edit {{ id }}</h1>
    <template v-if="user">
      <user-form v-model="user" />
      <button type="submit" class="btn btn-primary" @click="uploadUser">
        Add
      </button>
    </template>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  components: {
    'user-form': () => import('@/components/UserForm.vue')
  },
  data: function() {
    return {
      user: {}
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    url() {
      return `http://localhost:3000/users`;
    }
  },
  methods: {
    uploadUser: function() {
      // чтобы руками не забивать данные)
      const userDefault = {
        isActive: false,
        balance: '$3,845.24',
        picture: 'http://placehold.it/128x128',
        age: 26,
        accessLevel: 'user',
        firstName: 'Sarah',
        lastName: 'Collins',
        company: 'ZILLATIDE',
        email: 'sarah.collins@zillatide.org',
        phone: '+7 (886) 513-2124',
        address: '493 Arion Place, Brogan, Ohio, 7754',
        about:
          'Cupidatat commodo minim nostrud velit culpa do pariatur. Deserunt ad voluptate sit ipsum fugiat proident pariatur sit amet ipsum. Est Lorem exercitation ea officia culpa consequat in adipisicing aute sint. Nostrud consequat qui velit excepteur officia proident veniam occaecat. Nulla laborum Lorem laborum officia nostrud duis Lorem do aliquip ex.',
        registered: '24.01.2016'
      };
      axios
        .put(this.url, { ...userDefault, ...this.user })
        .then(() => {
          this.$router.push(`/users`);
        })
        .catch(error => console.error(error))
        .finally(() => console.warn('Uploading Done'));
    }
  }
};
</script>
