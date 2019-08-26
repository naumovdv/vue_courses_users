<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li
          class="page-item"
          :class="{ disabled: isDisabledPrev }"
          @click="goToPrevPage()"
        >
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        <li
          v-for="pageNumber in countPages"
          :key="pageNumber"
          class="page-item"
          :class="{ active: isActivePage(pageNumber) }"
        >
          <a class="page-link" href="#" @click.prevent="goToPage(pageNumber)">{{
            pageNumber
          }}</a>
        </li>

        <li
          class="page-item"
          :class="{ disabled: isDisabledNext }"
          @click="goToNextPage()"
        >
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'pageNumber',
    event: 'update'
  },
  props: {
    pageNumber: {
      type: Number,
      required: true
    },
    itemsOnPage: {
      type: Number,
      required: true
    },
    totalItems: {
      type: Number,
      required: true
    }
  },
  data: function() {
    return {
      pageNumberLocal: null
    };
  },
  computed: {
    countPages() {
      return Math.ceil(this.totalItems / this.itemsOnPage);
    },
    isDisabledPrev: function() {
      return this.pageNumberLocal - 1 <= 0;
    },
    isDisabledNext: function() {
      return this.pageNumberLocal + 1 > this.countPages;
    }
  },
  watch: {
    pageNumberLocal: {
      handler() {
        this.$emit('update', parseInt(this.pageNumberLocal));
      }
    },
    pageNumber: function() {
      if (this.pageNumberLocal !== this.pageNumber) {
        this.pageNumberLocal = this.pageNumber;
      }
    }
  },
  created() {
    this.pageNumberLocal = this.pageNumber;
  },
  methods: {
    goToPage: function(pageNumber) {
      if (pageNumber && pageNumber <= this.countPages) {
        this.pageNumberLocal = pageNumber;
      }
    },
    goToPrevPage: function() {
      if (this.pageNumberLocal - 1 > 0) {
        this.pageNumberLocal -= 1;
      }
    },
    goToNextPage: function() {
      if (this.pageNumberLocal + 1 <= this.countPages) {
        this.pageNumberLocal += 1;
      }
    },
    isActivePage: function(pageNumber) {
      return pageNumber === this.pageNumberLocal;
    }
  }
};
</script>
