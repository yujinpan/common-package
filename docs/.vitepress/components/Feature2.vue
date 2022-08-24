<template>
  <el-table :data="data" border>
    <el-table-column
      v-for="(item, index) in columns"
      :key="index"
      :prop="item.prop"
      :label="item.label"
    ></el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ElTable, ElTableColumn } from 'element-plus';
import { ref } from 'vue';

// auto base/dark style
import 'element-plus/theme-chalk/dark/css-vars.css';

// es module can not be load, import full styles
import 'element-plus/theme-chalk/index.css';

const data = ref([
  { name: 'name1', type: 'type1' },
  { name: 'name2', type: 'type2' },
  { name: 'name3', type: 'type3' },
]);

const columns = ref([
  {
    prop: 'name',
    label: 'NAME',
  },
  { prop: 'type', label: 'TYPE' },
]);
</script>
