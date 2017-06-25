import _ from 'lodash';

export function intcomma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export function valueIsEqual(value, other, deep) {
  if (value === other) {
    return true;
  } else if (_.isArray(value) || _.isArray(other)) {
    if (arrayIsEqual(value, other, deep)) {
      return true;
    }
  } else if (_.isObject(value) || _.isObject(other)) {
    if (objectMatchesSubset(value, other, deep)) {
      return true;
    }
  }
  return false;
};
