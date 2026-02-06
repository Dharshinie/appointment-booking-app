const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'appointment-app',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser');
}
createUserRef.operationName = 'CreateUser';
exports.createUserRef = createUserRef;

exports.createUser = function createUser(dc) {
  return executeMutation(createUserRef(dc));
};

const listServiceProvidersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListServiceProviders');
}
listServiceProvidersRef.operationName = 'ListServiceProviders';
exports.listServiceProvidersRef = listServiceProvidersRef;

exports.listServiceProviders = function listServiceProviders(dc) {
  return executeQuery(listServiceProvidersRef(dc));
};

const updateAvailabilityRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateAvailability', inputVars);
}
updateAvailabilityRef.operationName = 'UpdateAvailability';
exports.updateAvailabilityRef = updateAvailabilityRef;

exports.updateAvailability = function updateAvailability(dcOrVars, vars) {
  return executeMutation(updateAvailabilityRef(dcOrVars, vars));
};

const getMyReviewsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyReviews');
}
getMyReviewsRef.operationName = 'GetMyReviews';
exports.getMyReviewsRef = getMyReviewsRef;

exports.getMyReviews = function getMyReviews(dc) {
  return executeQuery(getMyReviewsRef(dc));
};
