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
  height: 150px;
  padding: 15px;
  margin: 0 auto 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #333;
  border-radius: 1rem;
}
.item:first-child {
  margin-top: 20px;
}
</style>
