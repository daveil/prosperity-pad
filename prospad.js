////// Global on-frame renderer function
function update() {
	renderer.render(stage);
	requestAnimationFrame(update); 
}
	
////// Here, we initialize the pixi stage
// create an new instance of a pixi container
stage = new PIXI.Container();
// create a renderer instance
renderer = PIXI.autoDetectRenderer(800, 600, { backgroundColor : 0x6BACDE });	
// add the renderer view element to the DOM
document.body.appendChild(renderer.view);
	
update();
	
////// Here, we create our traviso instance and add on top of pixi
// engine-instance configuration object
var instanceConfig ={
	tileHeight : 150,
	initialZoomLevel : -1,
	initialPositionFrame:{x:300,y:350},
	mapDataPath : "assets/map.xml", // the path to the xml file that defines map data, required
	assetsToLoad : ["assets/sprites/floor_N.png","assets/sprites/wallCorner_N.png","assets/sprites/wallStraight_W.png","assets/sprites/wallStraight_E.png"] // array of paths to the assets that are desired to be loaded by traviso, no need to use if assets are already loaded to PIXI cache, default null
};

var engine = TRAVISO.getEngineInstance(instanceConfig);
stage.addChild(engine);
