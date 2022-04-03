<template>
  <header class='container'>
    <div class='cart-header'>
      <nuxt-link to='/'>
        <img src='https://fakeimg.pl/240x100/0073d2/fff/?text=Logo' alt='logo' width='240' height='100'>
      </nuxt-link>
    </div>
    <nav>
      <nuxt-link to="/">Catalog</nuxt-link>
    </nav>
  </header>
</template>

<style lang='scss' scoped>
.cart-header {
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  img {
    padding: 10px 0;
    width: 180px;
    height: 80px;
    object-fit: cover;

    @media (min-width: 768px) {
      width: 240px;
      height: 100px;
    }
  }
}

nav {
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 20px;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    color: #0073d2;
    padding-left: 20px;
    background-image: url("../assets/img/vector.svg");
    background-repeat: no-repeat;
    background-position: left center;
  }
}
</style>
