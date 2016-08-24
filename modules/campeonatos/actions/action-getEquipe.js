module.exports = (equipeId, equipes) => {
  let time = '';
  equipes.forEach((element) => {
    if (equipeId == element.id) {
      time = element.time;
      return;
    }
  });
  return time;
};
