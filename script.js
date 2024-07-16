function volume_sphere() {
    // Retrieve input value from the form
    const radiusInput = document.getElementById('radiusInput').value;

    // Parse the input value to a floating point number
    const radius = parseFloat(radiusInput);

    // Check if the input is a valid number and non-negative
    if (isNaN(radius) || radius < 0) {
        // Display 'NaN' in the output field for invalid input
        document.getElementById('volumeOutput').value = 'NaN';
    } else {
        // Calculate the volume of the sphere
        const volume = (4/3) * Math.PI * Math.pow(radius, 3);

        // Round the volume to four decimal places
        const roundedVolume = volume.toFixed(4);

        // Display the calculated volume in the output field
        document.getElementById('volumeOutput').value = roundedVolume;
    }
}
