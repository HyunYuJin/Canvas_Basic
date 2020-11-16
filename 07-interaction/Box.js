// Box class
class Box { // 객체 단위
    constructor(index, x, y, speed) { // 생성자
        this.index = index;
        this.x = x; // class로 생성된 인스턴스 객체의 속성이 된다.
        this.y = y;
        this.speed = speed;
        this.width = 100; // box마다 사이즈가 다를 수 있다.
        this.height = 100; // box마다 사이즈가 다를 수 있다.

        // 생성하는 순간 draw()까지 하도록 생성과 동시에 그려주기
        this.draw();
    }

    draw() { // 메소드 추가
        context.fillStyle = 'rgba(0, 0, 0, 0.5)';
        context.fillRect(this.x, this.y, 100, 100);
        context.fillStyle = '#fff';
        context.fillText(this.index, this.x + 30, this.y + 30); // Box 클릭할 때마다 고유 식별자 보여주기
    }
}