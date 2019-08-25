<template>
  <div>
    <div class="form">
      <div class="form-group form-check">
        <input
          id="isActive"
          v-model="userLocal.isActive"
          type="checkbox"
          class="form-check-input"
        />
        <label class="form-check-label" for="isActive">isActive</label>
      </div>
      <div class="form-group">
        <label for="balance">Balance</label>
        <input
          id="firstName"
          v-model="userLocal.balance"
          type="text"
          class="form-control"
          placeholder="Balance"
        />
      </div>
      <div class="form-group">
        <label for="age">Age</label>
        <input
          id="age"
          v-model="userLocal.age"
          type="text"
          class="form-control"
          placeholder="Age"
        />
      </div>
      <div class="form-group">
        <label for="accessLevel">Access level</label>
        <select
          id="accessLevel"
          v-model="userLocal.accessLevel"
          class="custom-select"
        >
          <option disabled value>Choose...</option>
          <option>guest</option>
          <option>user</option>
          <option>admin</option>
        </select>
      </div>
      <div class="form-group">
        <label for="firstName">First name</label>
        <input
          id="firstName"
          v-model="userLocal.firstName"
          type="text"
          class="form-control"
          placeholder="First name"
        />
      </div>
      <div class="form-group">
        <label for="lastName">Last name</label>
        <input
          id="lastName"
          v-model="userLocal.lastName"
          type="text"
          class="form-control"
          placeholder="Last name"
        />
      </div>
      <div class="form-group">
        <label for="company">Company</label>
        <input
          id="lastName"
          v-model="userLocal.company"
          type="text"
          class="form-control"
          placeholder="Company"
        />
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          id="email"
          v-model="userLocal.email"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input
          id="phone"
          v-model="userLocal.phone"
          type="text"
          class="form-control"
          placeholder="Phone"
        />
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input
          id="address"
          v-model="userLocal.address"
          type="text"
          class="form-control"
          placeholder="Address"
        />
      </div>
      <div class="form-group">
        <label for="about">About</label>
        <textarea
          id="about"
          v-model="userLocal.about"
          class="form-control"
          rows="5"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="registeres">Registered</label>
        <input
          id="registered"
          v-model="userLocal.registered"
          type="text"
          class="form-control"
          placeholder="Registered"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'user',
    event: 'update'
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      userLocal: null
    };
  },
  watch: {
    userLocal: {
      deep: true,
      handler() {
        this.$emit('update', { ...this.userLocal });
      }
    }
  },
  created() {
    this.userLocal = { ...this.user };
  }
};
</script>
