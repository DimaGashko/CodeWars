function solution(input, markers) {
  return input.split('\n').map(line => {
    return line.slice(0, getFirstMarkerIndex(line, markers)).replace(/\W+$/, "");
  }).filter(line => line !== '').join('\n');
}

function getFirstMarkerIndex(line, markers) {
  const indexes = markers.map(marker => line.indexOf(marker))
    .filter(index => index != -1);

  return Math.min(...indexes)
}