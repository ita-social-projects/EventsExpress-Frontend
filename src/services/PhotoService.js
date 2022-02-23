import EventsExpressService from "./EventsExpressService";
// import previewPhotoEvents from "../mockup-db/previewPhotoEvents";

const baseService = new EventsExpressService();

export default class PhotoService {
  // TODO: MOCKUP
  // getPreviewEventPhoto = id =>
  //   baseService.getPhoto(`Photo/GetPreviewEventPhoto?id=${id}`);

  getPreviewEventPhoto = () => new Promise(resolve => resolve(null));
  // new Promise(
  //   resolve =>
  //     require`${resolve(
  //       previewPhotoEvents.filter(el => el.id === id)[0].photo,
  //     )}`,
  // );

  // getFullEventPhoto = id =>
  //   baseService.getPhoto(`Photo/GetFullEventPhoto?id=${id}`);

  getFullEventPhoto = () => new Promise(resolve => resolve(null));

  getUserPhoto = id => baseService.getPhoto(`Photo/GetUserPhoto?id=${id}`);

  setEventTempPhoto = async (id, data) => {
    const photo = new FormData();
    photo.append(`Photo`, data);
    return baseService.setResourceWithData(
      `event/SetEventTempPhoto/${id}`,
      photo,
    );
  };
}
