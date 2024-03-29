var images = ["https://media.istockphoto.com/id/1312279817/vector/indian-family-three-generations-family-set-of-people-in-traditional-national-clothes.jpg?s=612x612&w=0&k=20&c=TA4nDcMP8W7tNObsqjMMWyJTOEGGel2G9ekpBUNOcrI=","https://cdni.iconscout.com/illustration/premium/thumb/grandmother-is-holding-laddu-sweet-plate-in-hand-2705018-2252470.png", "https://img.freepik.com/premium-vector/indian-young-character-young-character-standing-pose-young-father-cartoon-character_667157-54.jpg" , "https://static.vecteezy.com/system/resources/thumbnails/005/197/941/small/indian-lady-clipart-free-vector.jpg", "https://img.freepik.com/premium-vector/vector-illustration-indian-boy_714605-321.jpg", "https://st3.depositphotos.com/1763191/15960/v/450/depositphotos_159607748-stock-illustration-indian-girl-wearing-shirt-with.jpg"];

var names = ["Family Book","Rashmi Shah - Grandmother", "Nehal Shah - Father", "Jalpa Thakkar - Mother", "Palash Shah - Brother", "Pia Shah - Sister"];

var age = [60, 41, 60, 41, 7, 11]

/*

We must sort the elements present inside the array "age" to print the age value of the family member for the respective family member.

Write: "age.sort()"

*/

age.sort()   ;

/*

We must reverse the elements present inside the array "age" to print the age value of the family member for the respective family member.
After sorting the array "age", all the elements must be arranged in an ascending manner and our family book consists of the exact opposite list i.e. all the first member is Grandfather followed by father and so on ie. in the decending manner.

Write: "age.reverse()"

*/
age.reverse()   ;

var i = 0;

function update()
{
    i++;

    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    
    var updatedImage = images[i];

    var updatedName  = names[i];
    
    var updatedAge = age[i]

    document.getElementById("family_member_image").src = updatedImage;
    
    document.getElementById("family_member_name").innerHTML = updatedName;

    document.getElementById("family_member_age").innerHTML = updatedAge;

    /*

    To find the maximum age value amongst the family members, we need to use the Math, and the max function together and to display the maximum age, we need print the value. Thus make use of console.

    Write:  "var max_number = Math.max.apply(Math, age)
            "console.log("The highest age is: ", max_number)"

    */

    var max_number = Math.max.apply(Math,age);
    console.log("The highest age is: ",max_number);

    /*

    To find the minimum age value amongst the family members, we need to use the Math, and the min function together and to display the maximum age, we need print the value. Thus make use of console.

    Write:  "var min_number = Math.min.apply(Math, age)
            "console.log("The lowest age is: ", min_number)"

    */

    var min_number = Math.min.apply(Math,age);
    console.log("The lowest age is: ",min_number);
}