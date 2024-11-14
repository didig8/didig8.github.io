





$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platform
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(00, 382, 150, 120); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(132, 655, 100, 160); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(204, 527, 200, 89); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(568, 503, 129, 140); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(683, 532, 62, 80); 
    createPlatform(732, 271, 180, 90);
    createPlatform(854, 736, 94, 23)
    createPlatform(932, 527, 173, 60)
    createPlatform(673, 672, 823, 43)
    createPlatform(5012, 693, 183, 102)
    createPlatform(823, 632, 82, 30)
    createPlatform(932, 501, 100, 77)
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("max", 500, 300, 20, 0.5); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("grace", 500, 300); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
    createCollectable("grace", 720, 420)

    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("left", 283, 902); // cannon on top wall, 600px down, shooting once per second
    createCannon("right", 600, 1200); // cannon on right wall, 600px down, shooting twice per second
    createCannon("bottom", 832, 802) // cannon on bottom wall, 600px down, shooting once per second
    ; // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
