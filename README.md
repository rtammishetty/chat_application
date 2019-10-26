1. How to share data between Components in Angular
Parent to Child:
1.	Sharing Data via @Input ( ) Decorators:
If we want to pass data from the parent component to the child component, then we need to use two things: @Input ( ) and property binding.

@Input () decorator to allow data to be passed via the template. 
@Input () decorator provide a mechanism to allow a parent component to bind its properties to child component there by giving child access to its data. These binding should point to properties available in the parent component.
// Parent Component
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-parent-home',
  template: `<p> parent-home works! </p>
            <app-child-elder [childMessage1]="parentMessage"></app-child-elder>`,
  styleUrls: ['./parent-home.component.css']
})
export class ParentHomeComponent implements OnInit {
  parentMessage = "This is text is from ParentHomeComponent..!";
  constructor() { }
  ngOnInit() { }
}


// Child Component
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-child-elder',
  templateUrl: `<div>
                  <h4>ChildElderComponent Works..!</h4>
                  <label><b>Message from ParentHomeComponent:</b> {{ childMessage1 }}</label>
                </div>`,
  styleUrls: ['./child-elder.component.css']
})
export class ChildElderComponent implements OnInit {
  @Input() childMessage1: string;

  constructor() { }
  ngOnInit() { }
}


Child to Parent:
a.	Sharing data via ViewChild ( ) Decorator:
When we have to share data between Child to Parent Component, We will have to use ViewChild ( ) Decorator to get reference of the Child Component and get Datan from Child to Parent Component.
One thing here is, you can get data from Child to Parent only after Child View is initialized. This means We need to implement the AfterViewInit lifecycle hook in the Parent Component to receive Data from Child.


b.	Sharing data via Output ( ) Decorator and EventEmitter:
With @Output ( ) and EventEmitter, we can emit Data back from Child Component to Parent Component. Child Component exposes an EventEmitetr property which emits data when an action / event happens at Child Component. Child Component’s EventEmitter property is an Output property, we mention it with @Output ( ) Decorator.

Any communication:
a.	Sibling Components Communication:
Sibling Components can share Data between them using combination of above Parent to Child and Child to Parent relationship. Child1 sends Data to Parent and then Parent sends Data to Child2.



b.	Sharing Data with a Service:
When there no relationship between components that time, we need to use a Service to share Data between Components.
We can use RxJS Subject for sharing Data via the Service.




2. Difference between Component and Directive
http://www.codeandyou.com/2016/01/difference-between-component-and-directive-in-Angular2.html 


3. Component Life Cycle Hooks

4. What is Angular cli

5. What is PIPE? How it differs from Directive or Components?

6.  Explain routing in Angular

7. Services in Angular

8. ng-content directive

9. Explain routing in Angular

10. String interpolation

11. Observables VS Promises

12. What is ViewEncapsulation. How many ways you can do that in Angular?

13. What is the process called by which TypeScript code is converted into JavaScript code?

14. What is Data Binding. How many ways you could do it?

15. Building blocks of Angular

16. Difference between an Annotation and a Decorator in Angular?

17. What are Declarations, Providers and imports in NgModule.

18. AngularJS VS Angular

19. Advantages and Disadvantages of Angular

20. Cross-Platform App Development
21. Single Page Application vs traditional web technology.
22. Constructor VS ngOnInit()
23. renderer method vs native element method.
24. What is Zone or zone.js or zonejs in Angular?
25. Compilation in Angular
26. How you include one embedded view from a defined templateRef which already prepared?
27. List of in built Pipes, Directives.
28. HTTP interceptors
29. Change Detectors
30.Core and Shared Modules for?
31. Steps to increase Angular application performance
32. Best practices to keep Angular application secure
33. Describe a time you fixed a bug/error in an application. How did you approach the problem? What debugging tools did you use? What did you learn from this experience?
34. What’s the most important thing to look for or check when reviewing another team member’s code?
35. Pure PIPE vs Impure PIPE vs Parameterizing PIPE vs Chaining PIPE
36. What is metadata in Angular
37. What is Async PIPE
38. What happens if you use script tag inside template?
39. 












https://hackr.io/blog/angular-interview-questions 
https://www.educba.com/angular-6-interview-questions/ 
https://www.devteam.space/hiring-interview-tips/35-angular-interview-questions-and-answers/ 
https://www.wisdomjobs.com/e-university/angular-6-interview-questions.html 
https://www.code-sample.com/2018/01/angular-6-interview-questions-and.html 
https://github.com/sudheerj/angular-interview-questions 
