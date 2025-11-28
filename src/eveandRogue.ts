const endPoint = `http://localhost:8787/getAirtableItem`;
const prodEndpoint = `https://eveandrogue.ahmed-fb7.workers.dev/getAirtableItem`;

//helper functions
// Define the type for the image data objects
interface ImageData {
  imageUrl: string;
  imageName: string;
}

/**
 * Creates an image gallery by looping through an array of image data and appending to a parent container.
 *
 * @param imageData - An array of objects containing image URLs and file names.
 * @param parentElementId - The ID of the parent element where the gallery should be appended.
 */
function createImageGallery(imageData: ImageData[], parentElementId: string): void {
  // Find the parent element
  const parentElement = document.getElementById(parentElementId);

  if (!parentElement) {
    console.error(`Parent element with ID "${parentElementId}" not found.`);
    return;
  }

  // Loop through the array of image objects
  imageData.forEach((data: ImageData) => {
    const { imageUrl, imageName } = data;

    // Create a div element
    const div: HTMLDivElement = document.createElement('div');
    div.className = 'image-container'; // Optional: Add a class for styling

    // Create an img element and set its src attribute
    const img: HTMLImageElement = document.createElement('img');
    img.src = imageUrl;
    img.alt = imageName; // Use the file name as alt text for accessibility

    // Create a span element and set its content to the file name
    const span: HTMLSpanElement = document.createElement('span');
    span.textContent = imageName;

    // Append the img and span elements to the div
    div.appendChild(img);
    div.appendChild(span);

    // Append the div to the parent element
    //delete any item in the parent elements
    parentElement.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  //   const image_wrapper = document.getElementById('imagesWrap') as HTMLElement;
  //body Att
  const bodyAtt = document.querySelector('body') as HTMLElement;
  const property_id = bodyAtt.getAttribute('property-id');

  //api call to get the airtable data
  const get_full_propertydetails = async () => {
    try {
      const res = await fetch(`${prodEndpoint}?id=${property_id}`);
      const data = await res.json();
      const data_Arr = data[0].fields;

      //get all the images
      const allImageArr = data_Arr['Other images'];
      console.log(allImageArr);
      const imageFormat = allImageArr.map((el) => {
        return { imageUrl: el.url, imageName: el.filename };
      });

      console.log(imageFormat);

      createImageGallery(imageFormat, 'imagesWrap');
    } catch (error) {
      console.log(error);
    }
  };

  get_full_propertydetails();
});
