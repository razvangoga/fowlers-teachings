import getModel from './recommendationModel.es6'

export default function (spec) {
    let result = [];

    const summerPicks = [
        [150, null],
        [350, 'white lightening'],
        [570, 'little master'],
        [Infinity, 'wall']
    ];

    const nonSummerPicks = [
        [150, null],
        [450, 'white lightening'],
        [Infinity, 'little master']
    ];

    result = result.concat(executeModel(spec, getModel()));

    if (spec.minDuration >= 150) {
        if (seasonIncludes("summer")) {
            result.push(pickFromRange(summerPicks, spec.minDuration));
        }
        else {
            result.push(pickFromRange(nonSummerPicks, spec.minDuration));
        }
    }
    return _.uniq(result);
}

function seasonIncludes(spec, arg) {
    return spec.seasons && spec.seasons.includes(arg);
}

function countryIncludedIn(spec, anArray) {
    return anArray.includes(spec.country);
}

function pickFromRange(range, value) {
    const matchIndex = range.findIndex((r) => value < r[0]);
    return range[matchIndex][1];
}

function executeModel(spec, model) {
    return model
        .filter((r) => isActive(r, spec))
        .map((r) => r.result)
}
function isActive(rule, spec) {
    if (rule.condition === 'atNight')
        return spec.atNight;

    if (rule.condition === 'seasonIncludes')
        return seasonIncludes(spec, rule.conditionArgs[0]);

    if (rule.condition === 'countryIncludedIn')
        return rule.conditionArgs.includes(spec.country);

    if (rule.condition === 'and')
        return rule.conditionArgs.every((arg) => isActive(arg, spec));

    throw new Error("unable to handle " + rule.condition);
}