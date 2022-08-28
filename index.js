// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
  ]
  function superbowlWin(record) {
	const object = record.find(function (object) {
		return object.result === "W";
	});
	if (typeof object === "undefined") {
		return undefined;
	} else {
		return object.year;
	}
}
