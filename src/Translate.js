const Transform = ( element, yoff, value ) => {
    if(yoff<window.innerHeight*2) {
        document.querySelector(element).style.transform = `rotateX(-${yoff*value}deg) translate3d(-${yoff*value*2.5}px, ${yoff*value}px, 0)`;
    }
}

export default Transform;