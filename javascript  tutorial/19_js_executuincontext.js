/*
1. What is an Execution Context?
An Execution Context is like a “box” or “environment” where JavaScript code runs.

When JS runs, it needs a place to store:

Variables

Functions

The value of this

Scope chain info (how it can find variables)

Think of it as a workspace created every time a piece of JS starts executing.

2. Types of Execution Context
JavaScript mainly has two important types:

Global Execution Context (GEC)

Created when your JS file starts running.

Stores all global variables and functions.

In browsers: this points to window object.

Function Execution Context (FEC)

Created whenever a function is called.

Each call gets its own new context.

Stores that function’s variables, arguments, inner functions.

(There’s also an Eval Execution Context, but we rarely use eval() in real life.)

3. How JS Executes (Step-by-Step)
JS runs in two phases:

Phase 1: Creation Phase
JS scans the code before executing it.

Creates the Execution Context.

Sets up Memory:

Variables are stored with undefined (hoisting).

Function declarations are stored with the actual function.

Sets the value of this.

Phase 2: Execution Phase
Runs the code line by line.

Assigns real values to variables.

Executes functions (creating new function contexts).

4. Example
javascript
Copy
Edit
var name = "Kalyani";

function greet() {
    console.log("Hello " + name);
}

greet();
Step-by-step in memory:

Global Execution Context
Creation Phase

javascript
Copy
Edit
name → undefined
greet → function
this → window
Execution Phase

pgsql
Copy
Edit
name → "Kalyani"
greet() is called → creates Function Execution Context
Function Execution Context (for greet)
Creation Phase

javascript
Copy
Edit
arguments → []
this → window
Execution Phase

pgsql
Copy
Edit
console.log("Hello " + name) → "Hello Kalyani"
5. Behind the Scenes: Call Stack
The Call Stack keeps track of which execution context is running.

When a function is called → New context is pushed onto the stack.

When a function finishes → Context is popped from the stack.

css
Copy
Edit
Stack:
[ GEC ]
→ greet() pushed
→ greet() popped
→ End of script
✅ In short:
JavaScript Execution Context is the environment where code is executed.
It works with a Creation Phase (hoisting) and an Execution Phase,
managed by the Call Stack.
*/