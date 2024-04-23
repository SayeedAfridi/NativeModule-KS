import SwiftUI

class MyDataStore: ObservableObject {
  @Published var count: NSInteger = 0
  @Published var onIncrement: RCTBubblingEventBlock = { _ in }
  @Published var onDecrement: RCTBubblingEventBlock = { _ in }
  @Published var onClose: RCTBubblingEventBlock = { _ in }
}

class CounterViewProxy: UIView {
  
  var returningView: UIView?
  let dataStore: MyDataStore = .init()
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    let vc = UIHostingController(rootView: CounterView().environmentObject(dataStore))
    vc.view.frame = bounds
    self.addSubview(vc.view)
    self.returningView = vc.view
  }
  
  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  @objc var count: NSInteger = 0 {
    didSet{
      dataStore.count = count
    }
  }
  
  @objc var onIncrement: RCTBubblingEventBlock = {_ in} {
    didSet{
      dataStore.onIncrement = onIncrement
    }
  }
  
  @objc var onDecrement: RCTBubblingEventBlock = {_ in} {
    didSet{
      dataStore.onDecrement = onDecrement
    }
  }
  
  @objc var onClose: RCTBubblingEventBlock = {_ in} {
    didSet{
      dataStore.onClose = onClose
    }
  }
  
  override func layoutSubviews() {
    super.layoutSubviews()
    self.returningView?.frame = bounds
  }
  
}
