#pragma strict


function Update () {
	var animatedTexture = gameObject.GetComponent(AnimatedTexture);
	if (Input.GetButton("Jump")) {
		animatedTexture.rowNumber = 2;
		animatedTexture.totalCells = 1;
		animatedTexture.fps = 1;
	}
	else if (Input.GetKey("a") || Input.GetKey("d")) {
		animatedTexture.rowNumber = 1;
		animatedTexture.totalCells = 6;
		animatedTexture.fps = 4;
	}
	else {
		animatedTexture.rowNumber = 0;
		animatedTexture.totalCells = 1;
		animatedTexture.fps = 1;
	}
}