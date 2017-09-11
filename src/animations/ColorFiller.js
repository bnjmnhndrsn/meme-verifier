class ColorFiller {
    constructor(options){
        this.fillStyle = options.fillStyle;
    }
    
    animate(ctx, pctg) {
        var sizeWidth = ctx.canvas.clientWidth;
        var sizeHeight = ctx.canvas.clientHeight;
        ctx.fillStyle = this.fillStyle;
        ctx.globalAlpha = pctg;
        ctx.fillRect(0,0,sizeWidth,sizeHeight);
        ctx.globalAlpha = 1.0;
    }
}

export default function (options) {
    return Promise.resolve(new ColorFiller(options));
}
