const validateEventForm = values => {
  const valuesCopy = values;
  const {
    isPublic,
    isReccurent,
    frequency,
    maxParticipants,
    dateFrom,
    dateTo,
  } = values;
  if (!values) return valuesCopy;

  if (!isPublic) {
    valuesCopy.isPublic = false;
  }

  if (isReccurent && !frequency) {
    valuesCopy.frequency = 0;
  }

  if (!maxParticipants) {
    valuesCopy.maxParticipants = 2147483647;
  }

  if (!dateFrom) {
    valuesCopy.dateFrom = new Date(Date.now());
  }

  if (!dateTo) {
    valuesCopy.dateTo = new Date(values.dateFrom);
  }

  return valuesCopy;
};
export default validateEventForm;
