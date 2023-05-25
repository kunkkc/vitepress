<template>
  <div>
    <InputSearch
      v-model:value="value"
      placeholder="输入您想查询Mirror的关键字"
      enter-button="Search"
      size="normal"
      @search="onSearch"
    ></InputSearch>
    <Divider />
    <Spin :spinning="spinning" :delay="100">
      <List item-layout="vertical" size="large" :data-source="result">
        <template #renderItem="{ item }">
          <ListItem key="item.title">
            <ListItemMeta>
              <template #title>
                <a :href="item.link" target="_blank">{{ item.title }}</a>
              </template>
              <template #avatar><Avatar :src="item.avatar" /></template>
              <template #description>
                <div>作者：{{ item.nickname }}</div>
                <div>
                  创建时间：{{
                    new Date(item.creat_time * 1000).toLocaleString()
                  }}
                </div>
              </template>
            </ListItemMeta>
          </ListItem>
        </template>
      </List>
    </Spin>
    <Pagination
      style="float: right"
      v-model:current="currentPage"
      :total="50"
      show-less-items
      @change="handlePageChange"
      v-if="result.length > 0"
    />
  </div>
</template>

<script setup>
import "ant-design-vue/lib/button/style/index.css";
import "ant-design-vue/lib/input/style/index.css";
import "ant-design-vue/lib/divider/style/index.css";
import "ant-design-vue/lib/list/style/index.css";
import "ant-design-vue/lib/spin/style/index.css";
import "ant-design-vue/lib/empty/style/index.css";
import "ant-design-vue/lib/pagination/style/index.css";
import "ant-design-vue/lib/avatar/style/index.css";
import axios from "axios";
import {
  InputSearch,
  Divider,
  List,
  ListItem,
  ListItemMeta,
  Avatar,
  Pagination,
  Spin,
} from "ant-design-vue";

import { ref } from "vue";
const value = ref();

const currentPage = ref(1);
const sort = ref("Time");
const result = ref([]);
const searchValue = ref("");
const spinning = ref(false);
const onSearch = (value) => {
  searchValue.value = value;
  getMirror(searchValue.value, currentPage.value, sort.value);
};

const handlePageChange = (page, pageSize) => {
  console.log(page);
  console.log(pageSize);
  getMirror(searchValue.value, page, sort.value);
};

const getMirror = (searchValue, currentPage, sort) => {
  spinning.value = true;
  const encodedText = encodeURIComponent(searchValue);
  const url = `https://api.mirrorbeats.xyz/mirror/Mirror/search?page=${currentPage}&size=5&keyword=${encodedText}&sort=${sort}`;
  axios
    .get(url)
    .then((res) => {
      console.log(res);
      if (res.data.code == 200) {
        result.value = res.data.data;
      }
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      spinning.value = false;
    });
};
</script>

<style lang="scss">
html {
  &.dark {
    .ant-empty-description {
      color: var(--vp-c-text-dark-1) !important;
    }
    .ant-list-item-meta-title {
      > a {
        color: var(--vp-c-text-dark-1) !important;
      }
    }
    .ant-list-item-meta-description {
      div {
        color: var(--vp-c-text-dark-1) !important;
      }
    }
  }
}
</style>
