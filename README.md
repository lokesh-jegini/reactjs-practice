----------------------------inline-------------------------
1) onClick={ handleClick()} we dont want to call the function directly by uing paranthities.
2)onClick={ handleClick} we want to call the function without uing paranthities
3)onClick={ handleClick()=> {  //anamyous function call when we use why we use
     handleClick()
}} <button onClick={function loki() {
        handleClick();
      }}>named callback</button>

-----------------------------------
1)in inline event listiner concept when we give like this handleClick() function call directly to avoid this we go for call back function concept.

why we use ananymous function

The purpose of using an anonymous function in this context is to call another function, handleClick(), when the onClick event happens. By wrapping the handleClick() function call within the anonymous function, you can control when and how the handleClick() function is executed.

In this case, clicking the element with the onClick event will trigger the anonymous function, which immediately calls the handleClick() function. This allows you to perform any necessary actions or logic defined within the handleClick() function when the onClick event occurs.
----------------------------links--------------

events--(36-46):-https://youtu.be/tnsVz5aHybA
links:-https://youtu.be/4ERMa1HiHaE 

------------------------------event listiner property
 var element = document.querySelector('button');

 1)element will stores the button element in object format
 2)so now element will stores one object
 3)for element we aplly dot method for the acess properties and method


 -------------------addEventListiner method------------ (here i discuseed advantages )
  console.log(propertyButton);
    propertyButton.addEventListener('click', () => {
    
      alert('property button clicked');
    });
    propertyButton.addEventListener('mouseover', () => {
     
      alert('property button clicked');
    });

    1)when we use addeventlistiner method for the same element to give  more  event listiners