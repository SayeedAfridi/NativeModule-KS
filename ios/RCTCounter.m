#import "RCTCounter.h"

@implementation RCTCounter

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE(Counter);

 NSInteger count = 0;

RCT_EXPORT_METHOD(increment: (RCTResponseSenderBlock) clb) {
  count += 1;
  clb(@[@(count)]);
}

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(incrementSync) {
  count += 1;
  return @(count);
}

RCT_EXPORT_METHOD(decrement: (RCTPromiseResolveBlock) resolve
                  reject: (RCTPromiseRejectBlock) reject) {
  if(count == 0){
    reject(@"COUNTER_ERROR", @"Count value cannot be less than 0", nil);
  } else {
    count -= 1;
    resolve(@(count));
  }
}

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(decrementSync) {
  if(count == 0) {
    return nil;
  } else {
    count -= 1;
    return @(count);
  }
}

@end
