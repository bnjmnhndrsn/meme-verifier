import 'tracking/build/tracking';
import 'tracking/build/data/face-min';


const tracking = window.tracking;

class FaceTracker {
    constructor(options){
        this.data = options.data;
        this.scale = options.scale;
    }
    
    animate(ctx, pctg) {
        this.data.forEach((rect) => {
            console.log(this.scale);
            ctx.rect(rect.x * this.scale,rect.y * this.scale,rect.width*this.scale,rect.height*this.scale);
            ctx.stroke();
        });
    }
}

export default function (options) {
    return new Promise((resolve) => {
        const tracker = new tracking.ObjectTracker('face');
        tracking.track(options.image, tracker);
        tracker.on('track', function(event) {
            resolve(new FaceTracker({scale: options.scale, data: event.data}));
        });
    });
}
