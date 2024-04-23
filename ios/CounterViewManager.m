#import "React/RCTViewManager.h"
@interface RCT_EXTERN_MODULE(CounterViewManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(onClose, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onIncrement, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onDecrement, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(count, NSInteger)
@end
