<template>
  <div id="app">
    <h1>Holidays List</h1>
    <div>
      <label>Choose country</label>
      <select
        @change="getHolidaysList()"
        class="form-control"
        v-model="selectedCountry"
        :required="true"
      >
        <option
          v-for="country in countries"
          v-bind:value="country.code"
          v-bind:key="country.code"
          :selected="country == 'Choose country'"
        >{{ country.name }}</option>
      </select>
    </div>
    <div class="holidayList">
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>
    <section v-else>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <holiday-row
          v-for="holiday in holidayList"
          v-bind:key="holiday.uuid"
          :name="holiday.name"
          :date="holiday.date"
        />
      </div>
    </section>
    </div>
  </div>
</template>

<script>
import HolidayRow from './components/HolidayRow.vue';
import HolidayServices from './services/holiday';

export default {
  components: {
    HolidayRow,
  },
  data() {
    return {
      holidayList: null,
      countries: null,
      selectedCountry: 'DE',
    };
  },
  methods: {
    async getHolidaysList() {
      try {
        const holidays = await HolidayServices.get(
          'holidays',
          this.selectedCountry,
          2018,
        );
        this.holidayList = holidays.data.holidays;
      } catch (err) {
        this.errored = true;
      } finally {
        this.loading = false;
      }
    },
    async getCountriesList() {
      try {
        const countries = await HolidayServices.get('countries');
        this.countries = countries.data.countries;
      } catch (err) {
        this.errored = true;
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.getHolidaysList();
    this.getCountriesList();
  },
};
</script>
<style>
.holidayList {
  border: 1px solid black;
  margin-top: 20px;
}
</style>