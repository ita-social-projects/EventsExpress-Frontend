const parseReccurentEvents = data =>
  data.items.map(
    ({
      eventId: id,
      frequency,
      isActive,
      lastRun,
      nextRun,
      periodicity,
      title,
    }) => ({
      id,
      frequency,
      isActive,
      lastRun,
      nextRun,
      periodicity,
      title,
    }),
  );
  
  export default parseReccurentEvents;
