
const calculate = (weightInput, heightInput, ageInput, activityIndex, sexIndex) => {
   return  String(Math.round(((10 * weightInput.value) + (6.25 * heightInput.value) - (5 * ageInput.value) + sexIndex)
        * activityIndex));
};

const getActivityIndex = (evt) => {
    switch (evt.target.id) {
        case 'activity-minimal':
            return 1.2;
        case 'activity-low':
            return 1.375;
        case 'activity-medium':
            return 1.55;
        case 'activity-high':
            return 1.725;
        case 'activity-maximal':
            return 1.9;
    }
}

export {calculate, getActivityIndex}
