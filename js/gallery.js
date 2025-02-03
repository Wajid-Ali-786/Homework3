// Function to update the large display image when hovering over a preview image
function upDate(previewPic) {
    // Select the div with the id "image"
    let imageDiv = document.getElementById("image");

    // Update the background image of the div to match the hovered image
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    // Update the text inside the div to match the hovered image's alt text
    imageDiv.innerHTML = previewPic.alt;
}

// Function to reset the display image and text when the mouse leaves
function unDo() {
    let imageDiv = document.getElementById("image");

    // Reset the background image
    imageDiv.style.backgroundImage = "url('')";

    // Reset the text
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
