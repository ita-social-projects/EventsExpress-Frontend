import PhotoService from "../services/PhotoService";

const photoService = new PhotoService();

const asyncValidatePhoto = async values => {
  if (values.photo === undefined) {
    throw new Error({ photo: "Please, upload the photo." });
  }

  const response = await photoService.setEventTempPhoto(
    values.id,
    values.photo.file,
  );
  if (!response.ok) {
    const { errors } = await response.json();
    //! TODO : DON'T USE UNDERSCORE
    // eslint-disable-next-line no-underscore-dangle
    throw new Error({ photo: errors.Photo, _error: errors._error });
  }
};

export default asyncValidatePhoto;
