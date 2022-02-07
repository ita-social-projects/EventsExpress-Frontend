import EventsExpressService from "./EventsExpressService";

const baseService = new EventsExpressService();

export default class PhotoService {
  getPreviewEventPhoto = id =>
    baseService.getPhoto(`Photo/GetPreviewEventPhoto?id=${id}`);

  getFullEventPhoto = id =>
    baseService.getPhoto(`Photo/GetFullEventPhoto?id=${id}`);

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
