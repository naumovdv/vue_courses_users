<template>
  <div>
    <h1>User edit {{ id }}</h1>
    <template v-if="user">
      <user-form v-model="user" />
      <button type="submit" class="btn btn-primary" @click="uploadUser">
        Save
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
      user: null
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    url() {
      return `http://localhost:3000/users/${this.id}`;
    }
  },
  mounted: function() {
    this.loadUser();
  },
  methods: {
    loadUser: function() {
      axios
        .get(this.url)
        .then(response => {
          this.user = response.data;
          console.warn('Users is loading');
        })
        .catch(error => console.error(error))
        .finally(() => console.warn('Loading Done'));
    },
    uploadUser: function() {
      axios
        .patch(this.url, this.user)
        .then(() => {
          this.$router.push(`/users`);
        })
        .catch(error => console.error(error))
        .finally(() => console.warn('Uploading Done'));
    }
  }
};
</script>
