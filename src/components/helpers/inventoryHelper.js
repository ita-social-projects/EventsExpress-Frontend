import { DEFAULT_ZERO_VALUE } from "../../constants/numberConstants";

export const isUserEvent = (organizers, user) =>
  organizers.find(x => x.id === user.id) !== undefined;

export const getUpdatedInventories = (inventories, usersInventories, user) =>
  inventories.items
    ? inventories.items.map(item => ({
        ...item,
        isTaken:
          usersInventories.data.filter(
            dataItem =>
              user.id === dataItem.userId && item.id === dataItem.inventoryId,
          ).length > 0,
      }))
    : [];

export const calcAlreadyGet = (usersInventories, item) =>
  usersInventories.data.reduce((acc, cur) => {
    return cur.inventoryId === item.id ? acc + cur.quantity : acc;
  }, DEFAULT_ZERO_VALUE);
