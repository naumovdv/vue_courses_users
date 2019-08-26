<template>
  <div>
    <div class="tableControls text-right">
      <button
        v-tooltip="toggleButtonTooltip"
        class="btn btn-secondary"
        @click="toggleUserList"
      >
        {{ toggleButtonText }}
      </button>
    </div>
    <count-items-on-page v-model="itemsOnPage" />
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Active</th>
          <th>Balance</th>
          <th>Age</th>
          <th>Access level</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Company</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="isVisibleUserList">
        <tr v-for="user in usersVisible" :key="user.id">
          <td>
            <router-link :to="`/userEdit/${user.id}`">{{
              user.id
            }}</router-link>
          </td>
          <td>{{ user.isActive }}</td>
          <td>{{ user.balance }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.accessLevel }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.company }}</td>
          <td>
            <button class="btn btn-danger" @click="deleteUser(user.id)">
              Удалить
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <page-navigation
      v-model="pageNumber"
      :items-on-page="itemsOnPage"
      :total-items="totalUsers"
    />
  </div>
</template>

<script>
export default {
  components: {
    'count-items-on-page': () => import('@/components/CountItemsOnPage.vue'),
    'page-navigation': () => import('@/components/PageNavigation.vue')
  },
  filters: {
    uppercase: function(value) {
      if (!value) return;
      return value.toString().toUpperCase();
    }
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      toggleButtonTooltip: 'Показать/скрыть список',
      isVisibleUserList: true,
      pageNumber: 1,
      itemsOnPage: 5
    };
  },
  computed: {
    toggleButtonText: function() {
      return this.isVisibleUserList ? 'Скрыть' : 'Показать';
    },
    usersVisible: function() {
      return this.users.slice(
        (this.pageNumber - 1) * this.itemsOnPage,
        this.pageNumber * this.itemsOnPage
      );
    },
    totalUsers: function() {
      return this.users.length;
    }
  },
  watch: {
    itemsOnPage: function() {
      this.pageNumber = 1;
    }
  },
  methods: {
    toggleUserList: function() {
      this.isVisibleUserList = !this.isVisibleUserList;
    },
    deleteUser: function(userId) {
      this.$emit('delete', userId);
    }
  }
};
</script>

<style>
.tableControls {
  margin-bottom: 20px;
}

.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: black;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: black;
  z-index: 1;
}

.tooltip[x-placement^='top'] {
  margin-bottom: 5px;
}

.tooltip[x-placement^='top'] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^='bottom'] {
  margin-top: 5px;
}

.tooltip[x-placement^='bottom'] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^='right'] {
  margin-left: 5px;
}

.tooltip[x-placement^='right'] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^='left'] {
  margin-right: 5px;
}

.tooltip[x-placement^='left'] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, 0.1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden='true'] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.15s, visibility 0.15s;
}

.tooltip[aria-hidden='false'] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
}
</style>
