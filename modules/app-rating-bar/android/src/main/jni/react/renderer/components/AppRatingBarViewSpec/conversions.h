#pragma once

#include <folly/dynamic.h>
#include <react/renderer/components/FBReactNativeSpec/Props.h>
#include <react/renderer/core/propsConversions.h>

namespace facebook::react {

#ifdef RN_SERIALIZABLE_STATE
inline folly::dynamic toDynamic(const AppRatingBarViewProps &props)
{
  folly::dynamic serializedProps = folly::dynamic::object();
  serializedProps["numStars"] = props.numStars;
  return serializedProps;
}
#endif

} // namespace facebook::react
