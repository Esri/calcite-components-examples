function getRoundRobinIndex(index, total) {
  return (index + total) % total;
}

export { getRoundRobinIndex as g };
