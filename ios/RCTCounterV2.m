#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(CounterV2, RCTEventEmitter)

RCT_EXTERN_METHOD(increment: (RCTResponseSenderBlock) clb)

RCT_EXTERN_METHOD(decrement:
                  (RCTPromiseResolveBlock) resolve
                  reject: (RCTPromiseRejectBlock) reject)

@end
