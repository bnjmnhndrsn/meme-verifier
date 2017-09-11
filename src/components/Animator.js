export default class Animator {
    constructor({items, image, ctx}){
        this.ctx = ctx;
        this.image = image;
        
        this.queuePromise = Promise.all(items.map(item => {
            return item.getAnimation(Object.assign({
                duration: item.end - item.start,
                image,
            }, item.options));
        })).then(animations => {
            this.queue = animations.map((animation, i) => {
                return {animation, start: items[i].start, end: items[i].end};
            });
        });
    }
    
    start(){
        this.queuePromise.then((queue) => {
            this._startTime = +(new Date());
            this.getAnimation();
        });
    }
    
    stop(){
        this._isStopped = true;
    }
    
    getAnimation(){
        if (this._isStopped) { 
            return;
        }
        
        const currentAnimations = this.findCurrentAnimations();
        if (currentAnimations.length) {
            this.ctx.drawImage(this.image, 0, 0, this.ctx.canvas.clientWidth, this.ctx.canvas.clientHeight);
            const time = +(new Date()) - this._startTime;
            currentAnimations.forEach((item) => {
                item.animation.animate(this.ctx, (time - item.start) / (item.end - item.start));
            });
            requestAnimationFrame(() => this.getAnimation());
        } else {
            this.stop();
        }
        
    }
    
    findCurrentAnimations(){
        const time = +(new Date()) - this._startTime;
        return this.queue.filter(item => {
            return item.start <= time && item.end >= time;
        });
    }
}
