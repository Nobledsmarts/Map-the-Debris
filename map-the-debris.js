function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(({name, avgAlt}) => {
    return {
      name,
      orbitalPeriod : Math.round((2 * Math.PI) * (Math.sqrt((avgAlt + earthRadius)**3 /GM)))
     }
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
