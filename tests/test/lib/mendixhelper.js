export function isAndroid() {
    return driver.isAndroid;
  }
  
  export function isiOS() {
    return driver.isiOS;
  }

export const selector = (key) =>
  driver.isAndroid ? `//*[@resource-id="${key}"]` : `~${key}`;

export const selectorText = (text) =>
  driver.isAndroid ? `//*[contains(@text, "${text}")]` : `//*[contains(@label, "${text}")]`;

