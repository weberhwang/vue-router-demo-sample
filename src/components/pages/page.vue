<template>
  <div class="hello">
    <!-- 利用router-link切換card裡面的內容 -->
    <router-link to="/page/">卡片 1</router-link>
    <router-link to="/page/child2">卡片 2</router-link>
    <router-link to="/page/child3">卡片 3</router-link>
    <!-- 由bootstrap4取來的html元件「Card」 -->
    <div class="card" style="width: 18rem;">
      <!-- 
        下面整段改透過嵌入的方式處理，因為要做出透過路由去切換card內容資訊的功能
        改用router-view的方式嵌入   
      <img class="card-img-top" src="" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      -->
      <router-view></router-view>
    </div>    
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
};
</script>
