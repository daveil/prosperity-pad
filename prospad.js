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
	callbackScope : this,
    engineInstanceReadyCallback : this.onEngineInstanceReady,
	mapDataPath : "assets/map.xml", // the path to the xml file that defines map data, required
	assetsToLoad : ["assets/sprites/btn_zoomIn.png","assets/sprites/btn_zoomOut.png","assets/sprites/floor_N.png","assets/sprites/wallCorner_N.png","assets/sprites/wallStraight_W.png","assets/sprites/wallStraight_E.png"] // array of paths to the assets that are desired to be loaded by traviso, no need to use if assets are already loaded to PIXI cache, default null,

};

var engine = TRAVISO.getEngineInstance(instanceConfig);
stage.addChild(engine);
function onEngineInstanceReady(){
	// create buttons
	var btnZoomIn = new PIXI.Sprite.fromFrame("assets/sprites/btn_zoomIn.png");
	stage.addChild(btnZoomIn);
	var btnZoomOut = new PIXI.Sprite.fromFrame("assets/sprites/btn_zoomOut.png");
	stage.addChild(btnZoomOut);

	 // set positions
	btnZoomIn.position.y = 8;
	btnZoomOut.position.y = 8;
	btnZoomIn.position.x = 8;
	
	btnZoomOut.position.x = btnZoomIn.position.x + btnZoomIn.width + 8;

	btnZoomIn.interactive = btnZoomIn.buttonMode = true;
	btnZoomOut.interactive = btnZoomOut.buttonMode = true;
	// add click callbacks
	btnZoomIn.click = btnZoomIn.tap = function(data)
	{
		engine.zoomIn();
	};

	btnZoomOut.click = btnZoomOut.tap = function(data)
	{
		engine.zoomOut();
	};
}