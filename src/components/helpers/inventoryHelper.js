import { DEFAULT_ZERO_VALUE } from "../../constants/numberConstants";

export const isUserEvent = (organizers, user) =>
  organizers && !!organizers.find(({ id }) => id === user.id);

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
  usersInventories.reduce((totalAmount, { inventoryId, quantity }) => {
    return inventoryId === item.id ? totalAmount + quantity : totalAmount;
  }, DEFAULT_ZERO_VALUE);

export const calculateMyItemAmout = (usersInventories, user, item) => {
  const myInventoryTaken = usersInventories.find(
    inventory =>
      inventory.userId === user.id && inventory.inventoryId === item.id,
  );

  return myInventoryTaken ? myInventoryTaken.quantity : 0;
};
