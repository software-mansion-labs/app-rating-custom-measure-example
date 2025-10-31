#pragma once

#include "AppRatingBarShadowNode.h"
#include "AppRatingBarMeasurementManager.h"

#include <react/renderer/core/ConcreteComponentDescriptor.h>

namespace facebook::react {

class AppRatingBarComponentDescriptor final
    : public ConcreteComponentDescriptor<AppRatingBarShadowNode> {
  public:
    AppRatingBarComponentDescriptor(
      const ComponentDescriptorParameters& parameters)
        : ConcreteComponentDescriptor(parameters),
            measurementsManager_(
                std::make_shared<AppRatingBarMeasurementManager>(
                        contextContainer_)) {}

    void adopt(ShadowNode &shadowNode) const override {
      ConcreteComponentDescriptor::adopt(shadowNode);

      auto& appRatingBarShadowNode = static_cast<AppRatingBarShadowNode&>(shadowNode);
      appRatingBarShadowNode.setMeasurementManager(measurementsManager_);
    }

  private:
    const std::shared_ptr<AppRatingBarMeasurementManager> measurementsManager_;
};

} // namespace facebook::react
