export default function buildPartials(name, component) {
    var controller = component.controller || function () { };
    var template = component.template;

    App.directive(name, () => {
        return {
            restrict: 'E',
            controller,
            template,
            link: function (scope, element, attrs) {
                if (attrs.args) {
                    scope.args = scope.$eval(attrs.args);
                }
            }
        }
    });

    if (component.partials) {
        for (var componentName in component.partials) {
            buildPartials(componentName, component.partials[componentName]);
        }
    }
};