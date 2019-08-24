<template>
  <div>
    <h1>Список пользователей</h1>
    <div v-if="!users.length" class="alert alert-warning">
      Загрузка...
    </div>
    <user-list v-else :users="users"></user-list>
  </div>
</template>

<script>
import axios from 'axios';
import UserList from '@/components/UserList.vue';

export default {
  components: {
    'user-list': UserList
  },
  data: function() {
    return {
      users: []
    };
  },
  mounted: function() {
    this.loadUsers();
  },
  methods: {
    loadUsers: function() {
      axios
        .get('http://localhost:3000/users')
        .then(response => {
          this.users = response.data;
          console.warn('Users is loading');
        })
        .catch(error => console.error(error))
        .finally(() => console.warn('Loading Done'));
    }
  }
};
</script>
