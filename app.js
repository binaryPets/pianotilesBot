// Get pixel color under the mouse.
var robot = require("robotjs");

function getPointerPixel(callback) {
    // Get mouse position.
    var mouse = robot.getMousePos();
    // Get pixel color in hex format.
    var hex = robot.getPixelColor(mouse.x, mouse.y);
    console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);
    callback(hex);
}
setInterval(function() {
    robot.moveMouse(540, 452);
    getPointerPixel(function(hex) {
        if (hex == "111111") {
            robot.mouseClick();
        } else if (hex == "fb3e38") {
            process.exit();
        }
        robot.moveMouse(640, 452);
        getPointerPixel(function(hex) {
            if (hex == "111111") {
                robot.mouseClick();
            } else if (hex == "fb3e38") {
                process.exit();
            }
            robot.moveMouse(840, 452);
            getPointerPixel(function(hex) {
                if (hex == "111111") {
                    robot.mouseClick();
                } else if (hex == "fb3e38") {
                    process.exit();
                }
                robot.moveMouse(740, 452);
                getPointerPixel(function(hex) {
                    if (hex == "111111") {
                        robot.mouseClick();
                    } else if (hex == "fb3e38") {
                        process.exit();
                    }

                });
            });
        });
    });







}, 10) 