#pragma once

#include <ReactCommon/JavaTurboModule.h>
#include <ReactCommon/TurboModule.h>
#include <jsi/jsi.h>

#include <react/renderer/components/AppRatingBarViewSpec/AppRatingBarComponentDescriptor.h>

namespace facebook::react {

JSI_EXPORT
std::shared_ptr<TurboModule> AppRatingBarViewSpec_ModuleProvider(const std::string &moduleName, const JavaTurboModule::InitParams &params);

} // namespace facebook::react
