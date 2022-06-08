import EventsExpressService from "./EventsExpressService";

const baseService = new EventsExpressService();
export default class PhotoService {
  getPreviewEventPhoto = id =>
    baseService.getPhoto(`EventPhoto/GetPreviewEventPhoto/${id}`);

  getFullEventPhoto = id =>
    baseService.getPhoto(`Photo/GetFullEventPhoto?id=${id}`);

  // getFullEventPhoto = () => new Promise(resolve => resolve(null));

  getUserPhoto = id => baseService.getPhoto(`UserPhoto/GetUserPhoto/${id}`);

  setEventTempPhoto = async (id, data) => {
    const photo = new FormData();
    photo.append(`Photo`, data);
    return baseService.setResourceWithData(
      `event/SetEventTempPhoto/${id}`,
      photo,
    );
  };
}
