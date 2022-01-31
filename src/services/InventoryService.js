import EventsExpressService from "./EventsExpressService";

const baseService = new EventsExpressService();

export default class InventoryService {
  getInventoriesByEventId = eventId =>
    baseService.getResource(`inventory/${eventId}/GetInventar`);

  setItem = (item, eventId) =>
    baseService.setResource(`inventory/${eventId}/EditInventar`, {
      id: item.id,
      itemName: item.itemName,
      needQuantity: Number(item.needQuantity),
      unitOfMeasuring: item.unitOfMeasuring,
    });

  setItemToInventory = (item, eventId) =>
    baseService.setResource(`inventory/${eventId}/AddInventar`, {
      itemName: item.itemName,
      needQuantity: Number(item.needQuantity),
      unitOfMeasuring: item.unitOfMeasuring,
    });

  setItemDelete = (itemId, eventId) =>
    baseService.setResource(
      `inventory/${eventId}/DeleteInventar/?itemId=${itemId}`,
    );

  getUnitsOfMeasuring = () => baseService.getResource("unitofmeasuring/all");

  setWantToTake = data =>
    baseService.setResource(`UserEventInventory/MarkItemAsTakenByUser`, data);

  getUsersInventories = eventId =>
    baseService.getResource(
      `UserEventInventory/GetAllMarkItemsByEventId/?eventId=${eventId}`,
    );

  setUsersInventoryDelete = async data => {
    const dataCopy = data;
    dataCopy.quantity = 1;
    await baseService.setResource(`UserEventInventory/Delete`, data);
  };

  setUsersInventory = data =>
    baseService.setResource(`UserEventInventory/Edit`, data);
}
