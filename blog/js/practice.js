// ES5에서부터 적용된 키워드로, 안전한 코딩을 위한 가이드라인
'use strict';

(function () {
    var elemCanvas,
        elemDuck,
        context,
        windowWidth = 0,
        windowHeight = 0,
        canvasWidth = 0,
        canvasHeight = 0,
        resizeHandler,
        render,
        drawCanvas,
        degValue = 0,
        duckWidth = 1440, // 미더덕 이미지 기본 크기
        duckHeight = 810, // 미더덕 이미지 기본 크기
        isRadian,
        init,
        elemBody = document.body,
        elemCanvas = document.getElementById('cover-canvas'),
        context = elemCanvas.getContext('2d');

    init = function () {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;

        resizeHandler();
        render();

        window.addEventListener('resize', function () {
            requestAnimationFrame(resizeHandler);
        });

        elemDuck = document.createElement('img');
        elemDuck.src = "./images/medeoduck01.jpg";
        elemDuck.addEventListener('load', function () {
            drawCanvas();
        });
    };

    resizeHandler = function () {
        // window의 resize가 일어날 때 실행되는 함수
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;

        // 고해상도 이미지 표현을 위한 window 사이즈의 2배
        elemCanvas.width = canvasWidth = windowWidth * 2;
        elemCanvas.height = canvasHeight = windowHeight * 2;
        // css로 px 절반으로 줄이기
        elemCanvas.style.width = windowWidth + 'px';
        elemCanvas.style.height = windowHeight + 'px';
    };

    render = function () {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
    };

    isRadian = function (deg) {
        return (deg * Math.PI) / 180;
    };

    drawCanvas = function () {
        // 미더덕 이미지를 canvas 사이즈만큼
        context.save();
        context.drawImage(elemDuck, 0, 0, canvasWidth, canvasHeight);
        context.restore();

        // 실제로 그림 그려주는 함수
        context.clearRect(0, 0, elemCanvas, windowHeight);
        context.save();

        context.beginPath();
        context.arc(400, windowHeight / 2, 180, 0, isRadian(degValue), false);
        context.fillStyle = 'skyblue';
        context.fill();

        context.beginPath();
        context.arc(canvasWidth - 300, 250, 120, 0, isRadian(degValue), false);
        context.fill();

        context.beginPath();
        context.arc(canvasWidth - 500, windowHeight, 150, 0, isRadian(degValue), false);
        context.fill();

        degValue += 3;
        context.restore();

        requestAnimationFrame(drawCanvas);
    };

    init();
})();