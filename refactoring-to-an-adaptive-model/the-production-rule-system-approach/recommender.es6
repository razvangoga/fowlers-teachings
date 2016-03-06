import model from './recommendationModel.es6'
function executeModel(spec) {
    return model
        .filter((r) => r.condition(spec))
        .forEach((r) => r.result);
}