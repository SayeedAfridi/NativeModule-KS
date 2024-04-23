import SwiftUI

struct CounterView: View {
  @EnvironmentObject var dataStore: MyDataStore
  
  var body: some View {
    VStack{
      Text("Counter SwiftUI").font(.system(size: 28, weight: .bold))
      Text(String(dataStore.count)).font(.system(size: 24, weight: .bold))
      Spacer(minLength: 8)
      Button(action: {
        dataStore.onIncrement(["count": dataStore.count + 1])
      }, label: {
        Text("Increment")
      })
      Spacer(minLength: 8)
      Button(action: {
        dataStore.onDecrement(["count": dataStore.count - 1])
      }, label: {
        Text("Decrement")
      })
    }
  }
}
