import model from './recommendationModel.es6'
function executeModel(spec) {
    let result = [];
    model
        .filter((r) => r.condition(spec))
        .forEach((r) => r.action(result));
    return result;
}