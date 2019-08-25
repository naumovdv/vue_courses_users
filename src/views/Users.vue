<template>
  <div>
    <h1>Список пользователей</h1>
    <div v-if="!users.length" class="alert alert-warning">
      Загрузка...
    </div>
    <user-list v-else :users="users" @delete="deleteUser" />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  components: {
    'user-list': () => import('@/components/UserList.vue')
  },
  data: function() {
    return {
      users: []
    };
  },
  computed: {
    url() {
      return `http://localhost:3000/users`;
    }
  },
  mounted: function() {
    this.loadUsers();
  },
  methods: {
    loadUsers: function() {
      axios
        .get(this.url)
        .then(response => {
          this.users = response.data;
          console.warn('Users is loading');
        })
        .catch(error => console.error(error))
        .finally(() => console.warn('Loading Done'));
    },
    deleteUser: function(userId) {
      axios
        .delete(`${this.url}/${userId}`)
        .then(() => {
          const deletedUserIndex = this.users.findIndex(
            user => user.id === userId
          );
          if (deletedUserIndex !== -1) {
            this.users.splice(deletedUserIndex, 1);
          }
        })
        .catch(error => console.error(error))
        .finally(() => console.warn(`Delete user #${userId} done`));
    }
  }
};
</script>
