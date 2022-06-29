import { HALF_ZOOM, TWO } from "../../constants/imageResizerConstants";

export const onCropChange = (crop, setCrop) => setCrop(crop);

export const onZoomChange = (zoom, setZoom) => setZoom(zoom);

export const onCropComplete = (
  croppedArea,
  croppedAreaPixels,
  setCroppedArea,
) => setCroppedArea(croppedAreaPixels);

const createImage = url =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", error => reject(error));
    image.src = url;
  });

const getCroppedImg = async (imageSrc, pixelCrop) => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const maxSize = Math.max(image.width, image.height);
  const safeArea = TWO * ((maxSize / TWO) * Math.sqrt(TWO));

  canvas.width = safeArea;
  canvas.height = safeArea;

  ctx.translate(safeArea / TWO, safeArea / TWO);
  ctx.translate(-safeArea / TWO, -safeArea / TWO);

  ctx.drawImage(
    image,
    safeArea / TWO - image.width * HALF_ZOOM,
    safeArea / TWO - image.height * HALF_ZOOM,
  );
  const data = ctx.getImageData(0, 0, safeArea, safeArea);

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.putImageData(
    data,
    Math.round(0 - safeArea / TWO + image.width * HALF_ZOOM - pixelCrop.x),
    Math.round(0 - safeArea / TWO + image.height * HALF_ZOOM - pixelCrop.y),
  );

  return canvas.toDataURL("image/jpeg");
};

export const cropImage = async (image, croppedArea, handleOnCrop, onChange) => {
  const croppedImage = await getCroppedImg(image.preview, croppedArea);
  handleOnCrop([croppedImage], onChange);
};
