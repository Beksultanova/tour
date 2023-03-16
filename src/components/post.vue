
<template>
  <div class="block">
    <img
    class="block__img" 
    :src="img"
     alt="">
    <h3 class="block__title">{{ title }}</h3>
    <p class="block__subtitle">{{ body }}</p>
    <button class="block__btn">Подробнее</button>
  </div>
</template>

<script lang="ts" setup>
interface PropType {
  img: string;
  title: string;
  body: string;
}

defineProps<PropType>();
</script>

<style>
.block {
  box-shadow: 0px 4px 10px 0px rgba(34, 60, 80, 0.2);
  padding: 30px;
  height: 550px;
}
.block__img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center;
  display: block;
  margin-bottom: 25px;
}
.block__btn {
  padding: 15px 30px;
  background-color: rgb(210, 0, 0);
  border: none;
  color: white;
  font-weight: 700;
  margin-top: 15px;
  margin-left: 26px;
}
.block__title {
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  text-transform: capitalize;
  color: #4e4e4e;
  margin-bottom: 5px;
}

.block__subtitle {
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 20px;
  text-transform: capitalize;
  color: #adadad;
  margin-bottom: 13px;
}

.block__description {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: #5c5c5c;
}
.img {
  width: 200px;
  height: 200px;
  background-color: aqua;
  object-fit: cover;
  object-position: center;
}
</style>
