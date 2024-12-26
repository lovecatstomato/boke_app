import page from 'page';
import Index from './main.js'
import Home from './home/home.js';
import About from './about/about.js';

// 定义路由及对应的视图函数
page('/', Index);
page('/home', Home);
page('/about', About);

// 启动路由监听
page.start();