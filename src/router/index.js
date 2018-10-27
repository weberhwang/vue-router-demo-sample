//載入官方元件
import Vue from 'vue';
import VueRouter from 'vue-router';

//載入自定的分頁元件
import Home from '@/components/HelloWorld';
import Page from '@/components/pages/page';
import child from '@/components/pages/child';
import child2 from '@/components/pages/child2';
import child3 from '@/components/pages/child3';

//啟用Vur.Router
Vue.use(VueRouter);

//下面這段是為了匯出給entry(即main.js)使用所必須寫的，它是一個匯出的動作
export default new VueRouter({
    //因為它是陣列，可以新增很多條路徑
    routes:[
        {
            name:'首頁', //元件呈現的名稱
            path:'/index', //對應的虛擬路徑
            component: Home, //對應元件
        },
        {
            name:'分頁', //元件呈現的名稱
            path:'/page', //對應的虛擬路徑
            component: Page, //對應元件
            //加入子元件內容，其內容的寫法與外層元件寫法完全相同
            children:[
                {
                    name:'卡片 1',
                    //第1個元件的路徑正常是要寫child，
                    //但即使不寫也沒關係，因為「不寫」也是一種路行
                    //故你在路徑打..../page/child，反而會讀不到
                    path:'', 
                    component: child,
                },
                {
                    name:'卡片 2',
                    path:'child2',
                    component: child2, 
                },
                {
                    name:'卡片 3',
                    path:'child3',
                    component: child3,
                },                
            ]
        },
    ]
});