import classnames from 'classnames';

export class ClassNameHelper {
  constructor(styles) {
    this.styles = styles;
  }

  getClassNames = (...classObjects) => {
    const classNamesToBeApplied = classObjects.reduce(
      (classNamesArray, currentObject) => {
        const { if: condition, className } = currentObject;
        if (condition != undefined) {
          if (condition === true) {
            return [...classNamesArray, this.styles[className]];
          } else {
            return classNamesArray;
          }
        }
        return [...classNamesArray, this.styles[className]];
      },
      []
    );
    return classnames(classNamesToBeApplied);
  };
}
