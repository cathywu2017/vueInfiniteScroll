<template>
  <div class="item">
    <p>
      <slot name="title"></slot>
    </p>
    <p>
      <slot name="description"></slot>
    </p>
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<style>
.item {
  width: 600px;
  padding: 15px;
  margin: 0 auto 10px;
}
</style>
