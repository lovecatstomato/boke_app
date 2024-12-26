import { mdduqv } from './indexcounter'

// AboutPage.js
export default function About() {
    document.querySelector('#app').innerHTML = `
        <div id="zhukuangjia" class="zhukuangjia_kuangjia">
            <a href="/home" class="tiao_zhuan">
                <div id="tuic" class="tuic_anniu">
                    返回主页
                </div>
            </a>
            <div id="youbian" class="youbian_yangshi">
            
            </div>
        </div>
        
    `
}

// 在 /about 页面的 JavaScript 代码中
document.addEventListener('DOMContentLoaded', (event) => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    mdduqv(userId)
});


