import { codegenNativeComponent, type ViewProps } from 'react-native';
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";

interface NativeProps extends ViewProps {
  numStars: Int32;
}

export default codegenNativeComponent<NativeProps>('AppRatingBarView', {
  interfaceOnly: true
});
