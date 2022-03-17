

const initialState = {
    prevLectures: []
};

export default (state = initialState, action) => {
    switch (action.type) {
      case SET_REGIS:
        return {
          ...state,
          prevRegistration: action.registration,
        };
      case ADD_NEW_BATTERY:
        let newState;
        const batteryBarcode = action.battery.batteryBarcode;
        const batteryBrand = action.battery.batteryBrand;
        const batteryType = action.battery.batteryType;
        const dateInstalled = action.battery.dateInstalled;
        const model = action.battery.model;
        const shopDistrict = action.battery.shopDistrict;
        const shopName = action.battery.shopName;
        const shopPhoneNumber = action.battery.shopPhoneNumber;
        const shopProvince = action.battery.shopProvince;
        const warrantyPeriod = action.battery.warrantyPeriod;
        const receivedId = action.id;
        const receivedUserId = action.userId;
        const newBattery = new BatteryRegistration(
          receivedUserId,
          batteryBarcode,
          batteryBrand,
          batteryType,
          warrantyPeriod,
          dateInstalled,
          model,
          shopName,
          shopProvince,
          shopDistrict,
          shopPhoneNumber,
          receivedId
        );
        newState = {
          ...state,
          prevRegistration: [...state.prevRegistration, newBattery],
        };
        return newState;
      case REMOVE_BATTERY:
        return {
          ...state,
          prevRegistration: state.prevRegistration.filter(
            item => item.id !== action.batteryId
          ),
        };
    }
    return state;
  };
  