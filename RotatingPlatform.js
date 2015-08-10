#pragma strict
var children : Transform[];
var rotationSpeed : float = 10f;
function Start () {
	children = new Transform[4];
	var counter : int = 0;
	for (var objectChild in transform) {
		var child : Transform = objectChild as Transform;
		if (child.gameObject.tag == "Platform") {
			children[counter] = child.transform;
			counter++;
		}
	}
}

function Update () {
	transform.Rotate(Vector3.right * rotationSpeed * Time.deltaTime);
	var rot = transform.eulerAngles;
	rot.x = -transform.rotation.x;
	rot.y = 270;
	rot.z = 0;
	for (var child : Transform in children) {
		child.localEulerAngles = rot;
	}
}
function rotateRight() {
	transform.localEulerAngles.x += 5; 
	for (var child : Transform in children) {
		child.localEulerAngles.x = -transform.localEulerAngles.x;
	}
}