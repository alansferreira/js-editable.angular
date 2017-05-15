/*
MIT License

Copyright (c) 2017 Alan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var ngEditable = angular.module('ngEditable', []);

ngEditable.directive('editable', function ($parse) {
  return {
    restrict: 'A',
    scope: {
      edtValue: '@',
      edtAutoUpdate: '&edtAutoUpdate',
      edtAutoMetrics: '&edtAutoMetrics',
      edtInfiniteNavigation: '&edtInfiniteNavigation',
      edtOnCommit: '&edtOnCommit',
      edtInput: '&edtInput'
    },

    link: function (scope, element) {
      var options = {
        edtAutoUpdate: scope.edtAutoUpdate(),
        edtAutoMetrics: scope.edtAutoMetrics(),
        edtInfiniteNavigation: scope.edtInfiniteNavigation(),
        edtOnCommit: _onCommit,
        edtInput: scope.edtInput()
      }
      function _onCommit() {
        scope.$apply(function () { $parse(scope.edtValue).assign(scope.$parent, $(scope.edtInput()).val()); });
        if (scope.edtOnCommit()) scope.edtOnCommit()();
      }

      $(element).editable(options);
    },
  };
});

try {
  module.exports = ngEditable;
} catch (error) {
  
}