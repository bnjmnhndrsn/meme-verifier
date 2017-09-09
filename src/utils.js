export function loadImage(fileUrl){
    return new Promise(resolve => {
        const image = new Image();
        image.onload = function(){
            resolve(image);
        }
        image.src = fileUrl;
    });
}
