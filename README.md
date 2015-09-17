# Unit 1

## Section 1
1. Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?
 - two-way binding and integrated templating
 - filters
1. People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?
1. Is Angular an MVC framework?
 - Yes (ish) Can also be called mvvm or mv whatever
1. Turn to the Angular docs. Find ng-app. What is it and what does it do? What does ng stand for?
 - ng means that something is a directive
 - ng-app initializes the page as an Angular SPA

## Section 2
1. What does ng-model do?
- ng-model binds the input elements of a form to the scope of an ng controller allowing access to set or get information from it.
1. What is "dirty checking"?
- dirty checking uses the angular event loop to determine if a value has changed and update it.
1. Find a way to set the initial value of "name" as "BoJack" (without writing a controller).
- $scope.name = "BoJack"
1. What are those {{ }} expressions? Are they Handlebars?
- they indicate that you are going to use a variable from the $scope in a controller to fill information in a specific place.
1. Explain what two-way data binding is.
- Two way binding is the binding of information such that a change in data results in a change of view and vice-versa
1. BONUS: Research the $digest loop

## Section 4
1. What are Angular expressions? How do they compare to tags from templating engines you've used before?
- Angular expressions are the code between the {{}}. They can be simply displaying a property or they can do more complex functions like filtering, ordering, and all kinds of logical operators.
1. What happens when you write invalid code in an expression? What type of error do you get?
- When you write invalid code in an angular expression, the expression is not rendered and the literal '{{expression}}' is shown.
1. What are Angular filters? Describe what a filter does and then name four built-in filters, including one that we haven't used yet.
- an angular filter arrange, filter, and format data to be displayed. Examples include 'lowerCase', 'currency', 'date', and 'limitTo'.
1. What's the syntax for filters?
- {{ expression | filterKey: 'filterValue' }}
1. Can you use more than one filter?
- yes
1. We'll soon see how to create custom filters. What is a use case for a custom filter?
- If I needed to filter based upon a user's age, weight, income etc..

## Section 5
1. What is the purpose of ng-init?
- ng-init can allow you to evaluate expressions in the current scope <-- similar to a controller, but less preferred for larger logic.
1. Why use ng-src and ng-href?
- when generating dynamic linking a browser will interpret 'http://thissite.com/{{thisImage}}' literally, before angular has the ability to fill in the information. ng-src/href fix this issue
1. What are directives?
- directives are ways of extending html functionality.
1. Does ng-class require an object to be passed in?
- no, it is possible to add a class via a string variable i.e. ng-class="bold-modal" or you can define the class by using class="ng-class: bold-modal"
1. What order does an ng-repeat display items in?
- first to last.
1. How does ng-repeat handle duplicate data?
- You have to specify track by $index or it won't display.

## Section 6
1. What is $scope?
- scope ties the controllers to the view. Properties of the $scope object are available in the view and changes in inputs on the view can update the properties of the $scope in an associated controller.
1. What are Angular modules? What's the syntax for defining a module?
- An angular module creates an object with the ability to attach controllers
1. Why do we pass in $scope as an argument to controller functions?
- !I don't know
1. In Express, what are Angular controllers most analogous to?
- They seem to be similar to the relationship between res.render and swig templating.
