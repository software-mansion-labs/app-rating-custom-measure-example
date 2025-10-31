#pragma once

#include "ComponentDescriptors.h"

#include <react/utils/ContextContainer.h>
#include <react/renderer/core/LayoutConstraints.h>
#include <react/renderer/components/AppRatingBarViewSpec/Props.h>

namespace facebook::react {

    class AppRatingBarMeasurementManager {
    public:
        AppRatingBarMeasurementManager(
                const std::shared_ptr<const ContextContainer>& contextContainer)
                : contextContainer_(contextContainer) {}

        Size measure(SurfaceId surfaceId, LayoutConstraints layoutConstraints, const AppRatingBarViewProps& props) const;

    private:
        const std::shared_ptr<const ContextContainer> contextContainer_;
    };

} // namespace facebook::react
