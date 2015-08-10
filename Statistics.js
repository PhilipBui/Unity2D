#pragma strict
var player : Transform;
var mainCamera : Transform;
var minX : float;
var minY : float;
var maxX : float;
var maxY : float;
var lives : int = 3;
var score : int = 0;
function Start () {
	player = GameObject.FindWithTag("Player").transform;
	mainCamera = GameObject.FindWithTag("MainCamera").transform;
	DontDestroyOnLoad(transform.gameObject);
}

function FixedUpdate () {
	if (player.position.x < maxX && player.position.x > minX) {
		mainCamera.position.x = player.position.x;
	}
	if (player.position.y < maxY && player.position.y > minY) {
		mainCamera.position.y = player.position.y;
	}
}