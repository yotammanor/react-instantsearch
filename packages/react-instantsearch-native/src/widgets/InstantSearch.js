import algoliasearch from 'algoliasearch/lite';
import { View } from 'react-native';
import { createInstantSearch } from 'react-instantsearch-core';

const InstantSearch = createInstantSearch(algoliasearch, {
  Root: View,
});

export default InstantSearch;
