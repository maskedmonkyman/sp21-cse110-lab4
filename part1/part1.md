
## Part 1a

**q1:** 20

**q2:** 20

**q3:** 20

**q4:** error, result was defined in the if block and does not exist in this scope

**q5:** nothing, line 7 throws an error for trying to modify a const variable so line 9 never runs

**q6:** nothing, line 7 throws an error for trying to modify a const variable so line 13 never runs

## Part 1b

**q1:** 3, that is how many elements are in the list

**q2:** 150, that is the last value in discountedPrice

**q3:** 150, that is the last value in finalPrice

**q4:** [50, 100, 150], each price is multiplied by .5 and then returned in a new list

**q5:** error, i is only defined within the for loop scope

**q6:** error, discount price is only defined within the for loop scope

**q7:** 150, that is the last value in finalPrice

**q8:** [50, 100, 150], each price is multiplied by .5 and then returned in a new list

**q9:** error, i is only defined within the for loop scope

**q10:** 3, that is how many elements are in the list

**q11:** [50, 100, 150], each price is multiplied by .5 and then returned in a new list

**q12:**

	a: student.name;

	b: student["Grad Year"]

	c: student.greeting()

	d: student["Favorite Teacher"].name

	e: student.courseLoad[0]

**q13:**

	a: "30", 2 is converted into a string and appended to '3'

	b: 1, '3' is converted into a number

	c: 3, null is converted to 0

	d: 3null, (this language is terrible) null is converted to a string and appended to '3'

	e: 4, true is converted to 1

	f: 0, both null and false are converted to 0

	g: 3undefined, (this language is terrible) undefined is converted to a string and appended

	h: NaN: (at least this is correct) '3' is converted to a number and undefined is subtracted from it becoming undefined

**q14:**

	a: true, '2' is converted to a number

	b: false, the string '12' is alphanumerically smaller than '2'

	c: true, '2' is converted to a number

	d: false, '2' is not converted string != number

	c: false, true is converted to 1 and 1 != 2

	f: true, Boolean(2) converts to true

**q15:** == will convert both values to numbers to check equality, === will do type checking first and return false if types are different

**q17:** [2, 4, 6], each element of the array is run through the call back function, in this case callback multiplies the element by 2, so each element of the original array is doubled

**q19:** 1, 4, 3, 2