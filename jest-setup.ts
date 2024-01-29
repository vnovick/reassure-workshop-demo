import '@testing-library/react-native/extend-expect';
import {configure} from 'reassure';
import {jest} from '@jest/globals';

// eslint-disable-next-line no-undef
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

//TODO Configure reassure:

configure({testingLibrary: 'react-native'});
