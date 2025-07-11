// src/utils.js

/**
 * Removes duplicates from an array.
 * @param {Array} arr - The array to deduplicate.
 * @returns {Array} - A new array with unique items.
 */
export const uniqueArray = (arr) => [...new Set(arr)];
