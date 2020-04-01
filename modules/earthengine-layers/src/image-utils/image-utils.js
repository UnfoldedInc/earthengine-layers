// TODO
/* eslint-disable */
/* global fetch */
// import Martini from '@mapbox/martini';

// const martini = new Martini(257);

export function getGrayScaleData(imageData) {
  const width = Math.sqrt(imageData.length / 4);
  const grayScale = new Uint8Array((width + 1) * (width + 1));
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < width; j++) {
      grayScale[i * width + j] =
        (imageData[(i * width + j) * 4 + 0],
        imageData[(i * width + j) * 4 + 1],
        imageData[(i * width + j) * 4 + 2]) / 3;
    }
  }
  return grayScale;
}

export function createMesh([lowerX, lowerY, upperX, upperY], imageData, width = 256, height = 256) {
  const stepX = (upperX - lowerX) / width;
  const stepY = (lowerY - upperY) / height;

  const output = new Float32Array(width * height * 3);

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      output[i * width + j + 0] = [
        lowerX + stepX * i,
        upperY + stepY * j,

        [
          imageData[(j * width + i) * 4], // r
          imageData[(j * width + i) * 4 + 1], // g
          imageData[(j * width + i) * 4 + 2], // b
          255 // imageData[(j * width + i) * 4 + 3] // a
        ]
      ];
    }
  }

  return output;
}

export function createMeshGrid(
  [lowerX, lowerY, upperX, upperY],
  imageData,
  width = 256,
  height = 256
) {
  const stepX = (upperX - lowerX) / width;
  const stepY = (lowerY - upperY) / height;
  const output = [];

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      output[i * width + j] = [
        lowerX + stepX * i,
        upperY + stepY * j,
        [
          imageData[(j * width + i) * 4], // r
          imageData[(j * width + i) * 4 + 1], // g
          imageData[(j * width + i) * 4 + 2], // b
          255 // imageData[(j * width + i) * 4 + 3] // a
        ]
      ];
    }
  }

  return output;
}

export async function loadImageData(imageUrl, options = {}) {
  const imageBitmap = await loadImageBitmap(imageUrl, options);
  return getImageData(imageBitmap, true);
}

export async function loadImage(imageUrl) {
  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();
  const base64Flag = 'data:image/jpeg;base64,';
  const imageStr = arrayBufferToBase64(buffer);
  const image = new Image();
  return await new Promise(resolve => {
    image.onload = () => resolve(image);
    image.src = base64Flag + imageStr;
  });
}

export async function loadImageBitmap(imageUrl, options = {}) {
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  // const blob = new Blob([new Uint8Array(arrayBuffer)]); // MIME type not needed...
  const imagebitmapOptions = options && options.imagebitmap;
  return imagebitmapOptions ? createImageBitmap(blob) : createImageBitmap(blob, imagebitmapOptions);
}

export function getImageData(image, flipY = false) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = image.width;
  canvas.height = image.height;

  if (flipY) {
    const scaleY = flipY ? -1 : 1; // Set verical scale to -1 if flip vertical
    const posY = flipY ? image.height * -1 : 0; // Set y position to -100% if flip vertical
    ctx.save(); // Save the current state
    ctx.scale(1, scaleY); // Set scale to flip the image
    ctx.drawImage(image, 0, posY); // draw the image
    ctx.restore(); // Restore the last saved state
  } else {
    ctx.drawImage(image, 0, 0);
  }

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  return imageData.data;
}

/*
function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array( buffer );
  const len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
  }
  return window.btoa(binary);
}
*/
