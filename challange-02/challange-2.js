function manufacture(gifts, materials) {
  // Code here
  const listofgifts = gifts.filter((gift) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < gift.length; i++) {
      if (materials.indexOf(gift[i]) === -1) {
        return false;
      }
    }
    return true;
  });
  return listofgifts;
}
// to define manufacture(), but remove findFirstRepeated when running the code
manufacture();
