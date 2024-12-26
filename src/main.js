import './style.css'
import './counter.js'// 雪花背景特效
import './router'; // 假设你的路由配置文件是router.js

export default function Index() {
    document.querySelector('#app').innerHTML = `
        <div class="zhuy_kuangjia">
            <a class="zhuy" id="zhuy_tiaozhuan" href="/home">
                <div class="biaot" id="baiot">
                    WELCOME TO THE PLANET
                </div>
                <div class="biaot_xiaobiaot">
                    Hello are you still there? I miss you so much
                </div>
            </a>
        </div>  
    `
}

