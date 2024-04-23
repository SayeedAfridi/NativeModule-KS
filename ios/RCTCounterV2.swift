import Foundation

@objc(CounterV2)
class CounterV2: RCTEventEmitter {
  private var count: Int = 0;
  
  @objc
  func increment(_ clb: RCTResponseSenderBlock) {
    count += 1;
    clb([count]);
    sendEvent(withName: "increment", body: ["count incresed", count]);
  }
  
  @objc
  func decrement(_ resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
    if(count == 0){
      let error = NSError(domain: "", code: 500, userInfo: nil);
      reject("COUNTER_V2_ERROR", "COUNT VALUE CANNOT BE LESS THAN ZERO", error);
    } else {
      count -= 1;
      resolve(count);
      sendEvent(withName: "decrement", body: ["count decresed", count]);
    }
  }
  
  @objc
  override func supportedEvents() -> [String]! {
    return ["increment", "decrement"];
  }
  
  @objc
  override func constantsToExport() -> [AnyHashable : Any]! {
    return ["INITIAL_COUNT": 0];
  }
}
