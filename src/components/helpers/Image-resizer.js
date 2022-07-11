import {
  HALF_ZOOM,
  CROP_SIZE,
  ORIGIN_X,
  ORIGIN_Y,
} from "../../constants/imageResizerConstants";

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
  const safeArea = CROP_SIZE * ((maxSize / CROP_SIZE) * Math.sqrt(CROP_SIZE));

  canvas.width = safeArea;
  canvas.height = safeArea;

  ctx.translate(safeArea / CROP_SIZE, safeArea / CROP_SIZE);
  ctx.translate(-safeArea / CROP_SIZE, -safeArea / CROP_SIZE);

  ctx.drawImage(
    image,
    safeArea / CROP_SIZE - image.width * HALF_ZOOM,
    safeArea / CROP_SIZE - image.height * HALF_ZOOM,
  );
  const data = ctx.getImageData(ORIGIN_X, ORIGIN_Y, safeArea, safeArea);

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.putImageData(
    data,
    Math.round(
      ORIGIN_X - safeArea / CROP_SIZE + image.width * HALF_ZOOM - pixelCrop.x,
    ),
    Math.round(
      ORIGIN_Y - safeArea / CROP_SIZE + image.height * HALF_ZOOM - pixelCrop.y,
    ),
  );

  return canvas.toDataURL("image/jpeg");
};

export const cropImage = async (image, croppedArea, handleOnCrop, onChange) => {
  const croppedImage = await getCroppedImg(image.preview, croppedArea);
  handleOnCrop([croppedImage], onChange);
};
