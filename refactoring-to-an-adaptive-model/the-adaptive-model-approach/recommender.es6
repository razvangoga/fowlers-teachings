import getModel from './recommendationModel.es6'

export default function (spec) {
    let result = [];

    result = result.concat(executeModel(spec));

    if (seasonIncludes("summer")) {
        if (["sparta", "atlantis"].includes(spec.country)) result.push("white lightening");
    }
    if (spec.minDuration >= 150) {
        if (seasonIncludes("summer")) {
            if (spec.minDuration < 350) result.push("white lightening");
            else if (spec.minDuration < 570) result.push("little master");
            else result.push("wall");
        }
        else {
            if (spec.minDuration < 450) result.push("white lightening");
            else result.push("little master");
        }
    }
    return _.uniq(result);
}

function seasonIncludes(spec, arg) {
    return spec.seasons && spec.seasons.includes(arg);
}

function executeModel(spec) {
    return getModel()
        .filter((r) => isActive(r, spec))
        .map((r) => r.result)
}
function isActive(rule, spec) {
    if (rule.condition === 'atNight')
        return spec.atNight;

    if (rule.condition === 'seasonIncludes')
        return seasonIncludes(spec, rule.conditionArgs[0])

    throw new Error("unable to handle " + rule.condition);
}