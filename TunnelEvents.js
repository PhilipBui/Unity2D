#pragma strict

var shootEnemy : boolean = false;
var enemy: GameObject;
var flyTurret : boolean = false;

function startEvent() {
	if (shootEnemy == true) {
		var rot = transform.rotation;
		rot.x = 0;
		rot.y = 180;
		rot.z = 90;
		Debug.Log(rot.x);
		Debug.Log(rot.z);
		Instantiate(enemy, transform.position, rot);
		Destroy(GetComponent(TunnelEvents));
	}
}