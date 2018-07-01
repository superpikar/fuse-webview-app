module.exports = {
  /** 
   * function to compare if two URL are in the same host
   * @see https://stackoverflow.com/a/45983252/1843755
   */
  isSameHost(urlA, urlB) {
    // compare two URL
    if (urlA !== 'about:blank' && urlB !== 'about:blank') {
      const matchesUrlA = urlA.split('/');
      const matchesUrlB = urlB.split('/');
      return matchesUrlA[2] === matchesUrlB[2];
    }
    return true;
  }
}