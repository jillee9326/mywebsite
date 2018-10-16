function changeImage() {
    element = document.getElementById('myimage')
    if (element.src.match("bulbon")) {
        element.src = "/statics/images/course/pic_bulboff.gif";
    }
    else {
        element.src = "/statics/images/course/pic_bulbon.gif";
    }
}
function myFunction() {
    document.write(Date());
}

var fgImage = new SimpleImage(".png");
var bgImage = new SimpleImage(".png");
var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());

for (var.pixel of fgImage.value()) {
    if (pixel.getGreen() >= 200) {
        var x = pixel.getX();
        var y = pixel.getY();
        var bgPixel = bgImage.getPixel(x, y);
        output.setPixel(x, y, bgPixel);
    }
    else {
        output.set Pixel(pixel.getX(), pixel.getY(), pixel);
    }

}