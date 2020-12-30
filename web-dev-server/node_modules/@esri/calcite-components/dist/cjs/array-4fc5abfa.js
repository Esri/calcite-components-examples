'use strict';

function getRoundRobinIndex(index, total) {
  return (index + total) % total;
}

exports.getRoundRobinIndex = getRoundRobinIndex;
