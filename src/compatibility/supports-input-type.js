export default function compatibilitySupportsInputType(desiredType) {
  const input = document.createElement('input');

  try {
    input.type = desiredType;
  }

  catch(e) {
    return false;
  }

	var supported = false;
	if (input.type === desiredType) {
		supported = true;
	}

	input.value = 'Hello world';
	var helloWorldAccepted = (input.value === 'Hello world');

  switch (desiredType) {
		case "email":
		case "url":
			if (!input.validationMessage) {
				supported = false;
			}
			break;
		case "color":
		case "date":
		case "datetime":
		case "month":
		case "number":
		case "time":
		case "week":
			if (helloWorldAccepted) {
				supported = false;
			}
			break;
	}

	input.value = '';
	return supported;
}
