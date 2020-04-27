// TODO
/* eslint-disable */
/* global fetch */

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
