const validateEventForm = values => {
  const valuesCopy = values;
  if (!values) return valuesCopy;

  if (!values.isPublic) {
    valuesCopy.isPublic = false;
  }

  if (values.isReccurent && !values.frequency) {
    valuesCopy.frequency = 0;
  }

  if (!values.maxParticipants) {
    valuesCopy.maxParticipants = 2147483647;
  }

  if (!values.dateFrom) {
    valuesCopy.dateFrom = new Date(Date.now());
  }

  if (!values.dateTo) {
    valuesCopy.dateTo = new Date(values.dateFrom);
  }

  return valuesCopy;
};
export default validateEventForm;
