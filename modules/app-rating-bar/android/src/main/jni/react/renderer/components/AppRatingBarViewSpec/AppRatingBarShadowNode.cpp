#include "AppRatingBarShadowNode.h"

#include <react/renderer/core/LayoutContext.h>

namespace facebook::react {

extern const char AppRatingBarViewComponentName[] = "AppRatingBarView";

void AppRatingBarShadowNode::setMeasurementManager(
        const std::shared_ptr<AppRatingBarMeasurementManager> &measurementsManager) {
    ensureUnsealed();
    measurementsManager_ = measurementsManager;
}

Size AppRatingBarShadowNode::measureContent(const LayoutContext &layoutContext,
                                            const LayoutConstraints &layoutConstraints) const {

    return measurementsManager_->measure(getSurfaceId(), layoutConstraints, getConcreteProps());
}

} // namespace facebook::react
