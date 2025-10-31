#pragma once

#include "AppRatingBarMeasurementManager.h"

#include <react/renderer/components/AppRatingBarViewSpec/EventEmitters.h>
#include <react/renderer/components/AppRatingBarViewSpec/Props.h>
#include <react/renderer/components/view/ConcreteViewShadowNode.h>
#include <jsi/jsi.h>

namespace facebook::react {

JSI_EXPORT extern const char AppRatingBarViewComponentName[];

class AppRatingBarShadowNode final : public ConcreteViewShadowNode<
    AppRatingBarViewComponentName,
    AppRatingBarViewProps,
    AppRatingBarViewEventEmitter> {
    public:
        using ConcreteViewShadowNode::ConcreteViewShadowNode;

        static ShadowNodeTraits BaseTraits() {
            auto traits = ConcreteViewShadowNode::BaseTraits();
            traits.set(ShadowNodeTraits::Trait::LeafYogaNode);
            traits.set(ShadowNodeTraits::Trait::MeasurableYogaNode);
            return traits;
        }

        void setMeasurementManager(
            const std::shared_ptr<AppRatingBarMeasurementManager>&
                     measurementsManager);

        Size measureContent(
            const LayoutContext& layoutContext,
            const LayoutConstraints& layoutConstraints) const override;

    private:
        std::shared_ptr<AppRatingBarMeasurementManager> measurementsManager_;
};

} // namespace facebook::react
