#pragma strict

var mainCamera : Transform;
var moveSpeed : float = 30;
function Start () {
	mainCamera = GameObject.FindWithTag("MainCamera").transform;
}

function Update () {
	transform.Translate (moveSpeed * Time.deltaTime, 0, 0);
	if (transform.position.x <= mainCamera.position.x - 60 || transform.position.y >= mainCamera.position.y + 40) {
		Destroy (gameObject);
	}
}