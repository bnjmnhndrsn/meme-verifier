
class Redify {
    animate(ctx, pctg) {
        var sizeWidth = ctx.canvas.clientWidth;
        var sizeHeight = ctx.canvas.clientHeight;
        var imageData = ctx.getImageData(0, 0, sizeWidth, sizeHeight);
        var data = imageData.data;
        
        for (var i = 0; i < data.length; i += 4) {
          var brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
          // red
          data[i] = brightness;
          // green
          data[i + 1] = 0;
          // blue
          data[i + 2] = 0;
        }
        ctx.putImageData(imageData, 0, 0);
    }
}

export default function (options) {
    return Promise.resolve(new Redify());
}
