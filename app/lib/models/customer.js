class Customer {
  constructor(options) {
    let {
      document,
      id,
      givenName,
      middleInitial,
      familyName,
      age,
      householdIncome,
      address,
      city,
      state,
      zip,
      autoInsurance,
      homeOwnersInsurance,
    } = options;

    this._id = String(id);

    if (document) {
      _.extend(this, document)
    } else if (_.isNull(id) || _.isUndefined(id)) {
      throw new Meteor.Error('Customer needs id field');
    } else {
      _.extend(this, {
        id: String(id),
        givenName,
        middleInitial,
        familyName,
        age,
        householdIncome,
        address,
        city,
        state,
        zip,
        autoInsurance,
        homeOwnersInsurance,
      });
    }
  }
}


global.Customer = Customer;
