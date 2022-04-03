<template>
  <div class='wrap'>
    <div class='item'>
      Item
    </div>
    <div class='price'>
      Price
    </div>
    <div class='qty'>
      Qty
    </div>
    <div class='total'>
      Total
    </div>
    <div class='delete'>

    </div>
  </div>
</template>

<style lang='scss' scoped>
.wrap {
  display: none;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }
}

div {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

.item {
  width: calc(100% - 450px);
}

.price,
.qty,
.total {
  flex: 0 0 125px;
  max-width: 125px;
}

.delete {
  flex: 0 0 75px;
  max-width: 75px;
}

</style>
