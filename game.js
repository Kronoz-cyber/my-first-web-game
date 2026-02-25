// 等待网页内容完全加载后再执行代码
document.addEventListener('DOMContentLoaded', function() {

    // 1. 获取页面上的关键元素
    const displayImage = document.getElementById('display-image');
    const numberOverlay = document.getElementById('number-overlay');
    const switchButton = document.getElementById('switch-btn');

    // 2. 定义切换功能函数
    function switchImageAndNumber() {
        // 2.1 生成一个1到1000之间的随机数，作为图片ID，确保每次请求的图片都不同
        const randomImageSeed = Math.floor(Math.random() * 1000) + 1;
        // 更新图片的src属性，指向新的随机图片URL
        // 我们使用Picsum这个免费服务提供128x128的随机图片
        displayImage.src = `https://picsum.photos/128/128?random=${randomImageSeed}`;

        // 2.2 生成一个1到100之间的随机整数，显示在图片上
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        numberOverlay.textContent = randomNumber;

        // 2.3 (可选) 给按钮一个简单的点击反馈
        switchButton.textContent = '切换成功！';
        setTimeout(() => {
            switchButton.textContent = '切换图片并生成随机数';
        }, 300);
    }

    // 3. 为按钮添加“点击”事件监听器
    switchButton.addEventListener('click', switchImageAndNumber);

    // (可选) 控制台输出，用于调试，确认脚本加载成功
    console.log('游戏脚本加载完毕！点击按钮开始吧。');
});