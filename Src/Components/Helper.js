import { Dimensions } from 'react-native';
let height = Dimensions.get('screen').height;
let width = Dimensions.get('screen').width;

let ht, wt;

if (height > width) {
  ht = (value) => height * value / 100;
  wt = (value) => width * value / 100;
} else {
  ht = (value) => width * value / 100;
  wt = (value) => height * value / 100;
};
export { ht, wt }