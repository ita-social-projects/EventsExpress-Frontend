import EventsExpressService from "./EventsExpressService";

const baseService = new EventsExpressService();

export default class PhotoService {
  getPreviewEventPhoto = id =>
    baseService.getPhoto(`photo/GetPreviewEventPhoto?id=${id}`);

  getFullEventPhoto = id =>
    baseService.getPhoto(`photo/GetFullEventPhoto?id=${id}`);

  getUserPhoto = id => baseService.getPhoto(`photo/GetUserPhoto?id=${id}`);

  setEventTempPhoto = async (id, data) => {
    const photo = new FormData();
    photo.append(`Photo`, data);
    return baseService.setResourceWithData(
      `event/SetEventTempPhoto/${id}`,
      photo,
    );
  };
}
