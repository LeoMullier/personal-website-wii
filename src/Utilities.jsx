// Return the first valid path of the available paths according to the specified seperators
export function IsOneValidPathOf(Path, AvailablePaths, StartSeperator, StartSeperatorOccurence, EndSeperator, EndSeperatorOccurence) {
	// Initialize variables
	let Result = "";
	let StartIndex = 0;
	let EndIndex = 0;

	// Get the section of path with the correct start seperator
	for (let i = 1; i <= StartSeperatorOccurence; i++) {
		StartIndex = Path.indexOf(StartSeperator) + 1;
		Path = Path.substring(StartIndex !== -1 ? StartIndex : Path.length, Path.length);
	}

	// Get the section of path with the correct end seperator
	let TempPath = Path;
	for (let i = 1; i <= EndSeperatorOccurence; i++) {
		EndIndex = TempPath.indexOf(EndSeperator);
		TempPath = TempPath.substring(0, EndIndex !== -1 ? EndIndex : TempPath.length);
	}
	Path = Path.substring(0, EndIndex !== -1 ? EndIndex : Path.length);

	// Check if the path is part of the available paths
	if (Path == "" || Path == "/") {
		Result = "";
	} else {
		for (let AvailablePath of AvailablePaths) {
			if (Path == AvailablePath) {
				Result = AvailablePath;
			}
		}
	}

	// Return the eventual matching path
	return Result;
}
