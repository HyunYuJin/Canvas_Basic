class Panel {
    constructor() {
        this.scale = 0;
        this.angle = 0;
    }

    draw() {
        context.fillStyle = 'rgba(255, 0, 0, 0.8)';
        // 변환 초기화 - 변환 자체는 행렬이라 초기화 해주기 (위치 이동, 크기 변환, 회전 등등)
        context.resetTransform();
        context.translate(oX, oY);
        context.scale(this.scale, this.scale);
        context.rotate(canvasUtil.toRadian(this.angle)); // 0 ~ 720도 
        context.translate(-oX, -oY);

        context.fillRect(oX - 150, oY - 150, 300, 300);

        context.setTransform(1, 0, 0, 1, 0, 0);
    }

    showContent() {
        context.fillStyle = '#fff';
        context.fillText(selectedBox.index, oX, oY);
    }
}