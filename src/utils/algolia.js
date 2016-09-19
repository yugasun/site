/**
 * Init algolia client search
 */

import algoliasearch from 'algoliasearch'
// TODO: move this out to config
const algolia = {
  appId: 'VGEPIZHWY4',
  indexName: 'getstarted_actors',
  searchKey: '02f74b26f33b7d5e16b0558f4c24ec8f',
}
export const client = algoliasearch(algolia.appId, algolia.searchKey)
export const indexName = algolia.indexName
