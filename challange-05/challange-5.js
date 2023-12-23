function cyberReindeer(road, time) {
const roadStatusLog = [];
  let position = 0;
const roadArr = road.replaceAll('S', '.').split('');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < time; i++) {
    let newRoadStatus = [...roadArr];
    const nextChar = roadArr[position + 1];

    if (i < 5) {
      if (nextChar === '|') {
        newRoadStatus[position] = 'S';
      } else {
        newRoadStatus[position] = 'S';
        // eslint-disable-next-line no-plusplus
        position++;
      }
    } else if (i === 5) {
      newRoadStatus = roadArr.map((x) => x.replace('|', '*'));
      // eslint-disable-next-line no-plusplus
      position++;
      newRoadStatus[position] = 'S';
    } else if (i > 5) {
      newRoadStatus = roadArr.map((x) => x.replace('|', '*'));
      // eslint-disable-next-line no-plusplus
      position++;
      newRoadStatus[position] = 'S';
    }

    const newRoadStatusString = newRoadStatus.join('');
    roadStatusLog.push(newRoadStatusString);
  }
  return roadStatusLog;
}

cyberReindeer();