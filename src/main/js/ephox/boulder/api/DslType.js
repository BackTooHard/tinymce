define(
  'ephox.boulder.api.DslType',

  [

  ],

  function () {
    // NOTE: This provides cata functions for the ADTs in TypeTokens
    var foldType = function (subject, onSet, onArr, onObj, onItem, onChoice, onThunk, onFunc) {
      return subject.fold(onSet, onArr, onObj, onItem, onChoice, onThunk, onFunc);
    };

    var foldField = function (subject, onField, onState) {
      return subject.fold(onField, onState);
    };

    return {
      foldType: foldType,
      foldField: foldField
    };
  }
);
