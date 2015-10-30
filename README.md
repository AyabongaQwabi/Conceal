# Conceal

## Welcome to the Conceal wiki!

# ConcealJS allows you to make any input field a password marked up with your style of choice.
### So instead of your password field showing `***********` or dots you can set it to any string to display e.g 'PASSWORD'

###Lets get started
1. Initialize Concealer Object
`var myFancyInput = new concealer()`

2. Conceal Desired input field
` myFancyInput.conceal('#passwordInputField' ,'my secret password')`

3. To reveal concealed data 
`myFancyInput.reveal()` shows the original password on the input field
 
4. To store/retrieve original password
` var real = myFancyInput.reveal()`
