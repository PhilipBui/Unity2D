private var motor : CharacterMotor;
private var controller : CharacterController;
private var bouncing : boolean = false;
// Use this for initialization
function Awake () {
	motor = GetComponent(CharacterMotor);
	controller = GetComponent(CharacterController);
}

// Update is called once per frame
function Update () {
	var moveDirection;
	if (bouncing == true) {
		
	}
	// Get the input vector from keyboard or analog stick
	var directionVector = new Vector3(Input.GetAxis("Horizontal"), 0, 0);
	
	if (directionVector != Vector3.zero) {
		// Get the length of the directon vector and then normalize it
		// Dividing by the length is cheaper than normalizing when we already have the length anyway
		var directionLength = directionVector.magnitude;
		directionVector = directionVector / directionLength;
		
		// Make sure the length is no bigger than 1
		directionLength = Mathf.Min(1, directionLength);
		
		// Make the input vector more sensitive towards the extremes and less sensitive in the middle
		// This makes it easier to control slow speeds when using analog sticks
		directionLength = directionLength * directionLength;
		
		// Multiply the normalized direction vector by the modified length
		directionVector = directionVector * directionLength;
	}
	
	// Apply the direction to the CharacterMotor
	motor.inputMoveDirection = transform.rotation * directionVector;
	motor.inputJump = Input.GetButton("Jump");
}

function OnControllerColliderHit (hit : ControllerColliderHit) {
	if (hit.gameObject.tag == "Bounce") {
		bouncing = true;
	}
	else if (hit.gameObject.tag == "TunnelEvent" && controller.isGrounded && Input.GetKey("s")) {
		hit.gameObject.GetComponent(TunnelEvents).startEvent();
		hit.gameObject.tag = "Untagged";
	}
}
// Require a character controller to be attached to the same game object
@script RequireComponent (CharacterMotor)
@script AddComponentMenu ("Character/FPS Input Controller")
