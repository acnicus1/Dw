

var canvas = document.getElementById('tutorial');

if (canvas.getContext){
    /**@type {CanvasRenderingContext2D} */
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = "#30b2cff7";
    ctx.fillRect(0, 0, 100, 100);
} 