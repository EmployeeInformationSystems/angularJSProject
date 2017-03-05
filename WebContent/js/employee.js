/**
 * 
 */

angular.module('getEmployee', [])
.controller('getEmployeeController', function($scope, $http) {
    $http.get('http://localhost:8080/getEmployeeByLastName/vintha').
        then(function(response) {
            $scope.employees = response.data;
        });
});

angular.module('addEmployee', [])
.controller('addEmployeeController', function($scope, $http) {
	alert("inside function");
	var dataObj = {
			"firstName": "sushma",
			"middleName": null,
			"lastName": "vintha",
			"createdBy": "employeeapp",
			"createdDate": "03052017",
			"employeeDetails": {
			"dateOfBirth": "03062017",
			"ssn": 321,
			"role": "Employee",
			"dateOfJoining": "03052017",
			"terminationDate": null
			},
			"address": {
			"addressLine1": "orange county",
			"city": "irvine",
			"state": "CA",
			"country": "usa"
			}
			};
	alert("inside function"+dataObj);
    $http.post('http://localhost:8080/createEmployee',dataObj).
        then(function(response) {
            $scope.greeting = response.data;
        });
});