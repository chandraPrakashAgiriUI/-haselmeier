<template>
  <div class="holiday-list-row"><span>{{ name }}</span><span> {{ date }}</span></div>
</template>

<script>
export default {
  name: 'row',
  props: ['name', 'date'],
};
</script>
<style scoped>
.holiday-list-row {
	border-bottom: 1px solid black;
    padding: 5px;
    display: flex;
    justify-content: space-between;
}
</style>
