<template>
  <div id="app">
    <!-- 將bootstrap4的導覽列元件貼進來(裡面的code有移除一些不想要的button及多餘的li、form) -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <!-- 
              to是router在切換分頁的方法
              除了to之外，也可以採用name的方式來切換，如下面兩個例子各用了一種方法
              { name:'首頁'} 必須跟 index.js 中 routes陣列裡路由的name一致
            -->
            <router-link class="nav-link" :to="{ name:'首頁'}">Home </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/page">Page </router-link>
          </li>          
        </ul>
      </div>
    </nav>
    <img src="./assets/logo.png">
    <router-view></router-view> 
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>
